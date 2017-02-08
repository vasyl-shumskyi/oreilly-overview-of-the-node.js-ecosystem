var fs = require("fs");
var htmlQuotes = require("./parser.js") // exports from parser.js

fs.readFile("quotes.csv", "utf8", (error, data) => {
  var html = htmlQuotes(data);
  console.log(html);
});
