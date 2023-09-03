
export let historyContainer = document.querySelector(".history-Container");

//checks whether array is empty or not//not a best way but had to do it
//main array
export let history = JSON.parse(localStorage.getItem('history'));

//save to storage so data will not be gone even after refresh
export function savetostorage(){
  localStorage.setItem('history',JSON.stringify(history));//name,data 
}

//takes input value from "close bar function/input value"
export function addToHistory(inputValue) {

  let matchingItem;

  history.forEach((inputItem) => {
    //inputItem.input <= this is the input item in the array
    if (inputValue === inputItem.input) {
      matchingItem = inputItem;

    }
  });

  //if matching item doesnt exist these data are pushed in array
  //it stopped storing blank but still not immune to spaces
  if (!matchingItem && !!inputValue) {
    history.push({ id: RandomNumber(), input: inputValue });
  }
  savetostorage();
}

//unique id for id
function RandomNumber() {
  var id = "id" + Math.random().toString(16).slice(2)
  return id;

}

//
export function updateHtml() {

  let newHistoryHTML = '';

  history.forEach((inputItem) => {

    newHistoryHTML += `
  <p class="searched-data 
  js-searched-data-container-${inputItem.id /*this is for removing the html when deleting //we get unique class this way*/}">${inputItem.input}


  <button class="history-Delete-Button 
  js-delete-link" 
  data-history-id="${inputItem.id/*this is for getting the product id of the  element of pressed button */}">


  <img class="cancil-image"  src="/SearchBar/close.png">


  </Button>
  </p>`;


    historyContainer.innerHTML = newHistoryHTML;
  });


  document.querySelectorAll(".js-delete-link").forEach((link) => {
    //selecterAll gives you node list

    link.addEventListener('click', () => {

      const historyId = link.dataset.historyId;//data-=>(history-id)<=="${inputItem.id} should be turned to =>(historyId)<=;

      removeFromHistory(historyId);//calling function

      const historyContainer = document.querySelector(`.js-searched-data-container-${historyId}`);
      //put the id 
      historyContainer.remove();



    });
  });
  savetostorage()
}
//removes history at once
export function clearHistory() {
  history = [];
  historyContainer.innerHTML = `Nothing to show`;
  savetostorage();
}
//



function removeFromHistory(historyId) {
  let newHistory = [];


  history.forEach((item) => {
    //item id is from array id
    if (item.id !== historyId) {
      newHistory.push(item);

    }
  });

  history = newHistory;
  savetostorage();

}


