const express = require('express');
const app = express();
const port = 3000;
i = 1;

/*
var mysql      = require('mysql');
var connection = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : '123456',
    database : 'bd_notes'
});
module.exports=connection;
*/

var contratController = require('./ContratController');
app.use('/Contrats', contratController);

module.exports = app;



app.listen(port, () => {
  console.log('server started on port ' + port);
});

app.get('/', (req, res) => {
  res.send('Hello Express app #' + i++)
});

