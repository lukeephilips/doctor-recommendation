var apiKey = require('./../.env').apiKey;

exports.getDoctors = function(medicalIssue) {
  $('#output').html("");
  var apiCall = $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(response) {
     console.log(apiKey);
     if (!response) {
       $('#output').html("<h2 id='error'>No results found</h2>");
     }
     else {
       response.data.forEach(function(doctor) {
         var fname = doctor.profile.first_name;
         var lname = doctor.profile.last_name;
         var pic = doctor.profile.image_url;
         var bio = doctor.profile.bio;

         var specialties = [];
         doctor.specialties.forEach(function(specialty){
           specialties.push(specialty.name);
         });
         $('#output').append("<div><p>You searched for: "+medicalIssue+"</p></div><div><h2>"+fname+" "+lname+"</h2> <p class='bio'>"+bio+"</p><img class='headshot' src='"+pic+"'></div>");
       });
     }
})
.fail(function(error){
      alert("fail");
    });
};
