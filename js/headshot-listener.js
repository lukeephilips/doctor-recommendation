var apiKey = require('./../.env').apiKey;
var loopingId;

module.exports =  {
   headshotClickListener : function(MoviesObject, actorId) {
     debugger;
    $('#output').html("");
// Actor ID API call to traverse from movie to cast
    $.get("https://api.themoviedb.org/3/person/" + actorId + "/movie_credits?api_key="+ apiKey +"&page=1&language=en-US").then(function(films) {
      MoviesObject.filmography(films);
      $('#outputDetail').hide();

// 3rd level click on poster to traverse from actor's movies back to movie modal
      $('.poster').click(function() {
        var movieId = this.id;
// movie title and ID API call to loop back from actor to movie
        $.get("https://api.themoviedb.org/3/movie/"+movieId+"?api_key="+ apiKey+"&language=en-US").then(function(anotherReponse) {

          var movieTitle = anotherReponse.title;
          loopingId = anotherReponse.id;
          exports.loopingId = loopingId;
          console.log("headshot "+exports.loopingId);
          $('input').val(movieTitle);
          $('form').trigger('submit');
          //
        })
      });
    });
  }
};
