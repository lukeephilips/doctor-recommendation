var apiKey = require('./../.env').apiKey;
var Search = require('./../js/search.js').searchModule;
var Listeners = require('./../js/poster-listener.js');
var loopingIdModule = require('./../js/headshot-listener.js');

$(document).ready(function() {
  $("#outputDetail").hide();
  $('form').submit(function(event) {
    $('#output').html("");
    var loopingId = loopingIdModule.loopingId;
    console.log("hi"+loopingId);
    if (loopingId) {
      $('#'+loopingId).trigger("click");
    }

    event.preventDefault();
    var searchType = $('#searchOne').val();
    var searchString = $('#searchOneText').val();
// poster API call
    $.get("https://api.themoviedb.org/3/search/"+searchType+"?api_key="+apiKey+"&language=en-US&query="+searchString+"&page=1&include_adult=false").then(function(response) {
      if(response.results.length === 0) {
        $('#output').text('Sorry Charlie. Check your spelling.');
      } else {
          var userSearch = new Search();
          userSearch.resultsSet(response);
          if (searchType === "movie") {
            userSearch.posterSet();
// 1st level click on movie poster to open movie details
            $('.poster').click(function() {
              Listeners.PosterClickListener(userSearch,response, this.id);
            });
          } else {
            userSearch.actorSet();
          }
        }
      }).fail(function(error){
      console.log(error);
    });
  });
  // click a movie




});
