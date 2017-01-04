function Search() {
  this.results = [];
}

Search.prototype.resultsSet = function(array) {
  this.results = array;
};

Search.prototype.titleSet = function() {
  this.results.results.forEach(function(item){
    var title = item.title;
    var date = item.release_date;
    var id = item.id;
    var image = item.poster_path;
    if (image) {
      var poster = "<img id='" + id + "' class='poster' src='http://image.tmdb.org/t/p/w185/" + item.poster_path + "'>";
    } else {
      var poster = "<img id='" + id + "' class='poster' src='http://cdn.topdogtips.com/wp-content/uploads/2015/03/Dog-Nutrition-101-A-Quick-Overview-of-Dog-Feeding-2.jpg'>";
    }
    var overview = item.overview;
    $("#output").append("<div class='movie'>" + poster + "</div>");
  });

};
Search.prototype.actorSet = function() {
  this.results.results.forEach(function(item){
    var name = item.name;
    var knownFor = item.known_for[0].title;
    var image = "<img class='image' src='http://image.tmdb.org/t/p/w185/" + item.profile_path + "'>";
    var id = item.id;
    $("#output").append("<div class='movie'><h3>" + name + "</h3><h5>Known for: " + knownFor + "</h5>" + image + "</div>");
  });
};
Search.prototype.cast = function (actors) {
  $('#outputDetail').html("");
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
