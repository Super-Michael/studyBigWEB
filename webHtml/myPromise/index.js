/**
 * 1.通过创建 Promise 可以知道 Promise 就是一个类，在执行这个类的时候，需要纯第一个执行器进去，并且执行器会立即执行
 * 2.在执行器终须传递两个函数作为参数，resolve 和 reject，并且这两个参数是改变Promise状态
 *   Promise 中有三种状态 成功(fulfilled) / 失败(rejected) / 等待(pending)
 *   pending -> fulfilled
 *   pending -> rejected
 *   一旦状态确定就不可更改
 * 3.resolve 和 reject 函数是用来更改状态的
 *   resolve：fulfilled
 *   reject： rejected
 * 
 * 4. then 方法内部做的事情就是判断状态 如果状态是成功 - 调用成功回调函数； 如果状态是失败 - 就调用失败回调函数
 *   因为每一个 Promise 都可以调用 then 方法，那么这个 then 方法应该是在原型对象上的
 * 5. then 成功回调有一个参数 - 表示成功之后的值；then 失败回调函数有一个参数 - 表示失败之后的原因
 * 6. 同一个 Promise 对象相面的then 方法，可以被多次调用
 * 7. then 方法是可以被链式调用的，后面的 then 方法的回调函数拿到的值是上一个 then 方法的回调函数的返回值
 * 
 * 
 * 
 */
const MyPromise = require('./myPromise')

 let promise =  new MyPromise((resolve, reject) => {
    // setTimeout(()=> {
    //     resolve('成功....')
    // }, 2000)
    resolve('成功')
    // reject('失败')
 })

 function other () {
    return new MyPromise((resolve, reject) => {
        resolve('other')
    })
 }

//  promise.then(value => {
//      console.log(value)
//  }, reason => {
//     console.log(reason);
//  })

//  promise.then(value => {
//     console.log(value)
// }, reason => {
//    console.log(reason);
// }) 
// promise.then(value => {
//     console.log(value)
// }, reason => {
//    console.log(reason);
// })

// promise 链式调用
promise.then(value => {
    console.log(value)
    return other();
}).then(value => {
    console.log(value)
})
    