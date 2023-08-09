# 事件队列

事件循环：  
步骤一：主线程读取JS代码，此时为同步环境，形成相应的堆和执行栈；  
步骤二：当主线程遇到异步操作的时候，将异步操作交给相应的API进行处理；  
步骤三：异步操作处理完成，推入任务队列  
步骤四：主线程查询任务队列，执行微任务，按顺序执行。  
步骤五：主线程查询任务队列，执行微任务，按顺序执行。  
重复四、五步骤；  

任务队列中的宏任务与微任务的输出顺序：  

先执行 宏任务当中的同步任务 --> 微任务当中的同步任务 --> 微任务当中的异步任务 --> 宏任务中的异步任务  
宏任务 setTimeout setInterval setImmediate 也有先后顺序 先执行setTimeout 后执行 setImmediate I/O UI  
微任务 promise.then() process.nextTick 有先后顺序 promise.then() 后执行  

```js
new Promise(function (resolve) {
    console.log('1');
    resolve();
}).then(function () {
    console.log('2')
})
process.nextTick(function () {
    console.log('3');
})
setImmediate(() => {
    console.info('4')        
})
new Promise(function (resolve) {
    console.log('5');
    resolve();
}).then(function () {
    console.log('6')
})
setTimeout(function () {
    console.log('7');
    setImmediate(() => {
        console.info('8')
    })
    process.nextTick(function () {
        console.log('9');
    })
    new Promise(function (resolve) {
        console.log('10');
        resolve();
    }).then(function () {
        console.log('11')
    })
});
//    1   5   3   2   6   7   10   9   11  4   8   
```

如果 await 的是 promise对象，await 会暂停 async 函数内后面的代码，先执行 async 函数外的同步代码（注意，promise 内的同步代码会先执行），等着 Promise 对象 fulfilled，然后把 resolve 的参数作为 await 表达式的运算结果返回后，再继续执行 async 函数内后面的代码  

```js
function sleep(second) {
    return new Promise((resolve, reject) => {
    	consol.log('aaaa)
        setTimeout(() => {
            resolve(' enough sleep~');
        }, second);
    })
}
async function awaitDemo() {
    let result = await sleep(2000);
    console.log(result);// 两秒之后会被打印出来
}
console.log("主线程1")
awaitDemo();
console.log("主线程2")
//主线程1
//aaaa
//主线程2
//enough sleep~
```

如果 await 的不是一个 promise ，而是一个表达式。await 会暂停 async 函数内后面的代码执行，先执行 async 函数外的同步代码（注意，此时会先执行完 await 后面的表达式后再执行 async 函数外的同步代码）  

```js
function sleep(second) {
 	return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(' enough sleep~');
        }, second);
    })
}
function normalFunc() {
    console.log('normalFunc');
}
async function awaitDemo() {
    await normalFunc();
    console.log('something, ~~');
    let result = await sleep(2000);
    console.log(result);// 两秒之后会被打印出来
}
console.log("主线程1")
awaitDemo();
console.log("主线程2")
//主线程1
//normalFunc
//主线程2
//something, ~~
//enough sleep~
```