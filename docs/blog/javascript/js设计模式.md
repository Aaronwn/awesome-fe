
## 设计模式定义

设计模式（Design pattern）是一套被反复使用、多数人知晓的、经过分类编目的、代码设计经验的总结。使用设计模式是为了可重用代码、让代码更容易被他人理解、保证代码可靠性。 

## 单体模式

概念：

单体是一个用来划分命名空间并将一批相关的属性和方法组织在一起的对象，如果他可以被实例化，那么他只能被实例化一次。

特点：
  1. 可以来划分命名空间，从而清除全局变量所带来的危险。
  2. 利用分支技术来封装浏览器之间的差异。
  3. 可以把代码组织的更为一体，便于阅读和维护。

代码实现：
```js
/*Basic Singleton*/
var Singleton = {
    attribute:true,
    method1:function(){},
　　 method2:function(){}
};
```

应用场景：

单体模式在我们平时的应用中用的比较多的，相当于把我们的代码封装在一个起来，只是暴露一个入口，从而避免全部变量的污染。

## 单例模式

概念：单例模式定义了一个对象的创建过程，此对象只有一个单独的实例，并提供一个访问它的全局访问点。也可以说单例就是保证一个类只有一个实例，实现的方法一般是先判断实例存在与否，如果存在直接返回，如果不存在就创建了再返回，这就确保了一个类只有一个实例对象。

代码实现：
```js
var single = (function(){
    var unique;
    function getInstance(){
　　　　// 如果该实例存在，则直接返回，否则就对其实例化
        if( unique === undefined ){
            unique = new Construct();
        }
        return unique;
    }
    function Construct(){
        // ... 生成单例的构造函数的代码
    }
    return {
        getInstance : getInstance
    }
})();
```

使用场景：

单例模式是一种常用的模式，有一些对象我们往往只需要一个，比如全局缓存、浏览器的window对象。在js开发中，单例模式的用途同样非常广泛。试想一下，当我们单击登录按钮的时候，页面中会出现一个登录框，而这个浮窗是唯一的，无论单击多少次登录按钮，这个浮窗只会被创建一次。因此这个登录浮窗就适合用单例模式。

总结一下它的使用场景:
  - 可以用它来划分命名空间
  - 借助单例模式，可以把代码组织的更为一致，方便阅读与维护

## 观察者模式(发布订阅模式)

概念：

定义对象间的一种一对多的依赖关系，以便当一个对象的状态发生改变时，所有依赖于它的对象都得到通知并自动刷新，也被称为是发布订阅模式。它需要一种高级的抽象策略，以便订阅者能够彼此独立地发生改变，而发行方能够接受任何有消费意向的订阅者。

代码实现：
```js
var pubsub = {};   // 定义发布者

(function (q) {

    var list = [],  //回调函数存放的数组，也就是记录有多少人订阅了我们东西
        subUid = -1;

    // 发布消息,遍历订阅者
    q.publish = function (type, content) {
        // type 为文章类型，content为文章内容
        
        // 如果没有人订阅，直接返回
        if (!list[type]) {

            return false;
        }

        setTimeout(function () {
            var subscribers = list[type],
                len = subscribers ? subscribers.length : 0;

            while (len--) {
                // 将内容注入到订阅者那里
                subscribers[len].func(type, content);
            }
        }, 0);

        return true;

    };
    //订阅方法，由订阅者来执行
    q.subscribe = function (type, func) {
        // 如果之前没有订阅过
        if (!list[type]) {
            list[type] = [];
        }

        // token相当于订阅者的id，这样的话如果退订，我们就可以针对它来知道是谁退订了。
        var token = (++subUid).toString();
        // 每订阅一个，就把它存入到我们的数组中去
        list[type].push({
            token: token,
            func: func
        });
        return token;
    };
    //退订方法
    q.unsubscribe = function (token) {
        for (var m in list) {
            if (list[m]) {
                for (var i = 0, j = list[m].length; i < j; i++) {
                    if (list[m][i].token === token) {
                        list[m].splice(i, 1);
                        return token;
                    }
                }
            }
        }
        return false;
    };

} (pubsub));

//将订阅赋值给一个变量，以便退订
var girlA = pubsub.subscribe('js类的文章', function (type, content) {
    console.log('girlA订阅的'+type + ": 内容内容为：" + content);
});
var girlB = pubsub.subscribe('js类的文章', function (type, content) {
    console.log('girlB订阅的'+type + ": 内容内容为：" + content);
});
var girlC = pubsub.subscribe('js类的文章', function (type, content) {
    console.log('girlC订阅的'+type + ": 内容内容为：" + content);
});

//发布通知
pubsub.publish('js类的文章', '关于js的内容');  
// 输出：
// girlC订阅的js类的文章: 内容内容为：关于js的内容
// test3.html:78 girlB订阅的js类的文章: 内容内容为：关于js的内容
// test3.html:75 girlA订阅的js类的文章: 内容内容为：关于js的内容


//girlA退订了关于js类的文章 
setTimeout(function () {
    pubsub.unsubscribe(girlA);
}, 0);

//再发布一次，验证一下是否还能够输出信息
pubsub.publish('js类的文章', "关于js的第二篇文章");
// 输出：
// girlB订阅的js类的文章: 内容内容为：关于js的第二篇文章
// girlC订阅的js类的文章: 内容内容为：关于js的第二篇文章
```

