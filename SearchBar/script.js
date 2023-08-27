import { addToHistory, updateHtml, historyContainer, clearHistory,history } from "./history.js";



//
const inputBar = document.querySelector(".input-bar");
const cancilButton = document.querySelector(".cancil-Button");
const searchButton = document.querySelector(".search-Button");
let moreButton = document.querySelector(".more");
let clearHistoryButton = document.querySelector(".clear-History-Button");
let searchedText = document.querySelector(".searched-data");
//


let inputValue;
let clicked = false;


//
cancilButton.addEventListener('click', closeSearchBar);
searchButton.addEventListener('click', openSearchBar);
moreButton.addEventListener('click', showHistoryContainer);
clearHistoryButton.addEventListener('click', clearHistory);
searchButton.addEventListener('click', search);
//
window.addEventListener('keydown', (event) => {
  if (event.key == "Enter") {
    inputValue = inputBar.value;
    //
    addToHistory(inputValue);
    //
    updateHtml();
    //
  }
});

//opens search Bar
function openSearchBar() {
  inputBar.classList.add("js-inputBar-visible");
  cancilButton.classList.add("js-cancilButton-visible");
  searchButton.classList.add("js-searchButton-visible");


}

//closes search bar from the cross on left
function closeSearchBar() {
  inputBar.classList.remove("js-inputBar-visible");
  cancilButton.classList.remove("js-cancilButton-visible");
  searchButton.classList.remove("js-searchButton-visible");
 



}
//adds to histor when searched
function search(){
  inputValue = inputBar.value;
  //
  addToHistory(inputValue);
  //
  updateHtml();
}

//shows history container after clicking
function showHistoryContainer() {

  if (!clicked) {
    historyContainer.classList.add('js-history-Container');
    //shows clear button only if the array is greater than 0
    if (history.length>0) {
      clearHistoryButton.classList.add('js-clear-History-Button');
    }

    clicked = true;
  }

  else {
    clicked = false
    historyContainer.classList.remove('js-history-Container');
    clearHistoryButton.classList.remove('js-clear-History-Button');
  }
}




