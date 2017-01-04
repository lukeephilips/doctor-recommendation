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
    var poster = "<img src='http://image.tmdb.org/t/p/w185/" + item.poster_path + "'>";
    var overview = item.overview;
    $("#output").append("<div class='movie'><h3>" + title + "</h3><h5>" + date + "</h5><p>" + overview + "</p>" + poster + "</div>");
  });
};
Search.prototype.actorSet = function() {
  this.results.results.forEach(function(item){
    var name = item.name;
    var knownFor = item.known_for[0].title;
    var image = "<img src='http://image.tmdb.org/t/p/w185/" + item.profile_path + "'>";
    var id = item.id;
    $("#output").append("<div class='movie'><h3>" + name + "</h3><h5>Known for: " + knownFor + "</h5><p>" + id + "</p>" + image + "</div>");
  });
};
exports.searchModule = Search;
