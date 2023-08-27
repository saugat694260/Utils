import { array} from "./data.js";


const box=document.querySelector(".image-container");
const previous=document.querySelector(".previous");
const next=document.querySelector(".next");
const description=document.querySelector(".description-container");
const dots=document.querySelector(".dots");


let i=0;

//the page that you see first
defaultValue();



   
//next button
next.addEventListener('click',()=>{

if(i==array.length-1){
  i=0;
  right();
}

else{
  i++;
  right();
}

});

//previous button
previous.addEventListener('click',()=>{

if(i==0){
  i=array.length-1;
  left();
}
else{
    i--;
    left()
 
}

});

//handles all right logic
function right(){
  box.innerHTML=`<img  
  class="img" src="${array[i].image}">`;
  //
    dotFocusRight();
  //
  description.innerHTML=`<p class="description">${i+1}. ${array[i].description}</p>`;

}
//handles all left logic
function left(){
  box.innerHTML=`<img  
  class="img" src="${array[i].image}">`
  //
    dotFocusLeft();
  //
  description.innerHTML=`<p class="description">${i+1}. ${array[i].description}</p>`;
}

//dot focus for right
function dotFocusRight(){
document.querySelector(`.js-dot-Container${i}`).classList.add('focus');
//
  if(i==0){

    document.querySelector(`.js-dot-Container${array.length-1}`).classList.remove('focus');
  }
  else{
    document.querySelector(`.js-dot-Container${i-1}`).classList.remove('focus');
  }
}
  ////dot focus for left
function dotFocusLeft(){
  
document.querySelector(`.js-dot-Container${i}`).classList.add('focus');
//
  if(i==array.length-1){
    document.querySelector(`.js-dot-Container${array.length-array.length}`).classList.remove('focus');
  }
  else{
    document.querySelector(`.js-dot-Container${i+1}`).classList.remove('focus');
  }
}

  //first thing you see on page
function defaultValue(){
box.innerHTML=`<img  
class="img" src="${array[i].image}">`

//creates dots on the length of array
for(let i=0;i<=array.length-1;i++){
  dots.innerHTML+=`<p class="dot-Container js-dot-Container${i}">.</p>`
}
//
document.querySelector(`.js-dot-Container${i}`).classList.add('focus');

//
description.innerHTML=`<p class="description">${i+1}. ${array[i].description}</p>`
}
  
  

      
    
 

 
  


 
  


 
 

 




