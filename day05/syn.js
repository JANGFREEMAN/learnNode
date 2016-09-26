


//1.JS是单线程模型，可以通过SetTimeout这样特殊的函数来创建一个平行线程来后立即返回，主线程继续执行其他任务。
setTimeout(function(){
    console.log("world");
});
console.log("hello");

//2.及时平行线程完成工作，通知了主线程，也要等主线程空闲时候才能开始执行回调。
function heavyCompute(n) {
    var count = 0,
        i, j;

    for (i = n; i > 0; --i) {
        for (j = n; j > 0; --j) {
            count += 1;
        }
    }
    console.log(count);
}
var t = new Date();
setTimeout(function () {
    console.log(new Date() - t);
}, 1000);
heavyCompute(50000);

