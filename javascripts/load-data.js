define(function(require) {
  var firebase = require("firebase");
  var $ = require("jquery");
  var getTemplates = require("get-templates");
  console.log("getTemplates", getTemplates);

  var myFirebaseRef = new Firebase("https://nss-jer-trippin.firebaseio.com/");
  
  myFirebaseRef.child("location_types").on("value", function(snapshot) {
    var location_types = snapshot.val();
    console.log("location_types", location_types);
    
    // This will hold the complete DOM string of location types
    var populatedTemplate = getTemplates.locTypeTpl(location_types);
    
    // Insert the DOM string into the appropriate element
    $("#locationType").html(populatedTemplate);
    
  });

  // Listen for when anything changes on the "trips" key
  myFirebaseRef.child("trips").on("value", function(snapshot) {
  var trips = snapshot.val();
    console.log("trips", trips);
    
    // This will hold the complete DOM string of trips
    var populatedTemplate = getTemplates.tripTpl(trips);
    console.log(populatedTemplate);

    // Insert the DOM string into the appropriate element 
    $("#list-of-trips").html(populatedTemplate);
    
    // Filters the selected DOM strings of trips visited 
    $(document).on("click", "#visitSite", function() {
    
      $(".dataSec").filter("div[id^='showTrip#true']").show();

      $(".dataSec").filter("div[id^='showTrip#false']").hide();
    });
    
    // Filters the selected DOM strings of trips not visited 
    $(document).on("click", "#wishSite", function() {

      $(".dataSec").filter("div[id^='showTrip#true']").hide();

      $(".dataSec").filter("div[id^='showTrip#false']").show();
    });
  });
  
});