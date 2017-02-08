function htmlQuotes(quotes){

  return quotes.split(/\n/)
    .map(function(line){
      var columns = line.split(/,/);
      var company = columns[0].replace(/\"/g,"")
      var price = columns[2]
      return `${company}: ${price}<br/>`
    });
}

// privately scoped!
var local = "local";

// exports defines what defines globally, everything else is privately scoped!
module.exports = htmlQuotes
