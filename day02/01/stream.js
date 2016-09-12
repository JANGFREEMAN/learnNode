/**
 * 当处理大文件的时候需要一边读取一边处理这样才回比较搞笑，NodeJs提供stream来对数据流的操作
 */
var fs = require("fs");
var rs = fs.createReadStream(src);
var ws =  fs.createWriteStream(dst);

rs.on("data",function(chunk){
    if(ws.write(chunk) == false){
        rs.pasuse();
    }
});

rs.on("end",function(){
   ws.end();
});

ws.on("drain",function(){
    rs.resume();
})