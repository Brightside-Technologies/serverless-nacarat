'use strict';

const Firebase = require('../../firebase').firebase;
const firebase = new Firebase();

module.exports = (event, callback) => {
  firebase.get("/products/" + event.pathParameters.id)
    .then(product => {
      const response = {
        statusCode: 200,
        body: JSON.stringify({
          data: product,
          input: event,
        }),
      };
      callback(null, response);
    })
};
