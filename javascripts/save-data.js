define(function(require) {
  var $ = require("jquery");
  var visited = false;

  // Visit button
  $("#visited").click(function() {
    visited = true;
  });
  
  // Wish List button
  $("#wishList").click(function() {
    visited = false;
  });

  // Posts the new object to Firebase data
  $("#addLocation").click(function() {

    var newLocation = {
      location: $("#locationName").val(),
      location_type: $("#locationType").val(),
      reviews: $("#review").val(),
      visited: visited
    };

    console.log("newLocation", newLocation);
  
    $.ajax({
      url: "https://nss-jer-trippin.firebaseio.com/trips.json",
      method: "POST",
      data: JSON.stringify(newLocation)
    })
    .done(function(newData) {
      location.reload();
      console.log(newData);
    })
    .fail(function(xhr, status, error) {
      console.log("error", error);
    });
  });
});