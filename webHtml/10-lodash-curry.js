// 高阶函数 - lodash 中 curry 原理
function getSum (a,b,c) {
    return a+b+c
}


function curry (func) {
    return function curriedFun (...args) {
        if(args.length < func.length) {
            return function () {
                return curriedFun(...args.concat(Array.from(arguments)))
            }
        }
        return func(...args)
    }
}

const curried = curry(getSum)
console.log(curried(1,2,3))
console.log(curried(1)(2,3))
console.log(curried(1,2)(3))
