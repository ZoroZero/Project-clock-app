var wakeuptime = 7;
var noon = 12;
var lunchtime = 12;
var naptime = lunchtime + 2;
var partytime;
var evening = 18;
var event = document.getElementById("event-quote");
function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  var quote = "Good morning";
  m = checkTime(m);
  s = checkTime(s);
  var median = "AM";
  if(h >= noon){
    median = "PM";
    quote = "Good afternoon";
  }
  if(h>= evening){
    quote = "Good evening";
  }
  document.getElementById('clock').innerHTML = h + ":" + m + ":" + s + " " + median + "!";
  if(quote != event.innerHTML){
    event.innerHTML = quote;
  }
  var t = setTimeout(startTime, 500);
}  
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

startTime();