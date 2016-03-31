/**
 * Node.js base server
 */
//var http = require("http"); // 获取Node.js本身内置的Http对象
//http.createServer(function (req, res) {
//var retHtml = "<html><head><title>Node.js Test</title></head><body><div>hi Node, I like you so much</div></body></html>"
//
//res.writeHead(200, {"Content-Type": "text/html"}); // 设置页面请求头
//res.end(retHtml); // 设置你要显示到页面上的文字
//}).listen(1337, "192.168.7.37"); // 设置HTTP服务器监听端口和IP地址
//console.log("web server address：192.168.7.37, port：1337");

var test = require("./test.js");
test.happy();
