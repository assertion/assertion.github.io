---
layout: post
title: 寻找关联的fansid
categories: 工程
description: 根据nginx log记录的sessionid，找出关联的fansid。
keywords: mapreduce, hbase
---

## 问题：
因为账号体系的特殊性，customer_id和fans_id是一对一的，而weixin_openid是微信那边通过用户的id跟用户关注的公众号id做hash之后的结果，所以现有账户体系下我们没办法知道某一个人跨店铺买了哪些东西，而这个问题在关联规则挖掘以及找共现矩阵的时候就会出问题，同一个人在其他店铺里的购买行为我们也没办法知道，虽然我们有我们自己的账户体系，但是现在很多用户并不需要注册我们的自己账号就可以完成交易。

## 解决方案：
用session_id来粗略地定位到一个用户，同一个sessionid对应的几个fansid认为是同一个人，但是因为sessionid会定期清除更新，所以同一个fansid的sessionid可能会出现多个，不同sessionid对应的fansid的集合如果有交集，我们认为这是同一个用户，应该把两个集合合并。

## 具体步骤：
1. 取出hive里存的nginxlog里的sessionid跟fansid都不为空的记录，存进一张新表里；

2. 用mapreduce把hive里存的数据根据session_id来merge，同一个session_id下面的用户认为是一个人，处理结果类似这样：  
```
sessionid1: fansid1, fansid2,fansid3  
sessionid2: fansid1, fansid12,fansid13  
……
```

3. 对上面的结果进行拆分，结果类似这样：  
```
fansid1:fansid1,fansid2,fansid3
fansid2:fansid1,fansid2,fansid3  
fansid3:fansid1,fansid2,fansid3  
fansid1:fansid1, fansid12,fansid13  
fansid12:fansid1, fansid12,fansid13  
fansid13:fansid1, fansid12,fansid13  
……  
```

4. 对相同的fansid做merge，结果类似这样：
```
fansid1:fansid1,fansid2,fansid3,fansid12,fansid13
fansid2:fansid1,fansid2,fansid3   
fansid3:fansid1,fansid2,fansid3   
fansid12:fansid1, fansid12,fansid13   
fansid13:fansid1, fansid12,fansid13   
......
```

5. 找存在交集的fansid，认为是同一个用户，针对每个fansid，需要找出他关联的每个fansid，然后取出关联的这个fansid关联的fansid，然后取并集。举例来说，fansid1，首先取fansid2，然后取出fansid2关联的fansid：fansid1,fansid2,fansid3，然后做并集，（fansid1,fansid2,fansid3,fansid12,fansid13）并（fansid1,fansid2,fansid3），然后继续取fansid3.....   
  这里有一个问题，就是需要存储中间结果，用来取每个关联fansid各自的fansid，原先的数据是存hdfs的，没法做K/V的实时查询，所以需要一个中间结果存储介质。我们的数据行数近1kw。有几种存储方案可以选择，这里尝试了两种。   
  一种是把mapreduce计算出的中间结果— hdfs上的文件通过DistributedCache缓存到各个任务节点，DistributedCache会把hdfs上的文件拷到各自任务节点的作为一个临时文件，然后我们在任务的setup阶段把文件读进内存里自己定义的数据结构里，结果读进去就OOM了，不要说后面还要基于这个数据做其他的操作了。   
  第二种是现在的方案，中间结果存hbase，rowkey用fansid，列存关联的fansid，因为同是hadoop家族成员，mapreduce和hbase的交互很方便，有很好用的API可以直接用。之前的mapreduce写hdfs文件的方式改成直接写进hbase，后面mapreduce任务直接根据一定的切分规则各自读取指定段的hbase里的数据进行处理，处理过程中需要到hbase里根据fansid取关联fansid做并集，所以有1kw行就需要访问至少1kw次hbase，这里的瓶颈就在访问hbase了。后面看了一些可以过滤的情况，访问次数被大幅减少了。

## 一个完整的例子（hive初始数据处理忽略）：
下面是fansid跟关联的fansid的映射：  
```
1:1,2,3
2:1,2,3
3:1,2,3
2:2,3,4
3:2,3,4
4:2,3,4
1:1,5
5:1,5
5:5,6
6:5,6
6:6,7
7:6,7
8:8,9,10
9:8,9,10
10:8,9,10
```  
通过我们上面的处理，最后的映射关系应该是：  
```
1 3,2,1,5,4,6,7
10 10,9,8
2 3,2,1,4,5,6,7
3 3,2,1,4,5,6,7
4 3,2,4,1,5,6,7
5 1,6,5,3,2,7,4
6 7,6,5,1,3,2,4
7 7,6,5,1,3,2,4
8 10,9,8
9 10,9,8
```

## 具体流程备忘：  
1. hive处理nginx_log表。  
```
insert overwrite table sessionid_releated_fansid partition (par='2015') select distinct kdtsessionid, fans_id from nginx_log where kdtsessionid <> 'none' and fans_id <> 'none';
```

2. map reduce任务处理上面的结果，得到fansid与关联的fansid的映射  
```
hadoop fs -rm -r /user/hive/warehouse/st.db/sessionid_releated_fansid/res=2015
hadoop jar associationgoods-0.0.1-SNAPSHOT-jar-with-dependencies.jar  com.kdt.datapreprocess.GenerateRelatedFansIdJob  /user/hive/warehouse/st.db/sessionid_releated_fansid/par=2015  /user/hive/warehouse/st.db/sessionid_releated_fansid/res=2015
```
注：行数应该等于上面的文件的行数  

3. 两个map reduce任务顺序执行，第一个merge上面的fansid，第二个查找每个fancied关联的所有fansid，得到最终fansid与关联的fansid的映射
```
truncate 'related_fansid_intermediate_result'
hadoop fs -rm -r  /user/hive/warehouse/st.db/sessionid_releated_fansid/final_res
hadoop jar associationgoods-0.0.1-SNAPSHOT-jar-with-dependencies.jar com.kdt.datapreprocess.MergeFansIdJob /user/hive/warehouse/st.db/sessionid_releated_fansid/res=2015 /user/hive/warehouse/st.db/sessionid_releated_fansid/final_res
```   
注：hbase总行数计算：
```hbase org.apache.hadoop.hbase.mapreduce.RowCounter 表名 ```


