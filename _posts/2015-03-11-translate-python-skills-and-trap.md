---
layout: post
title: 一些 Python 技巧和陷阱（译）
categories: python
description: 翻译的一篇Python技巧和陷阱的文章。
keywords: python, 技巧
---


#介绍
python（以及他的库）是很庞大有用的。他可以用来做系统自动化、web应用、大数据、数据分析以及安全软件。这篇文章旨在说明一些可以帮你更快更好地开发、debug的鲜为人知的小技巧。
对于每一种语言来说，一旦你学了这个语言，你真正得到的并不是这个语言本身的特性能力，而是你学会他的编程风格、学会用他的库以及python社区里的知识。
#探索标准数据类型
###低调的enumerate
迭代python里的任何内容都是很容易的，你只要这样就行了：```for foo in bar: ```   
```

drinks=["coffee","tea","milk","water"]
for drink in drinks:
  print("thirsty for",drink)
#thirsty for coffee
#thirsty for tea
#thirsty for milk
#thirsty for water
```
但是除了这些items之外，我们经常也会需要知道item的index。我们经常会看到一些程序员通过len()和range() 用index迭代一个list，这里有一种更简单的方式：

```
drinks=["coffee","tea","milk","water"]
for index, drink in enumerate(drinks):
    print("Item {} is {}".format(index,drink))
#Item 0 is coffee
#Item 1 is tea
#Item 2 is milk
#Item 3 is water
```
内建的enumerate方法生成了index以及item。

###集合
有很多的场景是可以归结到集合操作的。我们需要确保list没有重复元素？需要看两个list有哪些共同项？python的set类型可以让这些操作更快并且更可读的。

```
# deduplicate a list *fast*
print(set(["ham","eggs","bacon","ham"]))
# {'bacon', 'eggs', 'ham'}
```

```
# compare lists to find differences/similarities
# {} without "key":"value" pairs makes a set
menu={"pancakes","ham","eggs","bacon"}
new_menu={"coffee","ham","eggs","bacon","bagels"}
new_items=new_menu.difference(menu)
print("Try our new",", ".join(new_items))
# Try our new bagels, coffee
discontinued_items=menu.difference(new_menu)
print("Sorry, we no longer have",", ".join(discontinued_items))
# Sorry, we no longer have pancakes
```

```
old_items=new_menu.intersection(menu)
print("Or get the same old",", ".join(old_items))
# Or get the same old eggs, bacon, ham
full_menu=new_menu.union(menu)
print("At one time or another, we've served:",", ".join(full_menu))
# At one time or another, we've served: coffee, ham, pancakes, bagels, bacon, eggs
```
intersection函数比较所有的items，然后只把两个集合里都有的items返回。

###collections.namedtuple
当你不需要类的方法，但是又想要foo.prop这样的简便时，没有什么比namedtuple更好了。你可以提前定义fields，然后初始化一个比完整对象占用内存更少的轻量级的类。

```
LightObject=namedtuple('LightObject',['shortname','otherprop'])
m=LightObject()
m.shortname='athing'
> Traceback(most recent call last):
> AttributeError:can't set attribute
```
就像你不能改变一个tuple的成员一样，你也不能设置namedtuple的属性。你需要做的是当你初始化namedtuple时设置他的属性。

```
LightObject=namedtuple('LightObject',['shortname','otherprop'])
n=LightObject(shortname='something',otherprop='something else')
n.shortname# something
```
###collections.defaultdict
在python app里我们经常会看到这样的逻辑：我们需要去考虑key初始时是不是存在，类似这样：

```
login_times = {}
for t in logins:
    if login_times.get(t.username, None):
        login_times[t.username].append(t.datetime)
    else:
        login_times[t.username] = [t.datetime]
```
通过```defaulltdict```我们可以跳过上面的逻辑，直接访问undefined key。

```
login_times = collections.defaultdict(list)
for t in logins:
    login_times[t.username].append(t.datetime)
```
你甚至可以自定义类，给出构造函数去build一个类。

```
from datetime import datetime
class Event(object):
    def __init__(self, t=None):
    if t is None:
        self.time = datetime.now()
    else:
        self.time = t
events = collections.defaultdict(Event)
for e in user_events:
    print(events[e.name].time)
```
除了用defaultdict，我们可以用```addict```去设置嵌套的key。

