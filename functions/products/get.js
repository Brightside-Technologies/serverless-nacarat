'use strict';

const dynamoDb = require('../../dynamoDb');

module.exports = (event, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'GET product by ID',
      input: event,
    }),
  };
  callback(null, response);
};
