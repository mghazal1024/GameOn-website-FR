function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = [...document.querySelectorAll(".modal-btn")];
const close = document.querySelector('.close');
const formData = document.querySelectorAll(".formData");

// launch modal event
// modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
// function launchModal() {
//   modalbg.style.display = "block";
// }

// function launchModal() {
//   modalbg.classList.add('show');
// }


//Launch modal form
const launchModal = () => {
  modalbg.classList.add('show');
}

// Launch modal event
for ( let btn of modalBtn ) {
  btn.addEventListener('click', launchModal);
}

//Close Modal
const closeModal = () => {
  modalbg.classList.remove('show');
}
close.addEventListener('click', closeModal);