```
normal_dict = {
    'a': {
        'b': {
            'c': {
                'd': {
                    'e': 'really really nested dict'
                }
            }
        }
    }
}

from addict import Dict
addicted = Dict()
addicted.a.b.c.d.e = 'really really nested'
print(addicted)
# {'a': {'b': {'c': {'d': {'e': 'really really nested'}}}}}
```
这段代码比标准的```dict```更简单，那么```defaultdict```可以吗？看起来应该可以。

```
from collections import defaultdict 
default = defaultdict(dict) 
default['a']['b']['c']['d']['e'] = 'really really nested dict' # fails
```
这样看起来应该是可以的，但是他抛出了```KeyError```异常，因为```default['a']```是一个```dict```，不是```defaultdict```
如果你只是需要一个counter，你可以用[```collections.Counter```](https://docs.python.org/3.4/library/collections.html#collections.Counter)来提供像```most_common```这样的功能。

#控制流
当我们学习python里面的控制结构的时候，通常我们会接触到for，while，if-elif-else，以及try-except。合理地利用这些控制结构我们可以解决绝大多数的问题。不过python也提供了一些其他不常用的结构，这些结构有时可以让你的代码可读性更好，而且更易于维护。
###异常处理
当处理数据库，sockets，文件或者任何其他处理时可能失败的资源时，Exception是一种很常见的流程控制模式。通过标准的```try  except```，比如操作数据库：

```
try:
    # get API data
    data = db.find(id='foo') # may raise exception
    # manipulate the data
    db.add(data)
    # save it again
    db.commit() # may raise exception
except Exception:
    # log the failure
    db.rollback()

db.close()
```
你可以指出这段代码的问题吗？
这里有两个可能出现的异常，他们会触发相同的```except```代码块。这意味着find数据失败会引起rollback。这绝不是我们希望的，因为在那个点发生的异常甚至还没有开始一个数据库事务。对于一个连接失败来说，rollback并不是一个正确的处理方式，所以我们要把上面的代码拆分开来。
首先我们需要处理find数据。

```
try:
    # get API data
    data = db.find(id='foo') # may raise exception
except Exception:
    # log the failure and bail out
    log.warn("Could not retrieve FOO")
    return

# manipulate the data
db.add(data)
```
现在取数据有他自己的try-except了。如果没有数据我们的代码也没有什么可以做的了，所以我们可以退出函数或者我们也可以创建一个默认对象然后重试这个query，或者kill整个程序。
现在，我们处理commit。
```
try:
    db.commit() # may raise exception
except Exception:
    log.warn("Failure committing transaction, rolling back")
    db.rollback()
else:
    log.info("Saved the new FOO")
finally:
    db.close()
```
这里我们加了两句话。首先我们看```else```，当没有异常时会执行他。在我们的例子里面，他只是在日志里打了事务成功，但是你也可以根据需要放些需要的行为。比如你可能会执行一个后台的job或者一个通知。
这里```finally```是为了确保```db.close()```总能执行的。我们可以看到我们所有的代码都是跟```commit```这个操作绑在一起的。

###上下文和控制流程
我们已经看到了上面怎么用exceptions去控制流程。总的来说步骤如下：
1. Attempt to acquire a resource (file, network connection, whatever)
2. If it fails, clean up anything left behind
3. Otherwise, perform actions on the resource
4. Log what happened
5. Program complete

知道这个以后，我们用第二种方法来处理前面的数据库的例子。我们用try-except-finally来确保任何事务要么就committed，要么就rolled back。
```
try:
    # attempt to acquire a resource
    db.commit()
except Exception:
    # If it fails, clean up anything left behind
    log.warn("Failure committing transaction, rolling back")
    db.rollback()
else:
    # If it works, perform actions
    # In this case, we just log success
    log.info("Saved the new FOO")
finally:
    # Clean up
    db.close()
# Program complete
```
我们之前的例子就是上面这几步，那么我们可以对这个逻辑做些什么修改呢？
对于每次我们保存数据，我们都需要准确地执行上面的这些步骤。所以我们可以把这些逻辑放进方法里，或者我们可以用一个上下文管理器。
```
db = db_library.connect("fakesql://")
# as a function
commit_or_rollback(db)

# context manager
with transaction("fakesql://") as db:
    # retrieve data here
    # modify data here
```
待续

























