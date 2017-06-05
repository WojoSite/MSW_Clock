// set interval to run function every 1 second
window.setInterval('updateClock()', 1000);

// select DOM elements
var colorDisplay = document.getElementById("container");
var clockDisplay = document.getElementById("clock-display");

// function that runs every second
function updateClock(){

  // new date instance
  var time = new Date();

  // get timing elements to display
  var hr = time.getHours();
  var mn = time.getMinutes();
  var sc = time.getSeconds();

  // add a zero before numbers that are a single digit
  hr = (hr < 10 ? "0" : "") + hr;
  mn = (mn < 10 ? "0" : "") + mn;
  sc = (sc < 10 ? "0" : "") + sc;
  // console.log(hr, mn, sc);

  var hexColor = (hr + mn + sc);
  // console.log(hexColor);

  // adjust bg color to time-hex match
  colorDisplay.style.backgroundColor = "#"+hexColor;

  // display hex value
  clockDisplay.innerHTML = "#"+hexColor;
}
