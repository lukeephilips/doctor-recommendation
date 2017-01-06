var getDoctors = require('./../js/search.js').getDoctors;

$(document).ready(function() {
  $("form").submit(function(event){
    event.preventDefault();
    var symptom = $('#symptom').val();
debugger;
    var result = getDoctors(symptom);
    if (!result) {
      $('#output').html("<h2 id='error'>No results found</h2>");
    }
    else {
      result.data.forEach(function(doctor) {
        var fname = doctor.profile.first_name;
        var lname = doctor.profile.last_name;
        var pic = doctor.profile.image_url;
        var bio = doctor.profile.bio;

        var specialties = []
        doctor.specialties.forEach(function(specialty){
          specialties.push(specialty.name)
        });
  $('#output').append("<div><h2>"+fname+" "+lname+"</h2> <p class='bio'>"+bio+"</p><img class='headshot' src='"+pic+"'></div>")
      });
    }
  });
});
