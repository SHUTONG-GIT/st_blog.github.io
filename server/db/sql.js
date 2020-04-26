const mysql = require('mysql');

var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root', 
    password : '',
    database : 'msgdb'
});
connection.connect();
module.exports = connection;