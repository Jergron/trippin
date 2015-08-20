define(function(require) {
 var firebase = require("firebase"); 
 var $ = require("jquery");

// Deletes the specific object data from Firebase 
 $(document).on("click",".del", function() {

    // Prompts the user for a response 
     var retVal = confirm("Are you sure you want to delete your trip!? Click OK to continue");
     if (retVal === true) {
       var getKey = $(this).closest(".dataSec").attr("key");
       delReview(getKey);     
     } else {
       return false;
       }
  });
 
// Adds the specific key value of the object to the end of the url and removes it from Firebase
 function delReview(argument) {
    console.log(argument);
     var ref = new Firebase("https://nss-jer-trippin.firebaseio.com/trips/" + argument);
     ref.remove();
     location.reload();
   }
});