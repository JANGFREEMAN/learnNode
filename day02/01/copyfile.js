var fs = require("fs");
function copy(src,dst){
    //适合小文件
    fs.writeFileSync(dst,fs.readFileSync(src));
    //适合大文件
    //fs.createReadStream(src).pipe(fs.createWriteStream(dst));
}
function main(argv){
    copy(argv[0],argv[1]);
}

/**
 * process是一个全局变量，它有一个属性argv，值为数组类型，argv[0]为node绝对路径，argv[1]为模块入口文件绝对路径，argv[2]之后的才是命令行参数
 *
 * 使用示例：
 *      node copyfile.js  d:/test.js e:/test1.js
 */
main(process.argv.slice(2));
