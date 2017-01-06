var apiModule = require('./../js/search.js');

$(document).ready(function() {

  apiModule.getSpecialties();
  apiModule.getConditions();

  $("form").submit(function(event){
    event.preventDefault();
    var symptom = $('#symptom').val();
    var specialty = $('#specialty').val();
    var location = $('#location').val();
    apiModule.getDoctors(symptom, specialty,location);

  });
});
