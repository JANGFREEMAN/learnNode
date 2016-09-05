/**
 * Created by andy on 2016/9/5.
 */
var body = require("./body");
var head = require("./head");
exports.create = function (name){
    return {
        name:name,
        body:body.body(),
        head:head.head()
    }
}