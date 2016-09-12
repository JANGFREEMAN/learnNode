/**
 * buff对象处理任何二进制文件
 */

var bin = new Buffer([ 0x68, 0x65, 0x6c, 0x6c, 0x6f ]);

//解码
console.log(bin.toString("utf-8"));

//编码
var bin2 = new Buffer("hello","utf-8");
console.log(bin2);

//拷贝
var dup = new Buffer(bin.length);
bin.copy(dup);
console.log(dup.toString());