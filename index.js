var fs = require('fs');

var outputFilename = __dirname + "/database/stupid-db.js";


module.exports = {
  getData: function(cb) {
    fs.readFile(outputFilename, "utf-8", function(err, data){
      if(data){
        cb(JSON.parse(data));
      }else{
        cb({});
      }
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