应用场景：

打一个离我们比较近的一个场景，博客园里面有一个订阅的按钮（貌似有bug），比如小A,小B,小C都订阅了我的博客，当我的博客一有更新时，就会统一发布邮件给他们这三个人，就会通知这些订阅者

　　发布订阅模式的流程如下：

   1. 确定谁是发布者(比如我的博客)。

   2. 然后给发布者添加一个缓存列表，用于存放回调函数来通知订阅者。

   3. 发布消息，发布者需要遍历这个缓存列表，依次触发里面存放的订阅者回调函数。

   4. 退订（比如不想再接收到这些订阅的信息了，就可以取消掉）。

## 策略模式

概念：

策略模式指的是定义一些列的算法，把他们一个个封装起来，目的就是将算法的使用与算法的实现分离开来。说白了就是以前要很多判断的写法，现在把判断里面的内容抽离开来，变成一个个小的个体。

代码实现：

代码情景为超市促销，vip为5折，老客户3折，普通顾客没折，计算最后需要支付的金额。

没有使用策略模式的情况：
```js
function Price(personType, price) {
    //vip 5 折
    if (personType == 'vip') {
        return price * 0.5;
    } 
    else if (personType == 'old'){ //老客户 3 折
        return price * 0.3;
    } else {
        return price; //其他都全价
    }
}
```
> 不足之处：不好的地方，当我有其他方面的折扣时，又或者我活动的折扣时经常变化的，这样就要不断的修改if..else里面的条件了。而且也违背了设计模式的一个原则：对修改关闭，对扩展开放的原则；

使用策略模式之后：

```js
// 对于vip客户
function vipPrice() {
    this.discount = 0.5;
}
 
vipPrice.prototype.getPrice = function(price) {
　　return price * this.discount;
}
// 对于老客户
function oldPrice() {
    this.discount = 0.3;
}
 
oldPrice.prototype.getPrice = function(price) {
    return price * this.discount;
}
// 对于普通客户
function Price() {
    this.discount = 1;
}
 
Price.prototype.getPrice = function(price) {
    return price ;
}

// 上下文，对于客户端的使用
function Context() {
    this.name = '';
    this.strategy = null;
    this.price = 0;
}
 
Context.prototype.set = function(name, strategy, price) {
    this.name = name;
    this.strategy = strategy;
    this.price = price;
}
Context.prototype.getResult = function() {
    console.log(this.name + ' 的结账价为: ' + this.strategy.getPrice(this.price));
}

var context = new Context();
var vip = new vipPrice();
context.set ('vip客户', vip, 200);
context.getResult();   // vip客户 的结账价为: 100

var old = new oldPrice();
context.set ('老客户', old, 200);
context.getResult();  // 老客户 的结账价为: 60

var Price = new Price();
context.set ('普通客户', Price, 200);
context.getResult();  // 普通客户 的结账价为: 200
```
> 通过策略模式，使得客户的折扣与算法解藕，又使得修改跟扩展能独立的进行，不影到客户端或其他算法的使用；

使用场景：

策略模式最实用的场合就是某个“类”中包含有大量的条件性语句，比如if...else 或者 switch。每一个条件分支都会引起该“类”的特定行为以不同的方式作出改变。以其维护一段庞大的条件性语句，不如将每一个行为划分为多个独立的对象。每一个对象被称为一个策略。设置多个这种策略对象，可以改进我们的代码质量，也更好的进行单元测试。

## 模板模式

概念：

定义了一个操作中的算法的骨架，而将一些步骤延迟到子类中。模板方法使得子类可以不改变一个算法的结构即可重定义该算法的某些特定步骤。通俗的讲，就是将一些公共方法封装到父类，子类可以继承这个父类，并且可以在子类中重写父类的方法，从而实现自己的业务逻辑。

代码实现：

