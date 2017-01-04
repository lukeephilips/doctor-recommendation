var apiKey = require('./../.env').apiKey;
var Search = require('./../js/movie.js').searchModule;

$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();

    var searchType = $('#searchOne').val();
    var searchString = $('#searchOneText').val();
    console.log(searchType+ " - " + searchString);
    $.get("https://api.themoviedb.org/3/search/"+searchType+"?api_key="+apiKey+"&language=en-US&query="+searchString+"&page=1&include_adult=false").then(function(response) {
      console.log(response);
      var userSearch = new Search();
      userSearch.resultsSet(response);
      console.log(userSearch);
    }).fail(function(error){
      console.log(error);
    });
  });
});
