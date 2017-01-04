var apiKey = require('./../.env').apiKey;
var Search = require('./../js/search.js').searchModule;
var title = require('./../js/title.js').titleModule;

$(document).ready(function() {
  $('form').submit(function(event) {
    $('#output').html("");
    event.preventDefault();

    var searchType = $('#searchOne').val();

    var searchString = $('#searchOneText').val();

    $.get("https://api.themoviedb.org/3/search/"+searchType+"?api_key="+apiKey+"&language=en-US&query="+searchString+"&page=1&include_adult=false").then(function(response) {
      debugger;
      if(response.results.length === 0) {
        $('#output').text('Sorry Charlie. Check your spelling.');
      } else {
          var userSearch = new Search();
          userSearch.resultsSet(response);
          console.log(userSearch);
          if (searchType === title) {
            userSearch.titleSet();
          } else {
            userSearch.actorSet();
          }
        }
      }).fail(function(error){
      console.log(error);
    });
  });
});
