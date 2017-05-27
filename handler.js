'use strict';

var queryBazFunc = require('./functions/baz/query.js');

module.exports.queryBaz = (event, context, callback) => {
  // var response = 'Your Serverless function ran successfully via the \''
  //   + event.httpMethod
  //   + '\' method!';
  //
  // return callback(null, response);

  queryBazFunc(event, (error, result) => {
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
