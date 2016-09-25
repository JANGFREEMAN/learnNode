/**
 * Created by andy on 2016/9/25.
 */


var http = require("http");

////1. 客户端工作方法
//var options = {
//    hostname : "localhost",
//    port:8080,
//    method:"post",
//    header:{
//        "Content-Type":"application/x-www-form-urlencoded"
//    }
//}
//var request = http.request(options,function(reponse){
//
//});
//request.write("hello world");
//request.end();

//2. 客户端工作方式2

http.get("http://localhost:8080",function(reponse){
    var body = [];

    console.log(reponse.statusCode);
    console.log(reponse.headers);

    reponse.on("data",function(chunk){
        body.push(chunk);
    });

    reponse.on("end",function(){
         body = Buffer.concat(body);
        console.log(body.toString());
    });


});