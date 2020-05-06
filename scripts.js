// Write your JavaScript code here.

let takeoff;
let landing;
let missionAbort;
let flightStatus;
let paragraph;
let imgObj = null;
var x = 0;
var y = 0;


window.addEventListener('load', function () {
    alert("It's loaded!")
  })

function init(){
  debugger;
    takeoff = document.getElementById("takeoff");
    landing = document.getElementById("landing");
    missionAbort = document.getElementById("missionAbort");
    
    //debugger;
   takeoff.addEventListener("click",function(event){
   //confirm("Confirm that the shuttle is ready for takeoff.");
   let i=confirm("Confirm that the shuttle is ready for takeoff.");

   
if(i){
  document.getElementById("flightStatus").innerHTML="Shuttle in flight.";
  document.getElementById("shuttleBackground").style.backgroundColor="blue"; 
  document.getElementById("spaceShuttleHeight").innerHTML=10000; 
  
}
   });

 landing.addEventListener("click",function(event){
   let j=confirm("The shuttle is landing. Landing gear engaged.");
  if(j){
    document.getElementById("flightStatus").innerHTML="The shuttle has landed.";
    document.getElementById("shuttleBackground").style.backgroundColor="green"; 
    document.getElementById("spaceShuttleHeight").innerHTML=0; 
  }
});

missionAbort.addEventListener("click",function(event){
  let k=confirm("Confirm that you want to abort the mission.");
 if(k){
   document.getElementById("flightStatus").innerHTML="Mission aborted.";
   document.getElementById("shuttleBackground").style.backgroundColor="green"; 
   document.getElementById("spaceShuttleHeight").innerHTML=0; 
 }
});



imgObj = document.getElementById('rocket');
imgObj.style.position= 'relative'; 
imgObj.style.left = '0px'; 

imgObj.style.top='0px';

   let up = document.getElementById("top");
    up.addEventListener("click",function(event){
     imgObj.style.top = (parseInt(imgObj.style.top) - 10) +'px';
   
    document.getElementById("spaceShuttleHeight").innerHTML = 10000 + x ;
    let new_x = (document.getElementById("spaceShuttleHeight").innerHTML = 10000 + x);
     x = new_x;
     
    });
  


  let down = document.getElementById("bottom");
  down.addEventListener("click",function(event){
  imgObj.style.top = (parseInt(imgObj.style.top) + 10) + 'px';
  document.getElementById("spaceShuttleHeight").innerHTML = y-10000 ;
  let new_y = (document.getElementById("spaceShuttleHeight").innerHTML = y-10000);
   y = new_y;
     
    });



let move_left = document.getElementById("moveLeft");
move_left.addEventListener("click",function(event){
imgObj.style.left =( parseInt(imgObj.style.left) - 10 )+'px';
});

let move_right = document.getElementById("moveRight");
move_right.addEventListener("click",function(event){
imgObj.style.left = (parseInt(imgObj.style.left) + 10) +'px';
});

}
  
window.onload = init;

// Remember to pay attention to page loading!