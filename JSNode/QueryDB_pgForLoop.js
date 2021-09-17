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
  db.any(query).then(function(rows)
  {
    for(i = 0; i < rows.length; i++)
    {
      console.log(rows[i]);
    }
  })
  .catch(function(err){
    console.log("error running query: " , err);
  })


}
