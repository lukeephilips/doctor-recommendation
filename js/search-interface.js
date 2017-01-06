var getDoctors = require('./../js/search.js').getDoctors;

$(document).ready(function() {
  $("form").submit(function(event){
    event.preventDefault();

    var symptom = $('#symptom').val();
    getDoctors(symptom);

  });
});
