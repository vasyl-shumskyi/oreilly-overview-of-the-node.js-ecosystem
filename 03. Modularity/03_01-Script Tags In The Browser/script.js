$(function() {

  $.get("quotes.csv", function(data) {

    var html = htmlQuotes(data);
    $("#result").html(local);
  });

});

function htmlQuotes(quotes) {

  return quotes.split(/\n/)
    .map(function(line) {
      var columns = line.split(/,/);
      var company = columns[0].replace(/\"/g, "")
      var price = columns[2]
      return `${company}: ${price}<br/>`
    });

}
