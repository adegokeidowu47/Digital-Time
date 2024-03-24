

function showTime(){

  let date = new Date();

//Declaring the variable time

var hour = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();
    session = "am";

      
    if(hour == 0){
      hour = 12;
    }
  
   if(hour > 12){
     hour = hour - 12;
     session = "pm";
   }
   //for if hour is less than 10,then addd the string.

   hour = (hour<10)?"0"+ hour:hour;

   minutes = (minutes<10)?"0"+ minutes:minutes;

   seconds = (seconds<10)?"0"+ seconds:seconds;
   
   
   var time = hour+ ":" +minutes+":"+seconds+""+session; 

    // Selecting the empty div in body(time-box)
    
  document.getElementById("time-box").innerHTML = time;



  // Time+out function so that it can run over again in 1sec.
  
  setTimeout(function(){
    showTime();
  },1000);

}

showTime();


// var btn = document.getElementById("button");
//     myBody = document.getElementById("my_body");
//     color = ["blue", "grey"];


// btn.addEventListener("click", function(){
//   i = color;
//   for(i; i< color.length; i++);{
//     myBody.style.Color = i;
//   }
// })