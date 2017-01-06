var apiModule = require('./../js/search.js');



$(document).ready(function() {

  var specialties = apiModule.getSpecialties();
  apiModule.getConditions();

  $("form").submit(function(event){
    event.preventDefault();
    var symptom = $('#symptom').val();
    var specialty = $('#specialty').val();
    apiModule.getDoctors(symptom, specialty);

  });
});
