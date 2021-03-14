'use strict';
var dbConn = require('./../../config/db.config');
//Employee object create
var Category = function(category){
  this.name     = category.name;
  this.created_at     = new Date();
};

Category.create = function (category, result) {
dbConn.query("INSERT INTO Category set ?", category, function (err, res) {
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
Category.findById = function (id, result) {
dbConn.query("Select * from Category where id = ? ", id, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};
Category.findAll = function (result) {
dbConn.query("Select * from Category", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('Category : ', res);
  result(null, res);
}
});
};
Category.update = function(id, category, result){
dbConn.query("UPDATE Category SET name=?,created_at=?", [category.name, category.created_at, id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}else{
  result(null, res);
}
});
};
Category.delete = function(id, result){
dbConn.query("DELETE FROM Category WHERE id = ?", [id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  result(null, res);
}
});
};
module.exports= Category;