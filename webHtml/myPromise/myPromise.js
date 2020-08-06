//定义状态常量
const PENDING = 'pending'; //等待
const FULFILLED = 'fulfilled'; // 成功
const REJECTED = 'rejected' //失败


class MyPromise {
    constructor (executor) {
        //调用执行器
        executor(this.resolve, this.reject)
    }
    //定义状态 默认为等待
    status = PENDING;
    // 定义成功之后的值
    value = undefined;
    //定义失败之后的原因
    reason = undefined;
    //成功回调
    successCallback = [];
    //失败回调
    failCallback = []
    resolve = value => {
        // 判断状态是否为等待
        if (this.status !== PENDING) return;
        // 将状态更改为成功
        this.status = FULFILLED
        // 保留成功之后的值
        this.value = value
        // 判断成功回调是否存在， 如果存在 调用
        // this.successCallback && this.successCallback(this.value);
        while (this.successCallback.length) this.successCallback.shift()(this.value)
    }
    reject = reason => {
        // 判断状态是否为等待
        if (this.status !== PENDING) return;
        // 将状态更改为成功
        this.status = REJECTED
        //保留失败的原因
        this.reason = reason
        // 判断失败回调是否存在， 如果存在 调用
        // this.failCallback && this.failCallback(this.reason);
        while (this.failCallback.length) this.failCallback.shift()(this.reason)
    }
    then (successCallback, failCallback) {
        // 当promise 链式调用 then 方法时 返回promise 对象， 那么我们就要创建一个 promise 对象， 并返回
        let Promise2 = new MyPromise((resolve, reject) => {
            // 判断状态
            if (this.status === FULFILLED) {
                let x = successCallback(this.value)
                // 判断 x 的值是普通值还是promise对象
                // 如果是普通值 直接调用resolve 
                // 如果是promise对象 查看promsie对象返回的结果 
                // 再根据promise对象返回的结果 决定调用resolve 还是调用reject
                resolvePromise(x, resolve, reject)
            } else if (this.status === REJECTED) {
                failCallback(this.reason)
            } else {
                // 等待状态
                // 此时须将成功回调与失败回调存储起来
                this.successCallback.push(successCallback);
                this.failCallback.push(failCallback);
            }
        });
        return Promise2;
    }
}

function resolvePromise (x, resolve, reject) {
    if (x instanceof MyPromise) {
        // Promise 对象
        // x.then(value => resolve(value), reason => reject(reason))
        x.then(resolve, reject);
    } else {
        // 普通对象
        resolve(x)
    }

}

module.exports = MyPromise;