'use strict';
const Product = require('../models/product_model');
exports.findAll = function(req, res) {
    var order = req.query.order && (req.query.order == 'name' || req.query.order == 'price' || req.query.order == 'quantity' || req.query.order == 'created_at')? req.query.order : null
    if(req.query.name){
        Product.searchByName(req.query.name, order, function(err, product) {
            console.log(req.query.order)
            if (err)
            res.send(err);
            res.send(product);
        });

    } else if (req.query.category_id){
        Product.searchByCatId(req.query.category_id, order, function(err, product) {
            console.log('filter')
            if (err)
            res.send(err);
            res.send(product);
        });
    } else if(req.query.upper_price_limit && req.query.lower_price_limit){
        Product.searchByUpperAndLowerPrice(req.query.upper_price_limit, req.query.lower_price_limit, order, function(err, product) {
            console.log('filter')
            if (err)
            res.send(err);
            res.send(product);
        });
    }else if(req.query.upper_price_limit){
        Product.searchByUpperPrice(req.query.upper_price_limit, order, function(err, product) {
            console.log('filter')
            if (err)
            res.send(err);
            res.send(product);
        });
    } else if(req.query.lower_price_limit){
        Product.searchByLowerPrice(req.query.lower_price_limit, order, function(err, product) {
            console.log('filter')
            if (err)
            res.send(err);
            res.send(product);
        });
    }
    else {
        Product.findAll(order, function(err, product) {
            console.log('controller')
            if (err)
            res.send(err);
            console.log('res', product);
            res.send(product);
          });
    }
};
exports.create = function(req, res) {
const new_product = new Product(req.body);
//handles null error
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
  res.status(400).send({ error:true, message: 'Please provide all required field' });
}else{
Product.create(new_product, function(err, product) {
  if (err)
  res.send(err);
  res.json({error:false,message:"Product added successfully!",data:product});
});
}
};
exports.findById = function(req, res) {
Product.findById(req.params.id, function(err, product) {
  if (err)
  res.send(err);
  res.json(product);
});
};
exports.update = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    Product.update(req.params.id, new Product(req.body), function(err, product) {
   if (err)
   res.send(err);
   res.json({ error:false, message: 'Product successfully updated' });
});
}
};
exports.delete = function(req, res) {
Product.delete( req.params.id, function(err, product) {
  if (err)
  res.send(err);
  res.json({ error:false, message: 'Product successfully deleted' });
});
};

exports.search = function(req, res) {
Product.search(function(err, product) {
    console.log('filter')
    if (err)
    res.send(err);
    res.send(product);
});
};