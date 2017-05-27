'use strict';

//const dynamoDb = require('./dynamodb');

module.exports = (event, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'getAll baz!',
      input: event,
    }),
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};

// module.exports.bazGetAll = (event, context, callback) => {
//   const params = {
//     TableName: process.env.DYNAMODB_TABLE,
//   };
//
//   // fetch all todos from the database
//   dynamoDb.scan(params, (error, result) => {
//     // handle potential errors
//     if (error) {
//       console.error(error);
//       callback(new Error('Couldn\'t fetch all baz.'));
//       return;
//     }
//
//     // create a response
//     const response = {
//       statusCode: 200,
//       body: JSON.stringify(result.Items),
//     };
//     callback(null, response);
//   });
// };
