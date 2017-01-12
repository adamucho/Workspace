/* 
following what you observer below,try and get the bluck and green buttons to work the same!
*/ 

document.getElementById('gray-button').onclick = switchGray;
document.getElementById('white-button').onclick = switchWhite;



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



