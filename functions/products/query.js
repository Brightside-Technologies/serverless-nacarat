'use strict';

const Firebase = require('../../firebase').firebase;
const firebase = new Firebase();

module.exports = (event, callback) => {
  firebase.get("/products")
    .then(products => {
      const response = {
          data: products,
          input: event,
      };
      callback(null, response);
    })
};
