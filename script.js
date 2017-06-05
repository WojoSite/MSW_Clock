window.setInterval('updateClock()', 1000);
var colorDisplay = document.getElementById("container");
var clockDisplay = document.getElementById("clock-display");

function updateClock(){
  var time = new Date();
  var hr = time.getHours();
  var mn = time.getMinutes();
  var sc = time.getSeconds();

  hr = (hr < 10 ? "0" : "") + hr;
  mn = (mn < 10 ? "0" : "") + mn;
  sc = (sc < 10 ? "0" : "") + sc;

  // console.log(hr, mn, sc);

  var hexColor = (hr + mn + sc).toString();

  // console.log(hexColor);

  colorDisplay.style.backgroundColor = "#"+hexColor;
  clockDisplay.innerHTML = "#"+hexColor;

}
