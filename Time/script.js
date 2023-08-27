const timeDisplay=document.querySelector('.timeDisplay');
const others=document.querySelector('.others');
const countup=document.querySelector(".countUp");

//time
let otherTime=others.textContent;
let hours='00';
let minutes='00';
let seconds='00';
let milliseconds='00';
//days
let day='';
let month='';
let year='';
//countup
let startTime=0;
let elapsedTime=0;
let currentTime=0;
let hrs=0;
let mins=0;
let secs=0;
let millsecs=0;
//
startTime=Date.now()-elapsedTime;

//runs the code every 1 
setInterval(()=>{
othersContent();
  timeContent();
  updateTime()
},1);

function timeContent() {
  hours=new Date().getHours();
  minutes=new Date().getMinutes();
  seconds=new Date().getSeconds();
  milliseconds=new Date().getMilliseconds();
  //
  hours=pad(hours);
  minutes=pad(minutes);
  seconds=pad(seconds);
  //
  timeDisplay.textContent=`${hours}:${minutes}:${seconds}:${milliseconds}`
}

  //day month year
function othersContent(){
  day=new Date().getDay();
  month=new Date().getMonth();
  month= pad(month);
  year=new Date().getFullYear();

  //
  others.textContent=`${day}:${month}:${year}`

}


//count up
function updateTime(){
    elapsedTime=Date.now()-startTime;
    millsecs=Math.floor((elapsedTime/60)%60);
    secs=Math.floor((elapsedTime/1000)%60);
    mins=Math.floor((elapsedTime/(1000*60))%60);
    hrs=Math.floor((elapsedTime/(1000*60*60))%60);
    //
    millsecs=pad(millsecs);
    secs=pad(secs);
    mins=pad(mins);
    hrs=pad(hrs);
//
countup.textContent=`${hrs}:${mins}:${secs}:${millsecs}`;
}  
  //00 format
  
function pad(unit){
  return(("0")+unit).length>2?unit:"0"+unit;
}
 
