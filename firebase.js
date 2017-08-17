const https = require('https');
const env = require('env2')('.env')

module.exports.firebase = function(){
  this.get = firebaseGET;
  this.put = firebasePUT;
}

function firebaseGET(key){
  return new Promise((resolve, reject) => {
    var options = {
      hostname: process.env.FIREBASE_HOST,
      path: key + ".json",
      method: 'GET'
    };
    var req = https.request(options, function (res) {
      res.setEncoding('utf8');
      var body = '';
      res.on('data', function(chunk) {
        body += chunk;
      });
      res.on('end', function() {
        resolve(JSON.parse(body))
      });
    });
    req.end();
    req.on('error', reject);
  });
}
function firebasePUT(key, value){
  return new Promise((resolve, reject) => {
    var options = {
      hostname: process.env.FIREBASE_HOST,
      path: key + ".json",
      method: 'PUT'
    };
    var req = https.request(options, function (res) {
      res.setEncoding('utf8');
      var body = '';
      res.on('data', function(chunk) {
        body += chunk;
      });
      res.on('end', function() {
        resolve(body)
      });
    });
    req.end(JSON.stringify(value));
    req.on('error', reject);
  });
}
