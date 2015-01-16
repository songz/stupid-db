var fs = require('fs');

var outputFilename = "./database/db.js";


module.exports = {
  getData: function(cb) {
    fs.readFile(outputFilename, function(err, data){
      cb(JSON.parse(data));
    });
  },
  saveData: function(data, onSuccess, onFailure){
    fs.writeFile(outputFilename, JSON.stringify(data, null, 4), function(err) {
      if(err) {
        onFailure(err);
      } else {
        onSuccess(data);
      }
    }); 
  }
};
