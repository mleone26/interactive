// This javascript file is what changes the display of the webpage.
// It works by retrieving the values stored in local storage,
// and then using those values to change the CSS.

var all = document.querySelectorAll("*");

// All that updating is done in one function.
// this function fires when the local storage has been updated or changed.
chrome.storage.local.onChanged.addListener(function() {
  console.log("changed");
  chrome.storage.local.get(["color"], function(data) {
  	var html = document.querySelectorAll("html")[0];
  	console.log(html);
  	console.log(data["color"]);
  	html.classList.remove("greyscale", "yellow", "green", "blue", "purple", "pink");
  	html.classList.add(data["color"]);
  });
});
