'use strict';

const Firebase = require('../../firebase').firebase;
const firebase = new Firebase();

module.exports = (event, callback) => {
  firebase.get("/products")
    .then(products => {
      const response = {
        statusCode: 200,
        body: JSON.stringify({
          data: products,
          input: event,
        }),
      };
      callback(null, response);
    })
};
