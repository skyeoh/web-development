/* let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!'; */

let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/firefox.png') {
    myImage.setAttribute('src','images/firefox2.png');
  } else {
    myImage.setAttribute('src','images/firefox.png');
  }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
let myInput = document.querySelector('input');

function setUserName() {
  let myName = prompt('Please enter your name.');
/*  if (!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName +'!';
  } */
  if (myName) {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName +'!';
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName +'!';
}

myButton.onclick = function() {
  setUserName();
}

myInput.onclick = function() {
  localStorage.clear();
}
