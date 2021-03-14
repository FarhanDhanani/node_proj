'use strict';
var dbConn = require('./../../config/db.config');
//Product object create
var Product = function(product){
  this.name  = product.name;
  this.price = product.price;
  this.quantity = product.quantity;
  this.category_id = product.category_id;
  this.created_at     = new Date();
};

Product.create = function (product, result) {
dbConn.query("INSERT INTO Product set ?", product, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  console.log(res.insertId);
  result(null, res.insertId);
}
});
};
Product.findById = function (id, result) {
dbConn.query("Select * from Product where id = ? ", id, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};
Product.findAll = function (order, result) {
dbConn.query("Select * from Product ORDER BY " + order, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('Product : ', res);
  result(null, res);
}
});
};
Product.update = function(id, product, result){
dbConn.query("UPDATE Product SET name=?, price=?, quantity=?, category_id=?, created_at=?", [product.name, product.price, product.quantity, product.category_id, product.created_at, id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}else{
  result(null, res);
}
});
};
Product.delete = function(id, result){
dbConn.query("DELETE FROM Product WHERE id = ?", [id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  result(null, res);
}
});
};

Product.searchByName = function(name, order, result){
dbConn.query("SELECT * FROM Product where name like ? ORDER BY " + order, ['%'+name+'%'],function (err, res) {
if(err) {
    console.log("error: ", err);
    result(null, err);
}
else{
    result(null, res);
}
});
};

Product.searchByCatId = function(catId, order, result){
dbConn.query("SELECT * FROM Product where category_id = ? ORDER BY " + order, [catId],function (err, res) {
if(err) {
    console.log("error: ", err);
    result(null, err);
}
else{
    result(null, res);
}
});
};

Product.searchByUpperPrice = function(upperPrice, order, result){
dbConn.query("SELECT * FROM Product where price < ? ORDER BY " + order, [upperPrice],function (err, res) {
if(err) {
    console.log("error: ", err);
    result(null, err);
}
else{
    result(null, res);
}
});
};

Product.searchByLowerPrice = function(lowerPrice, order, result){
dbConn.query("SELECT * FROM Product where price > ? ORDER BY " + order, [lowerPrice],function (err, res) {
if(err) {
    console.log("error: ", err);
    result(null, err);
}
else{
    result(null, res);
}
});
};

Product.searchByUpperAndLowerPrice = function(upperPrice, lowerPrice,order, result){
dbConn.query("SELECT * FROM Product where price < ? AND price > ? ORDER BY " + order, [upperPrice, lowerPrice],function (err, res) {
if(err) {
    console.log("error: ", err);
    result(null, err);
}
else{
    result(null, res);
}
});
};


module.exports= Product;