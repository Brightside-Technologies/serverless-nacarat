'use strict';

var queryProductsFunc = require('./functions/products/query.js');
var getProductFunc = require('./functions/products/get.js');
var createProductFunc = require('./functions/products/get.js');

// get all products
module.exports.queryProducts = (event, context, callback) => {
  queryProductsFunc(event, (error, result) => {
    const response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(result)
    };
    context.succeed(response);
  });
};
// get product by ID
module.exports.getProduct = (event, context, callback) => {
  getProductFunc(event, (error, result) => {
    const response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(result),
    };
    context.succeed(response);
  });
};
// create product
module.exports.createProduct = (event, context, callback) => {
  createProductFunc(event, (error, result) => {
    const response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin" : "*"
      },
      body: JSON.stringify(result),
    };
    context.succeed(response);
  });
};
