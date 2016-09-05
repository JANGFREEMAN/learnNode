var argv = require("argv"),
     echo = require("../lib/echo");
console.log(argv);
console.log(echo(argv.join(' ')));