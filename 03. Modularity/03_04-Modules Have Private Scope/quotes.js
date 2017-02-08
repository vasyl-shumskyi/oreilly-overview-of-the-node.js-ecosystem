var fs = require("fs");
var htmlQuotes = require("./parser.js") // exports from parser.js

fs.readFile("quotes.csv", "utf8", (error, data) => {
  var html = htmlQuotes(data);
  console.log(html);
});

console.log(local);

/* console.log(local) - will error with
-----------------------
console.log(local);
            ^
ReferenceError: local is not defined
-----------------------
because local definition in parser is privately scoped!
*/
