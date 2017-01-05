var apiKey = require('./../.env').apiKey;

module.exports =  {
   headshotClickListener : function(MoviesObject, actorId) {
     alert('hi');
    $('#output').html("");
    debugger;
    $.get("https://api.themoviedb.org/3/person/" + actorId + "/movie_credits?api_key="+ apiKey +"&page=1&language=en-US").then(function(films) {
      MoviesObject.filmography(films);
      $('#outputDetail').hide();
      $('.poster').click(function() {
        alert('hi');
        console.log(this.id);
      });
    });
  }
};
