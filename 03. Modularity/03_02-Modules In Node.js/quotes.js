var fs = require("fs");
var htmlQuotes = require("./parser.js") // exports from parser.js

fs.readFile("quotes.csv", "utf8", (error, data) => {
  var html = htmlQuotes(data);
  console.log(html);
});

/* parser.js

function htmlQuotes(quotes){

  return quotes.split(/\n/)
    .map(function(line){
      var columns = line.split(/,/);
      var company = columns[0].replace(/\"/g,"")
      var price = columns[2]
      return `${company}: ${price}<br/>`
    });
}
*/
