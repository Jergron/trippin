define(function(require) {
 var firebase = require("firebase"); 
 var $ = require("jquery");
 var myFirebaseRef = new firebase("https://nss-jer-trippin.firebaseio.com/");

  // Delete Movie Button from Firebase
  $(document).on("click", ".del", function() {
    var tripKey = $(this).parents(".dataSec").attr("key");
        myFirebaseRef.child("trips").child(tripKey).set(null);
          console.log("tripKey", tripKey);
  
  });
});