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

  // get corresponsing base-16 hex values
  var hrh = hr.toString(16);
  var mnh = mn.toString(16);
  var sch = sc.toString(16);

  // add a zero before single-digit hex value
  hrh = (hrh.length == 1 ? "0" : "") + hrh;
  mnh = (mnh.length == 1 ? "0" : "") + mnh;
  sch = (sch.length == 1 ? "0" : "") + sch;

  var hexDisplay = (hrh + mnh + sch);

  // add a zero before numbers that are a single digit
  hr = (hr < 10 ? "0" : "") + hr;
  mn = (mn < 10 ? "0" : "") + mn;
  sc = (sc < 10 ? "0" : "") + sc;

  var timeDisplay = (hr + ":" + mn + ":"+ sc);

  // display time value in decimals
  clockDisplay.innerHTML = "#"+timeDisplay;

  // adjust bg color to time-hex match
  colorDisplay.style.backgroundColor = "#"+hexDisplay;

  console.log(hexDisplay);
}
