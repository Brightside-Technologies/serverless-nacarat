'use strict';

const dynamoDb = require('../../dynamoDb');

// module.exports = (event, callback) => {
//   const response = {
//     statusCode: 200,
//     body: JSON.stringify({
//       message: 'GET all products',
//       input: event,
//     }),
//   };
//   callback(null, response);
// };

module.exports = (event, context, callback) => {
  const params = {
    TableName: process.env.DYNAMODB_TABLE,
  };

  // fetch all todos from the database
  dynamoDb.scan(params, (error, result) => {
    // handle potential errors
    if (error) {
      console.error(error);
      callback(new Error('Couldn\'t get all products.'));
      return;
    }
    
    // create a response
    const response = {
      statusCode: 200,
      body: JSON.stringify(result.Items),
    };
    callback(null, response);
  });
};
