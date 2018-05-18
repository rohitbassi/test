// var http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write('Hello World!');
//   res.end();
// }).listen(3000);

// var http = require('http');

// var server = http.createServer(function (request, response) {
//   var reqBody = '';
//   request.on('data', function (chunk) {
//         reqBody += chunk;
//   });

//   request.on('end', function (chunk) {
//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.end("<h1>Hello world!</h1>");
//     console.log(reqBody);
//   });
// });

// server.listen(3000);

// var express = require('express');
// var app = express();
// var fs = require('fs');
// var key = fs.readFileSync('private.key');
// var cert = fs.readFileSync( 'primary.crt' );
// var ca = fs.readFileSync( 'intermediate.crt' );
// var options = {
//   key: key,
//   cert: cert,
//   ca: ca
// };
// var https = require('https');
// https.createServer(options, app).listen(3000);

var express = require("express");

var https = require("https");

var fs = require("fs");

var app = express();

app.get("/", function(req, res){

res.send("<h1>hello<h2>");

});

var options = {

key: fs.readFileSync("mockserver.key"),

cert: fs.readFileSync("mockserver.crt")

}

var server = https.createServer(options, app);

console.log("Listen to 3000");

server.listen(3000);