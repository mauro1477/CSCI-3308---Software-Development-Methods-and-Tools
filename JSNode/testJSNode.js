var http = require('http');

http.createServer(function (req, res){
  re.writeHead(200, {'Content_Type': 'text/html'});
  re.write('Hello 3308 World!');
  re.write(req.url);
  re.end();
}).listen(8080);

console.log('Server running at http://127.0.0.1:8080');
