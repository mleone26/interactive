// This JS file is what saves the information from the popup form.

// first define some variables, one for each value you want to save.
var color;

// The saving happens when the user clicks "save"
document.getElementById("save").onclick = function() {

  // step 2: get the selected color, by finding that element's value
  color = document.getElementById("color").value;

  // step 3: save it to local storage
  
   chrome.storage.local.set({"color":color}, function(){
    console.log("saved to storage favorite color " + color);
  });

var timestamp = new Date();

   chrome.storage.local.set({"timestamp":timestamp}, function(){
    console.log("saved to storage timestamp" + timestamp);
  });
}

