// 记忆函数
// 计算圆的面积
function  getArea (r) {
    console.log(r, 'r')
    return Math.PI * r * r
}

// 模拟memoize 
function memoize (f) {
    let cache = {}
    return function () {
        let key = JSON.stringify(arguments)
        cache[key] = cache[key] || f.apply(f, arguments)
        return cache[key]
    }
}

let getAreaWithMemory = memoize(getArea)

console.log(getAreaWithMemory(5))
console.log(getAreaWithMemory(5))
console.log(getAreaWithMemory(5))
console.log(getAreaWithMemory(5))
