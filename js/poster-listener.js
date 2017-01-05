var apiKey = require('./../.env').apiKey;
var headshot = require('./../js/headshot-listener.js');

module.exports =  {
  PosterClickListener : function(MoviesObject, apiReponse, movieId) {
    $('#outputDetail').html("<div class='movieDetails'><img class='x' src='http://www.iconsdb.com/icons/preview/white/x-mark-xxl.png'></div><div class='actors'></div>");
    // movie details API call
    $.get("https://api.themoviedb.org/3/movie/"+movieId+"?api_key="+ apiKey+"&language=en-US").then(function(apiReponse) {
      MoviesObject.titleSet(apiReponse);
    });
    //cast API call
    $.get("https://api.themoviedb.org/3/movie/" + movieId + "/credits?api_key="+ apiKey +"&language=en-US").then(function(apiReponse) {
      MoviesObject.cast(apiReponse);
      // click on actor face
      $('.image').click(function() {
        var actorId = this.id;
        headshot.headshotClickListener(MoviesObject, actorId);
      });
    });
    $("#outputDetail").show();
    // close movie deatails modal
    $('.x').click(function() {
      $('#outputDetail').hide();
    });
  }
};
