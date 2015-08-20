define(function(require) {
  var $ = require("jquery");
  var firebase = require("firebase");
  var selectedTripId;

  // Adds
  $(document).on("click", "button[id^='add-review#']", function() {
    selectedTripId = $(this).attr("id").split("#") [1];
    console.log("selectedTripId", selectedTripId);
    $(".review-entry").toggle();
  });

  $("#save-review").click(function() {
    var tripRef = new Firebase("https://nss-jer-trippin.firebaseio.com/trips/" + selectedTripId);
    
    var newReview = {
      date: Date.now(),
      text: $(".review-entry").val(),
      title: "Title"
     };
     
    tripRef.child("reviews").push(newReview);
  });
});