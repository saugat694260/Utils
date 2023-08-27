const goToTop=document.querySelector(".go-to-top-button");
let scrollPosition='';
//

setInterval(() => {
    scrollPosition=document.documentElement.scrollTop ;
    showButton();
    toTop();

}, 5);

//shows the button after reacthing certain bottom
function showButton(){
    if (scrollPosition>window.innerHeight*10){
    goToTop.classList.add("show-Button");
}
    else{
    goToTop.classList.remove("show-Button");
    }
}
//you will go to top again
function toTop() {
  goToTop.addEventListener('click',()=>{
    document.documentElement.scrollTop=0;
  })
 
}
