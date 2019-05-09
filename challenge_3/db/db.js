const mysql = require('mysql');

var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'hackreactor',
    database: 'checkout'
});

module.exports = conn;