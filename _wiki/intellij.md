## 一些技巧：
在任何时候，按下alt键，界面上的菜单字符中有些会有下划线，这时用alt+下划线即是执行这个菜单功能的快捷键。
可自定义一些快捷键，避免使用鼠标。IDEA支持宏，使用起来也很简单。

### 一、视图切换快捷键
1、各视图区域的切换 cmd + 视图区域对应的数字
2、切换到maven的视图 alt + m
3、装了switchTab插件后，按下ctrl+tab后会得到可切换的区域列表
4、cmd+e                 列出最近查看的文件列表
5、shift + cmd + e   最近修改文件列表

### 二、搜索快捷键
IDEA的搜索非常强大，可秒杀eclipse.在project,maven等视图及出现列表的场景下，直接输入字符即开始搜索，可以说搜索无处不在。
1、在编辑文档中，cmd+f 开始搜索 cmd + r 搜索替换
2、在project中，按下ctrl + shift + f(r) 即是在当前目前下递归查找或替换,搜索出来后，要全部替换，按下alt + a
3、alt + F7      搜索对象被引用的地方
4、cmd + F7   搜索对象在当前文件被引用的地方
5、cmd + n     查找类
6、shift + cmd + n  查找文件
上面两个查找都支持简单的正则表达式，还支持直接按大写字母的缩略查找如JsonTranscoder,只需要输入JT

### 三、编辑代码的快捷键
cmd + j                 调出IDEA的神器live template，你懂的  
ctrl + n                各种自动生成代码，创建文件，生成set get override…  
alt + enter           调出IDEA对出错点的提示处理方法，熟练使用可使你写代码的速度提升5倍  
cmd + D              复制粘贴当前行到下一行  
cmd + c|v|x        这些你都懂的  
shift + cmd + v  调出IDEA寄存器中保存的最近复制的N份内容，可选择性粘贴  
cmd + /                注释/取消注释  
cmd + w               选中当前光标所在的字  
shift + cmd + enter 神器，补全当前行，最常用的场景时补全当前行后的；号，并将光标定位到下一行  
cmd + O              overide 方法  
cmd + I                implement 方法  
其实上面两个快捷键很少用，因为有alt + enter 可完全替换掉这两个快捷键的功能  
shift + cmd + L                   格式化代码  
shift + cmd + O                   static import  
shift + cmd + up/down    将当前代码段上/下移  
shift + alt + up/down       将当前行上/下移  

#### 重构的快捷键  
F6 移动文件到其它地方   
F5 拷贝文件到其它地方  
IDEA的移动文件功能非常强大，会将所有的使用该文件的类和XML配置中的类路径全部更新为新的路径。  
shift + F6              改名  
cmd + F6                修改方法签名  
shift + cmd + F6    修改参数的类型  
shift + cmd + v       引入一个局部变量  
shift + cmd + p       引入一个参数  
shift + cmd + f        引入一个类变量  
shift + cmd + m      引入一个方法  
shift + cmd + c        引入一个常量  
alt + cmd + F7      查看某方法被调用的地方  

### 四、查看代码快捷键
cmd + p                  查询某方法的参数信息  
cmd + b                  跳到调用方法的定义处  
alt + cmd + b            跳到方法的实现处  
cmd + u                  跳到方法在父类或接口的定义处  
ctrl + up/down           跳到上/下一方法  
alt + cmd + left/right   跳到上/下一次光标查看处  
cmd + g                  跳到指定行  
cmd + shift + h          显示方法的层级结构  
alt + cmd + h            调用层级结构  

### 五、运行程序与Debug
shift + alt + F9                      debug模式运行程序  
shift + alt + F10                     运行程序  
F7                                    单步进入  
F8                                    单步跳过  
F9                                    跳过本次debug  
alt + F8                              debug时执行选中的语句  

### 六、其它常用快捷键
cmd + ,                  调出setting界面  
cmd + ;                  调出项目setting界面  
cmd + f4                 关闭当前界面  
