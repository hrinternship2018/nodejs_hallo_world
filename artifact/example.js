"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
function example() {
    console.log('open server');
    var server = http.createServer();
    server.on('request', function (req, res) {
        console.log('Access');
        console.log(req.method);
        console.log(req.url);
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('hello world!');
        res.end();
    });
    //in heroku's, must use port will be given
    server.listen(process.env.PORT || 3000);
}
exports.example = example;
//# sourceMappingURL=example.js.map