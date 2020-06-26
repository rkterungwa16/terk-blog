const http = require("http");

const Default = require("../default");
const Router = require("./Router");

Router.append(Default);

http.createServer((req, res) => {
    Router.check(req.url, req, res);
}).listen(7777, "127.0.0.1");

console.log("Listening on 127.0.0.1 7777");
