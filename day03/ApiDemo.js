var url = require("url");

//解析url
console.log(url.parse("http:www.baidu.com/a/b/c?q1=1&q2=2"));
console.log(url.parse("http:www.baidu.com/a/b/c?q1=1&q2=2",true,true));

//格式化url
var temp = url.format({
    protocol:"http",
    host:"www.example.com",
    pathname:"/a/b/c",
    search:"query=string"
})
console.log(temp);

//拼接url
console.log(url.resolve("http://www.baidu.com","/a/b"));

//querystring模块用来处理请求参数
var querystring = require("querystring");
var temp = querystring.parse("q1=1&q2=2");
console.log(temp);
var temp = querystring.stringify({q1:1,q2:2});
console.log(temp);

//zlib提供数据压缩与解压功能

//net模块创建socke服务或socket客户端

