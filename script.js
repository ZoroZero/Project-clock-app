var wakeuptime = 7;
var noon = 12;
var lunchtime = 12;
var naptime = lunchtime + 2;
var partytime;
var evening = 18;
var event = document.getElementById("event-quote");
var cat_image = document.getElementById("lolcatimage");
function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
 
  m = checkTime(m);
  s = checkTime(s);
  var median = "AM";
  if(h >= noon){
    median = "PM";
  }
  document.getElementById('clock').innerHTML = h + ":" + m + ":" + s + " " + median + "!";
}  

function updatePic(){
  var time = new Date().getHours();   
  var quote = "Good morning";
  var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
  if(time == wakeuptime){
    quote = "Wake up!";
    image =  "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
  }
  else if(time == lunchtime){
    quote = "Time to have lunch!";
    image =  "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
  }
  else if(time == naptime){
    quote = "Have some sleep mate!";
    image =  "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
  }
  else if(time < noon && time  >= 5){
    image = "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a.jpeg";
  }
  else if(time >= noon){
    quote = "Good afternoon";
  }
  else if(time >= evening){
    quote = "Good evening";
    image = "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cat_sleep.jpg";
  }
   
  event.innerHTML = quote;
  cat_image.src = image;
  startTime();
}

setInterval(updatePic,500);

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

document.getElementById("wakeUpTimeSelector").addEventListener("change",function(){
  wakeuptime = document.getElementById("wakeUpTimeSelector").value;
})

document.getElementById("napTimeSelector").addEventListener("change",function(){
  naptime = document.getElementById("napTimeSelector").value;
})

document.getElementById("lunchTimeSelector").addEventListener("change",function(){
  lunchtime = document.getElementById("lunchTimeSelector").value;
})