define(function(require) {
  var firebase = require("firebase");
  var $ = require("jquery");
  var getTemplates = require("get-templates");
  console.log("getTemplates", getTemplates);

  var myFirebaseRef = new Firebase("https://nss-jer-trippin.firebaseio.com/");
  
  // Listen for when anything 
  myFirebaseRef.child("trips").on("value", function(snapshot) {
    var trips = snapshot.val();

    console.log("trips", trips);
    
    //this will hold the complere DOM strin of trips
    var populatedTemplate = getTemplates.tripTpl(trips);
    console.log(populatedTemplate);

    // Insert the DOM string into the appropriate element 
    $("#list-of-trips").html(populatedTemplate);
  });
  
});