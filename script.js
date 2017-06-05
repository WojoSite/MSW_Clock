window.setInterval('updateClock()', 1000);

var hrDisplay = document.getElementById('hours-display');
var mnDisplay = document.getElementById('minutes-display');
var scDisplay = document.getElementById('seconds-display');
var colorDisplay = document.getElementById("container");

function updateClock(){
  var time = new Date();
  var currentHours = time.getHours();
  var currentMinutes = time.getMinutes();
  var currentSeconds = time.getSeconds();

  currentHours = (currentHours < 10 ? "0" : "") + currentHours;
  currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
  currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;

  // console.log(currentHours, currentMinutes, currentSeconds);

  hrDisplay.innerHTML = currentHours;
  mnDisplay.innerHTML = currentMinutes;
  scDisplay.innerHTML = currentSeconds;



  var hexColor = (currentHours + currentMinutes + currentSeconds).toString();

  // console.log(hexColor);

  colorDisplay.style.backgroundColor = "#"+hexColor;

}
