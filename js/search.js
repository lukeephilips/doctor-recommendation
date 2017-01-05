function Search() {
  this.results = [];
}

Search.prototype.resultsSet = function(array) {
  this.results = array;
};

Search.prototype.posterSet = function() {
  this.results.results.forEach(function(item){
    var id = item.id;
    var image = item.poster_path;
    var poster;
    if (image) {
      poster = "<img id='" + id + "' class='poster' src='http://image.tmdb.org/t/p/w185/" + item.poster_path + "'>";
    } else {
      poster = "<img id='" + id + "' class='poster' src='http://cdn.topdogtips.com/wp-content/uploads/2015/03/Dog-Nutrition-101-A-Quick-Overview-of-Dog-Feeding-2.jpg'>";
    }
    $("#output").append("<div class='movie'>" + poster + "</div>");
  });

};
Search.prototype.titleSet = function(movie) {
  var title = movie.title;
  var date = movie.release_date;
  var id = movie.id;
  var overview = movie.overview;
  $('#outputDetail').html("<div class='movieInformation'>"+"<h3>"+title+"</h3>"+"</div>");
  debugger;
};

Search.prototype.actorSet = function() {
  this.results.results.forEach(function(item){
    var name = item.name;
    var knownFor = item.known_for[0].title;
    var id = item.id;
    var image = "<img class='image' src='http://image.tmdb.org/t/p/w185/" + item.profile_path + "'>";
    $("#output").append("<div class='movie'><h3>" + name + "</h3><h5>Known for: " + knownFor + "</h5>" + image + "</div>");
  });
};
Search.prototype.cast = function (actors) {
  for (i=0; i<6; i++) {
    console.log(actors[i]);
    var name = actors.cast[i].name;
    var character = actors.cast[i].character;
    var id = actors.cast[i].id;
    var profile = "<img class='image' src='http://image.tmdb.org/t/p/w185/" + actors.cast[i].profile_path + "'>";
    $("#outputDetail").append("<div class='actor'><h3>" + name + "</h3><h5>Character: " + character + "</h5>" + profile + "</div>");
  }
};

exports.searchModule = Search;
