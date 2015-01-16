# Stupid DB
This is a very stupid DB. Its created to allow for quick prototyping in Node. Simply store data in memory. When you want persistent store, just save it using stupid db! Your data is written to a file located `{Project_Root}/node_modules/stupid-db/database/stupid_db.js`.  
The benefit is that it doesn't require any installation (unlike redis, mongodb, mysql, etc.). Works great in corporate culture where you have to get approval for installations.

## Installations

Installation is as simple as `npm install stupid-db` or `npm install --save stupid-db`

## Examples

### Retrieving record:
    var stupidDB = require('stupid-db');
    stupidDB.getData(function(data){
      console.log("data received!", data);
    });

### Storing record:
    var stupidDB = require('stupid-db');
    stupidDB.saveData( {}, function(data){
      console.log("data received!", data);
    });

`saveData` method takes in up to 3 parameters: JSON data, success callback, and failure callback

## Contributing
File issue, send pull request! 
