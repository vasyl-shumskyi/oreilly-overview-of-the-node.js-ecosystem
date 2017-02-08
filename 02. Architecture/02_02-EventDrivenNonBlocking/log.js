console.log("hello world");
console.log("4 + 5 = " + (4+5));

//var lines = file.readlines();
var fs = require("fs");

// A-SYNCHRONOUS CODE

fs.readFile("file.txt", "utf8",
  function(error, data){
    console.log(data);
  });
console.log("A-SYNCHRONOUS CALL: i will be printed BEFORE file content to demonstrate unblocking aspect")

// A-SYNCHRONOUS CODE END

// SYNCHRONOUS CODE
/*
var data2 = fs.readFileSync("file.txt", "utf8");
console.log(data2);
console.log("SYNCHRONISE CALL: i will be printed AFTER file content to demonstrate blocking aspect with readFileSync")
*/
// ASYNCHRONOUS CALL END
