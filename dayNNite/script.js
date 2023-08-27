//
const button=document.querySelector(".day-N-Nite_Button");
const image=document.querySelector(".day-N-Nite_image");
const html=document.querySelector("html");
const words= document.querySelector(".day-N-Nite-Message");
//
  button.addEventListener('click',rotate)


function rotate(){

    let timerId = null;
    let degrees = 0;
 
    timerId = setInterval(frame, 5);

    function frame(){
        if(degrees >= 360){
            clearInterval(timerId);
            color();
        }
        else{
            degrees+=1.5;
            image.style.transform = "rotateZ("+degrees+"deg)";
        }
    }
}

//


let clicked=false;
function color(){
  
  if (!clicked) {
      
      html.classList.add("js-dark-Mode");
      clicked = true;
      image.style.filter=" invert(1)";
      words.textContent="Let there be Light";
      words.style.filter=" invert(1)";
      

                } 

  else {
     
      html.classList.remove("js-dark-Mode")
      clicked = false;
      image.style.filter=" invert(0)";
      words.textContent="Let there be Dark";
      words.style.filter=" invert(0)";
      
       }
}