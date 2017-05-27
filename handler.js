'use strict';

var queryProductsFunc = require('./functions/products/query.js');
var getProductsFunc = require('./functions/products/get.js');

// get all products
module.exports.queryProducts = (event, context, callback) => {
  // var response = 'Your Serverless function ran successfully via the \''
  //   + event.httpMethod
  //   + '\' method!';
  //
  // return callback(null, response);

  queryProductsFunc(event, (error, result) => {
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
// get product by ID
module.exports.getProduct = (event, context, callback) => {
  getProductsFunc(event, (error, result) => {
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