```js
var Interview = function(){};
// 笔试
Interview.prototype.writtenTest = function(){
    console.log("这里是前端笔试题");
};
// 技术面试
Interview.prototype.technicalInterview = function(){
    console.log("这里是技术面试");
}; 
// 领导面试
Interview.prototype.leader = function(){
    console.log("领导面试");
};
// 领导面试
Interview.prototype.HR = function(){
    console.log("HR面试");
};
// 等通知
Interview.prototype.waitNotice = function(){
    console.log("等通知啊，不知道过了没有哦");
};
// 代码初始化
Interview.prototype.init = function(){
    this.writtenTest();
    this.technicalInterview();
    this.leader();
    this.HR();
    this.waitNotice();
};

// 阿里巴巴的笔试和技术面不同，重写父类方法，其他继承父类方法。
var AliInterview = function(){};
AliInterview.prototype = new Interview();

// 子类重写方法 实现自己的业务逻辑
AliInterview.prototype.writtenTest = function(){
    console.log("阿里的技术题就是难啊");
}
AliInterview.prototype.technicalInterview = function(){
    console.log("阿里的技术面就是叼啊");
}
var AliInterview = new AliInterview();
AliInterview.init();

// 阿里的技术题就是难啊
// 阿里的技术面就是叼啊
// 领导面试
// HR面试
// 等通知啊，不知道过了没有哦
```

应用场景：

模板模式主要应用在一些代码刚开要一次性实现不变的部分。但是将来页面有修改，需要更改业务逻辑的部分或者重新添加新业务的情况。主要是通过子类来改写父类的情
况，其他不需要改变的部分继承父类。

## 代理模式

概念：

代理模式的中文含义就是帮别人做事，javascript的解释为：把对一个对象的访问, 交给另一个代理对象来操作.

代码实现：

比如我们公司的补打卡是最后是要交给大boss来审批的，但是公司那么多人，每天都那么多补打卡，那大boss岂不是被这些琐事累死。所以大boss下会有一个助理，来帮忙做这个审批，最后再将每个月的补打卡统一交给大boss看看就行。
```js
// 补打卡事件
var fillOut = function (lateDate) {

    this.lateDate = lateDate;
};

// 这是bigBoss
var bigBoss = function (fillOut) {

    this.state = function (isSuccess) {
        console.log("忘记打卡的日期为：" + fillOut.lateDate + ", 补打卡状态：" + isSuccess);
    }
};
// 助理代理大boss 完成补打卡审批
var proxyAssis = function (fillOut) {
    
    this.state = function (isSuccess) {
        (new bigBoss(fillOut)).state(isSuccess); // 替bigBoss审批
    }
};

// 调用方法：
var proxyAssis = new proxyAssis(new fillOut("2016-9-11"));
proxyAssis.state("补打卡成功");

// 忘记打卡的日期为：2016-9-11, 补打卡状态：补打卡成功
```

## 外观模式

概念：

外观模式是很常见。其实它就是通过编写一个单独的函数，来简化对一个或多个更大型的，可能更为复杂的函数的访问。也就是说可以视外观模式为一种简化某些内容的手段。说白了，外观模式就是一个函数，封装了复杂的操作。

代码实现：
``` js
function ajaxCall(type,url,callback,data){
    // 根据当前浏览器获取对ajax连接对象的引用
    var xhr=(function(){
        try {
            // 所有现代浏览器所使用的标准方法
            return new XMLHttpRequest();

        }catch(e){}
        
        // 较老版本的internet Explorer兼容
        try{

            return new ActiveXObject("Msxml2.XMLHTTP.6.0");

        }catch(e){}

        try{

            return new ActiveXObject("Msxml2.XMLHTTP.3.0");
            
        }catch(e){}

        try{

            return new ActiveXObject("Microsoft.XMLHTTP");
            
        }catch(e){}

        // 如果没能找到相关的ajax连接对象，则跑出一个错误。
        throw new Error("Ajax not support in this browser.")

    }()),
    STATE_LOADED=4,
    STATUS_OK=200;

    // 一但从服务器收到表示成功的相应消息，则执行所给定的回调方法
    xhr.onreadystatechange=function{
        if(xhr.readyState !==STATE_LOADED){
            return;
        }
        if(xhr.state==STATUS_OK){
            callback(xhr.responseText);
        }
    }

    // 使用浏览器的ajax连接对象来向所给定的URL发出相关的调用
    xhr.open(type.toUpperCase(),url);
    xhr.send(data);
}

// 使用方法
ajaxCall("get","/user/12345",function(rs){
    alert('收到的数据为：'+rs);
})
```

应用场景：

当需要通过一个单独的函数或方法来访问一系列的函数或方法调用，以简化代码库的其余内容，使得代码更容易跟踪管理或者更好的维护时，可以使用外观模式。其实我们平时代码中这种模式应该是用的比较多的。

## 总结
javascript的设计模式有很多种，本文只是总结了其中常用的几种。



  





