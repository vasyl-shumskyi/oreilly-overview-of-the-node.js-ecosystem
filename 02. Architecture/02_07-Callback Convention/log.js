var fs = require("fs");

fs.readFile("file.txt", "utf8", function(error, data){
    console.log(data);
  });
console.log("A-SYNCHRONOUS CALL: i will be printed BEFORE file content to demonstrate unblocking aspect")
