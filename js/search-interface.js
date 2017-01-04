var apiKey = require('./../.env').apiKey;
var Search = require('./../js/search.js').searchModule;

$(document).ready(function() {
  $('form').submit(function(event) {
    $('#output').html("");
    event.preventDefault();

    var searchType = $('#searchOne').val();

    var searchString = $('#searchOneText').val();

    $.get("https://api.themoviedb.org/3/search/"+searchType+"?api_key="+apiKey+"&language=en-US&query="+searchString+"&page=1&include_adult=false").then(function(response) {
      debugger;
      if(response.results.length === 0) {
        $('#output').text('Sorry Charlie. Check your spelling.')
      } else {
        var userSearch = new Search();
        userSearch.resultsSet(response);
        console.log(userSearch);
        userSearch.results.results.forEach(function(item){
          var title = item.title;
          var date = item.release_date;
          var poster = "<img src='http://image.tmdb.org/t/p/w185/" + item.poster_path + "'>";
          var overview = item.overview;
          $("#output").append("<div class='movie'><h3>" + title + "</h3><h5>" + date + "</h5><p>" + overview + "</p>" + poster + "</div>");
        });
      }
      }).fail(function(error){
      console.log(error);
    });
  });
});
