document.getElementById('gray-button').onclick = switchGray; //when an element with an id="gray-button" is clicked, this tells the "switchGray" function to run
document.getElementById('white-button').onclick = switchWhite;
document.getElementById('blue-button').onclick = switchBlue;
document.getElementById('green-button').onclick = switchGreen;

/* 
following what you observer below, write out (not copy/paste) a switchBlue function and a switchGreen function.  

*/ 

function switchGray() {
	// document.body.innerHTML = "changes text";
	// alert("Barry");
  document.body.style.backgroundColor = 'gray';
  document.body.style.color = 'white';
}

function switchWhite() {
  document.body.style.backgroundColor = 'white';
  document.body.style.color = 'black';
}

function switchBlue() {

  document.body.style.backgroundColor = 'blue';
  document.body.style.color = 'black';

}

function switchGreen() {
  document.body.style.backgroundColor = 'green';
  document.body.style.color = 'black';
}




