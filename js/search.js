var apiKey = require('./../.env').apiKey;

exports.getDoctors = function(symptom, specialty, location) {

  $('#output').html("");

  var searchSymptom = "";
  if (symptom !== "") {
    searchSymptom = "?query= ".concat(symptom);
  }
  var searchSpecialty = "";
  if (specialty !== "") {
    searchSpecialty = "?query= ".concat(specialty);
  }
  $('#output').append("<h5>You searched for symptom: ' " +symptom+" ' , specialty: ' "+specialty+" '</h5>");
  $.get('https://api.betterdoctor.com/2016-03-01/doctors' +searchSymptom+searchSpecialty+'&location='+location+'&skip=0&limit=20&user_key=' + apiKey)
   .then(function(response) {
     console.log(response);
     if (response.data.length === 0) {
       $('#output').append("<div id='error'><h2>No results found</h2><img src='http://www.politedissent.com/images/jun10/camels.jpg'></div>");
     }
     else {
       response.data.forEach(function(doctor) {
         console.log(response);
         var fname = doctor.profile.first_name;
         var lname = doctor.profile.last_name;
         var pic = doctor.profile.image_url;
         var bio = doctor.profile.bio;
         var practiceSpecialty = doctor.specialties[0].actor;
         var practiceName = doctor.practices[0].name;
         var practiceAddress = doctor.practices[0].visit_address.street;
         var practiceCity = doctor.practices[0].visit_address.city;
         var practiceState = doctor.practices[0].visit_address.state;

         var specialties = [];
         doctor.specialties.forEach(function(specialty){
           specialties.push(specialty.name);
         });
         $('#output').append("<div class='row'><h2>"+fname+" "+lname+"</h2><h4>"+practiceSpecialty+"</h4><div class='col-sm-2'><img class='headshot' src='"+pic+"'></div><div class='col-sm-10'><p class='bio'>"+bio+"</p><p><strong>"+practiceName+"</strong>: "+practiceAddress+" "+practiceCity+", "+practiceState+"</p></div></div>");
       });
     }
})
.fail(function(error){
  $('#output').append("<div id='error'><h2>No results found</h2><img src='http://www.politedissent.com/images/jun10/camels.jpg'></div>");
  });
};

exports.getSpecialties = function(){
  var specialties =[];
    $.get('https://api.betterdoctor.com/2016-03-01/specialties?user_key=' + apiKey)
    .then(function(response) {
      response.data.forEach(function(specialty) {
        specialties.push(specialty.name)
      });
      $(function() {
        $( "#specialty" ).autocomplete({
          source: specialties
        });
      });
    })
    .fail(function(error){
      console.log("api call failed");
    });
  };

exports.getConditions = function() {
  var conditions =[];
  $.get('https://api.betterdoctor.com/2016-03-01/conditions?user_key='+ apiKey).then(function(response) {
    response.data.forEach(function(condition) {
      conditions.push(condition.name)
    });
    $(function() {
      $( "#symptom").autocomplete({
        source: conditions
      });
    });

  });
};
exports.getLocations = function() {
  var locations =[];
  $.get('https://api.betterdoctor.com/2016-03-01/locations?user_key='+ apiKey).then(function(response) {
    response.data.forEach(function(condition) {
      conditions.push(condition.name)
    });
    $(function() {
      $( "#symptom").autocomplete({
        source: conditions
      });
    });

  });
};
