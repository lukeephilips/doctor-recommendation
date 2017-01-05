var apiKey = require('./../.env').apiKey;

module.exports =  {
   headshotClickListener : function(MoviesObject, actorId) {
    $('#output').html("");
    $.get("https://api.themoviedb.org/3/person/" + actorId + "/movie_credits?api_key="+ apiKey +"&page=1&language=en-US").then(function(films) {
      MoviesObject.filmography(films);
      $('#outputDetail').hide();
      console.log(MoviesObject);
      $('.poster').click(function() {
        var movieId = this.id;
        // movie details API call
        console.log(movieId);
        $.get("https://api.themoviedb.org/3/movie/"+movieId+"?api_key="+ apiKey+"&language=en-US").then(function(anotherReponse) {
          MoviesObject.inputSet(anotherReponse);
          $('#output').html("");
        });
      });
    });
  }
};
