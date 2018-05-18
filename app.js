// var http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write('Hello World!');
//   res.end();
// }).listen(3000);

var http = require('http');

var server = http.createServer(function (request, response) {
  var reqBody = '';
  request.on('data', function (chunk) {
        reqBody += chunk;
  });

  request.on('end', function (chunk) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("<h1>Hello world!</h1>");
    console.log(reqBody);
  });
});

server.listen(3000);