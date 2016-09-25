

var child_process = require("child_process");
var util = require("util");
//1. 调用系统命令拷贝文件
//function copy(source,target,calllback){
//    child_process.exec(util.format(" cp -r %s/* %s",source,target),calllback);
//}
//
//copy("a","b",function(err){
//    console.log(err);
//})

//2. 获取命令参数
//console.log(process.argv.slice(2));

//3. 退出程序运行
//process.exit(1)

//4. 输入和输出
//function log(){
//    process.stdout.write(util.format.apply(util.arguments)+"\n");
//}
//log();

// 5. 创建子进程
//var child  = child_process.spawn('node',["23.js"]);
//child.stdout.on('data', function (data) {
//    console.log('stdout: ' + data);
//});
//child.stderr.on('data', function (data) {
//    console.log('stderr: ' + data);
//});
//child.on('close', function (code) {
//    console.log('child process exited with code ' + code);
//});

//6.  进程间通信
var child = child_process.spawn("node",["child.js"]);
child.kill('SIGTERM');

//7. 守护进程
function spawn(MainModule){
    var worker = child_process.spawn("node",[MainModule]);
    worker.on("exit",function(code){
       if(code != 0){
           spawn(MainModule);
       }
    });
}
spawn("work.js");

