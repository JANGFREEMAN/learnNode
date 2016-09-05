//1.模块化的使用
var counter1= require("./util/count");
var counter2= require("./util/count")
var counter3= require("./util/count")
counter1.count();
counter2.count();
counter3.count();

//2.模块的路径解析
//2.1 内置模块
var fs = require("fs");
//2.1 解析node_modules目录
//var bar = require("foo/bar")// 有两种node_modules目录，一个是全局mode_modules目录，一个是工程中的本地目录
//2.3 NODE_PATH变量，设置NODE_PATH环境变量，在指定路径下解析路劲

//3.包的概念，一个大模块以来各个小模块组成，有许多子模块组成的大模块称之为包，把所有的子模块放在同一目录下，在组成一个包的所有子模块中，需要定义一个入口模块。
var cat = require("./cat");
console.log(cat);
console.log(cat.create("sdf"));
