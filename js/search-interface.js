var apiKey = require('./../.env').apiKey;
var Search = require('./../js/search.js').searchModule;

$(document).ready(function() {
  $("#outputDetail").hide();
  $('form').submit(function(event) {
    $('#output').html("");
    event.preventDefault();
    var searchType = $('#searchOne').val();
    var searchString = $('#searchOneText').val();
    $.get("https://api.themoviedb.org/3/search/"+searchType+"?api_key="+apiKey+"&language=en-US&query="+searchString+"&page=1&include_adult=false").then(function(response) {
      if(response.results.length === 0) {
        $('#output').text('Sorry Charlie. Check your spelling.');
      } else {
          var userSearch = new Search();
          userSearch.resultsSet(response);
          console.log(userSearch);
          if (searchType === "movie") {
            userSearch.titleSet();
            $('.poster').click(function() {
              $.get("https://api.themoviedb.org/3/movie/" + this.id + "/credits?api_key="+ apiKey).then(function(response) {
                console.log(response);
                userSearch.cast(response);
              });
              $("#outputDetail").show();
            });
          } else {
            userSearch.actorSet();
            $('.image').click(function() {

            });
          }
        }
      }).fail(function(error){
      console.log(error);
    });
  });
  // click a movie




});
