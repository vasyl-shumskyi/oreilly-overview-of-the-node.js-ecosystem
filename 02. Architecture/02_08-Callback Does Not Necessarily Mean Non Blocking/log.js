var fs = require("fs");

readFilePromiseImNonBlocking("file.txt", "utf8", function(error, data){
    console.log(data);
  });

console.log("A-SYNCHRONOUS CALL: i SHOULD BE printed BEFORE file content to demonstrate unblocking aspect")

function readFilePromiseImNonBlocking(fileName, encoding, callback){
  var data = fs.readFileSync(fileName, encoding);
  callback(encoding, data);
}
