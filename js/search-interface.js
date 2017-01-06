var apiModule = require('./../js/search.js');

$(document).ready(function() {
  var specialties = apiModule.getSpecialties();

  $("form").submit(function(event){
    event.preventDefault();

    var symptom = $('#symptom').val();
    apiModule.getDoctors(symptom);

  });
});
