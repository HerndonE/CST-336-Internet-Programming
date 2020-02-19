
var guessField = document.querySelector('.guessField');
var lastResult = document.querySelector('#lastResult');

var total = 100;
lastResult.innerHTML = 'Total: ' + total ;

function addItem(){
  var ul = document.getElementById("dynamic-list");
  var candidate = document.getElementById("candidate");
  var li = document.createElement("li");
  li.setAttribute('id',candidate.value);
  li.appendChild(document.createTextNode(candidate.value));
  ul.appendChild(li);
}

function removeItem(){
  var ul = document.getElementById("dynamic-list");
  var candidate = document.getElementById("candidate");
  var item = document.getElementById(candidate.value);
  
  ul.removeChild(item);
  total-=50;
  lastResult.innerHTML = 'Total: ' + total ;
  
  
  var itemToRemove = document.getElementById("preExisting");
  itemToRemove.parentNode.removeChild(itemToRemove);
  total-=50;
  lastResult.innerHTML = 'Total: ' + total ;
  
}


function addTotal() {
  var userGuess = String(guessField.value);
  
  if(userGuess =="MB")
  {
      total +=  50;
      lastResult.innerHTML = 'Total: ' + total ;
      //lastResult.style.backgroundColor = 'green';
  }
 
  if(userGuess =="KB")
  {
      total +=  50;
      lastResult.innerHTML = 'Total: ' + total ;
      //lastResult.style.backgroundColor = 'green';
  }  
  
  if(userGuess =="CPU")
  {
      total +=  50;
      lastResult.innerHTML = 'Total: ' + total ;
  }
  
  if(userGuess =="GPU")
  {
      total +=  50;
      lastResult.innerHTML = 'Total: ' + total ;
  }
  
}


function handle(e) {
  if (e.keyCode === 13) {
    addItem();
    addTotal();
  }
  
  return true;
}

