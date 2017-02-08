var csvrow = require("csvrow");

function htmlQuotes(quotes){

  return quotes.split(/\n/)
    .map(function(line){
      var columns = csvrow.parse(line)
      var company = columns[0]
      var price = columns[2]
      return `${company}: ${price}<br/>`
    }).join("\n");
}



// exports defines what defines globally, everything else is privately scoped!
module.exports = htmlQuotes
