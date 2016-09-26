
//1.JS提供try{}catch(){},对异常进行捕获
//    function syn(fn){
//        fn();
//    }
//
//    try{
//        syn(null)
//    }catch (err){
//       console.log(err.message);
//    }


//2.异步函数如果没有异常进行捕获，则会抛出一个全局异常

    //function syn(callback){
    //    setTimeout(function(){
    //        callback(fn());
    //    },1000);
    //}
    //
    //
    //try{
    //    syn(function(){
    //
    //    })
    //}catch (err){
    //   console.log(err.message);
    //}

//3.对上一步异步函数进行改造
//    function syn(callback){
//        setTimeout(function(){
//            try{
//                callback(fn());
//            }catch(err){
//                callback(err);
//            }
//        },1000);
//    }
//
//
//    try{
//        syn(function(err){
//            if(err){
//                console.log(err.message);
//            }else{
//                //do something
//            }
//        })
//    }catch (err){
//        console.log(err.message);
//    }

//4. domain模块可以简化对异常的处理
var http = require("http"),
    domain = require("domain");
function async(request,callback){
    asyncA(request,function(data){
       asyncB(request,function(data){
           asyncC(request,function(data){
              callback(data);
           });
       }) ;
    });
}
http.createServer(function(request,reponse){
   var d = domain.create();
    d.on("error",function(err){
        console.log(err);
        reponse.writeHead(500);
        reponse.end();
    });
    d.run(function(){
        async(request, function (data) {
            reponse.writeHead(200);
            reponse.end(data);
        });
    });
}).listen(8080);












