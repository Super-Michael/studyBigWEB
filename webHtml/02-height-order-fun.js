// 高阶函数 - 函数作为返回值
// 只执行一次
// function makeFn () {
//     let msg = 'hello World'
//     return function () {
//         console.log(msg)
//     }
// }
// // const fn = makeFn()
// // fn()
// makeFn()()

function once (fn) {
    let done = false 
    if(!done) {
        done = true
        return function () {
            return fn.apply(this, arguments)
        }
    }
}

const pay = once(function (money) {
    console.log(`您支付了${money} RMB`)
})
pay(5)
pay(5)
pay(5)
pay(5)
pay(5)
