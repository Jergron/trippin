define(function(require) {
  var $ = require("jquery");
  var firebase = require("firebase");
  var selectedTripId;

  // Allows the user to write a review for the selected trip
  $(document).on("click", "button[id^='add-review#']", function() {
    selectedTripId = $(this).attr("id").split("#") [1];
    console.log("selectedTripId", selectedTripId);
    $(".review-entry").toggle();
  });
  
  // Save button that posts the review in Firebase to the specific trip
  $("#save-review").click(function() {
    var tripRef = new Firebase("https://nss-jer-trippin.firebaseio.com/trips/" + selectedTripId);

    var newReview = {
      date: Date.now(),
      text: $(".review-entry").val(),
      title: "Title"
     };

    // Pushes the written review to Firebase
    tripRef.child("reviews").push(newReview);
  });
});