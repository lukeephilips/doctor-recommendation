var apiKey = require('./../.env').apiKey;
var Search = require('./../js/search.js').searchModule;
var Listeners = require('./../js/listeners.js');

$(document).ready(function() {


  $("#outputDetail").hide();
  $('form').submit(function(event) {
    $('#output').html("");
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
// click on movie poster to open movie details
$('.poster').click(function() {
  console.log(userSearch+" - "+response+"this="+this.id);
  Listeners.PosterClickListener(userSearch,response, this.id);
});
//               $('#outputDetail').html("<div class='movieDetails'><img class='x' src='http://www.iconsdb.com/icons/preview/white/x-mark-xxl.png'></div><div class='actors'></div>");
// // movie details API call
//               $.get("https://api.themoviedb.org/3/movie/"+this.id+"?api_key="+ apiKey+"&language=en-US").then(function(response) {
//                 userSearch.titleSet(response);
//               });
// //cast API call
//               $.get("https://api.themoviedb.org/3/movie/" + this.id + "/credits?api_key="+ apiKey +"&language=en-US").then(function(response) {
//                 userSearch.cast(response);
// // click on actor face
//                 $('.image').click(function() {
//                   $('#output').html("");
//                   id = this.id;
//                   $.get("https://api.themoviedb.org/3/person/" + this.id + "/movie_credits?api_key="+ apiKey +"&page=1&language=en-US").then(function(films) {
//                     userSearch.filmography(films);
//                     userSearch.PosterClickListener();
//
//                     $('#outputDetail').hide();
//                   });
//                 });
//               });
//               $("#outputDetail").show();
// // close movie details modal
//               $('.x').click(function() {
//                 $('#outputDetail').hide();
//               });
//             });
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
