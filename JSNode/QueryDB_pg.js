var express = require('express'), app = express();
var pg = require('pg-promise')();

const dbConfig = {
  host: 'localhost',
  port: 5432,
  database: 'football_db',
  user: maurovargas
  password: 'Dukey7725$$@@'
};

var db = pg(dbConfig);

var query = ' SELECT * FROM football_games;';
db.any(query).then(function(rows)){
    console.log(rows[0]);
  })
  .catch(function(err){
    console.log("error message");
  });
}

var http = require('http');

http.createServer(function (req, res){
  re.writeHead(200, {'Content_Type': 'text/html'});
  re.write('Hello 3308 World!');
  re.write(req.url);
  re.end();
}).listen(8080);

console.log('Server running at http://127.0.0.1:8080');
