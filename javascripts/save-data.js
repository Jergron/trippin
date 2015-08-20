define(function(require) {
  var $ = require("jquery");
  var visited = false;

  $("#visited").click(function() {
    visited = true;
  });

  $("#wishList").click(function() {
    visited = false;
  });

  
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