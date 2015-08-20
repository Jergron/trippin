define(function(require) {
  var firebase = require("firebase");
  var $ = require("jquery");
  var getTemplates = require("get-templates");
  console.log("getTemplates", getTemplates);

  var myFirebaseRef = new Firebase("https://nss-jer-trippin.firebaseio.com/");
  
  myFirebaseRef.child("location_types").on("value", function(snapshot) {
    var location_types = snapshot.val();
    console.log("location_types", location_types);
    
    // This will hold the complere DOM string of location types
    var populatedTemplate = getTemplates.locTypeTpl(location_types);
    
    // Insert the DOM string into the appropriate element
    $("#locationType").html(populatedTemplate);
    
  });

  // Listen for when anything changes on the "trips" key
  myFirebaseRef.child("trips").on("value", function(snapshot) {
  var trips = snapshot.val();
    console.log("trips", trips);
    
    // This will hold the complere DOM string of trips
    var populatedTemplate = getTemplates.tripTpl(trips);
    console.log(populatedTemplate);

    // Insert the DOM string into the appropriate element 
    $("#list-of-trips").html(populatedTemplate);
  });
  
});