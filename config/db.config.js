'use strict';
const mysql = require('mysql');
//local mysql db connection
const dbConn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'node_mysql_crud_db'
});
dbConn.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    
    dbConn.query("CREATE DATABASE IF NOT EXISTS node_mysql_crud_db", function (err, result) {
    if (err) throw err;
    console.log("Database Created");
  });
  
  dbConn.query("CREATE TABLE IF NOT EXISTS node_mysql_crud_db.Category (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, name VARCHAR(100), created_at DATETIME)", function (err, result) {
    if (err) throw err;
    console.log("Table Category Created");
  });
  
  dbConn.query("CREATE TABLE IF NOT EXISTS node_mysql_crud_db.Product (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, name VARCHAR(100), price DOUBLE, quantity INT, created_at DATETIME, category_id INT, FOREIGN KEY (category_id) REFERENCES Category (id))", function (err, result) {
    if (err) throw err;
    console.log("Table Product Created");
  });
});
module.exports = dbConn;