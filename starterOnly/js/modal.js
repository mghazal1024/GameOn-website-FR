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
for ( let btn of modalBtn ) {
  btn.addEventListener('click', launchModal);
}

//Close Modal
const closeModal = () => {
  modalbg.classList.remove('show');
}
close.addEventListener('click', closeModal);



const form = document.querySelector('#form');
const firstName = document.querySelector('#first');
const lastName = document.querySelector('#last');
const email = document.querySelector('#email');
const date = document.querySelector('#birthdate');

const showError = (input) => {
  const parent = input.parentElement;
  const error = parent.querySelector('.error-message');
  input.classList.add('invalid');
  input.classList.remove('valid');
  error.style.display="block";
}

const showSuccess = (input) => {
  const parent = input.parentElement;
  const success = parent.querySelector('.error-message');
  input.classList.remove('invalid');
  input.classList.add('valid');
  success.style.display="none";
}

const checkFirstName = () => {

  let valid = false;
  const min = 2;

  if(firstName.value < min) {
    showError(firstName);
  } else {
    showSuccess(firstName);
    valid = true;
  }
  return valid;
}

const checkLastName = () => {

  let valid = false;
  const min = 2;

  if(lastName.value < min) {
    showError(lastName);
  } else {
    showSuccess(lastName);
    valid = true
  }
  return valid;
}

const checkEmail = () => {
  if(email.value == "") {
    showError(email)
  }
}

const checkDate = () => {
  if(date.value == "") {
    showError(date);
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let nameValid = checkFirstName();
  let lastValid = checkLastName();
  let emailValid = checkEmail();
  let dateValid = checkDate();
})

form.addEventListener('input', (e) => {
  switch (e.target.id) {
    case 'first':
      checkFirstName();
      break;
    case 'last':
      checkLastName();
      break;
    case 'email':
      checkEmail();
      break;
    case 'birthdate':
      checkDate();
      break;
  }
})




// const formBtn = document.querySelector('.btn-submit');
// const name = document.reserve.first.value;

// const validate = () => {
//   if(name == "") {
//     alert ('do it');
//     document.reserve.first.focus();
//     return false;
//   }
//   return ( true );
// }

// const form = document.forms['reserve'];
// const firstName = form['first'];
// const lastName = form['last'];
// const email = form['email'];
// const date = form['birthdate'];

// form.addEventListener('submit', (e) => {
//   if(firstName.value == "") {
//     e.preventDefault()
//     firstName.querySelector('#first ~ p.error-message').style.display="block";
//   } else {
//     firstName.querySelector('#first ~ p.error-message').style.display="none";
//   }

//   if(lastName.value == "") {
//     e.preventDefault()
//     lastName.querySelector('#last ~ p.error-message').style.display="block";
//   } else {
//     lastName.querySelector('#last ~ p.error-message').style.display="none";
//   }
  
//   if(email.value == "") {
//     e.preventDefault()
//     email.querySelector('#email ~ p.error-message').style.display="block";
//   } else {
//     email.querySelector('#email ~ p.error-message').style.display="none";
//   }
// })

// const validate = () => {
//   if(firstName.value == '') {
//     alert('please add a name');
//     firstName.focus();
//     return false;
//   }
//   return true;
// }