//1.简单web程序

//var http = require("http");
//http.createServer(function(request,respone){
//    respone.writeHead("200",{"Content-Type":"text-plain"});
//    respone.end("Hello world");
//}).listen(8080);


//2.requrest获取请求头数据和请求体数据

var http = require("http");
http.createServer(function(request,respone){
    var body = [];
    console.log(request.method);
    console.log(request.headers);

    request.on("data",function(chunk){
        body.push(chunk)
    });

    request.on("end",function(){
        body = Buffer.concat(body);
        console.log(body.toString());
    });

    respone.writeHead("200",{"Content-Type":"text-plain"});
    respone.end("Hello world");
}).listen(8080);
