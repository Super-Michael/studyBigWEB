// function forEach(arr,fn) {
//     for(let i = 0; i < arr.length; i++) {
//         fn(arr[i])
//     }
// }

// // 测试 - 我们只打印数组的每一项
// let arr = [1,3,4,6,7,8]

// // 调用数组
// forEach(arr,function (item) {
//     console.log(item)
// })
// //输出结果 1,3,4,6,7,8

// 数组中filter方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。

function filter (arr, fn) {
    let results = []
    for(let i = 0; i < arr.length; i++) {
        if(fn(arr[i])) {
            results.push(arr[i])
        }
    }
    return results
}

let arr = [1,3,6,7,8]

let r = filter(arr, function (item) {
    return  item % 2 === 0
})

console.log(r)
