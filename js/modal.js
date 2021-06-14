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
const closeBtn = document.querySelector('.close-btn');
const successMeassage = document.querySelector('.success-message-container');

const form = document.querySelector('#form');
const firstName = document.querySelector('#first');
const lastName = document.querySelector('#last');
const email = document.querySelector('#email');
const date = document.querySelector('#birthdate');
const villes = [...document.querySelectorAll('.radio-input')];
const checkbox = document.querySelector('#checkbox1');
const checkboxError = document.querySelector('.checkbox-error-message');
const allInput = [...document.getElementsByTagName('input')]


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
closeBtn.addEventListener('click', () => {
  modalbg.classList.remove('show');
  successMeassage.classList.remove('show');
});



//function that shows the error state of an input
const showError = (input) => {
  const parent = input.parentElement;
  const error = parent.querySelector('.error-message');
  input.classList.add('invalid');
  // input.classList.remove('valid');
  error.style.display="block";
}

//function that shows the success state of an input
const showSuccess = (input) => {
  const parent = input.parentElement;
  const success = parent.querySelector('.error-message');
  input.classList.remove('invalid');
  // input.classList.add('valid');
  success.style.display="none";
}

// Check the validity of the FIRST name input
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

// Check the validity of the LAST name input
const checkLastName = () => {

  let valid = false;
  const min = 2;

  if(lastName.value < min) {
    showError(lastName);
  } else {
    showSuccess(lastName);
    valid = true;
  }
  return valid;
}

// Check the validity of the EMAIL input
const emailValidity = (email) => {
  const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regEx.test(email);
}
const checkEmail = () => {

  let valid = false;
  let emailValue = email.value.trim()

  if(!emailValidity(emailValue)) {
    showError(email)
  } else {
    showSuccess(email)
    valid = true;
  }
  return valid;
}


// Check the validity of the DATE input
const checkDate = () => {
  
  let valid = false;
   
  if(date.value == "") {
    showError(date);
  } else {
    showSuccess(date);
    valid = true;
  }
  return valid;
}

// Check the validity of the VILLES selection
const checkVilles = () => {
  
  let valid = false;

  const radioError = document.querySelector('.radio-container .error-message');

  for (let i = 0; i < villes.length; i++) {

    if(!villes[i].checked) {
      radioError.classList.add('invalid');
    } else {
      radioError.classList.remove('invalid');
      valid = true;
      break;
    }
  }

  return valid;
}

// Check the validity of CONDITIONS selection
const checkConditions = () => {

  let valid = false;

  if(!checkbox.checked) {
    checkboxError.classList.add('invalid');
  } else {
    checkboxError.classList.remove('invalid');
    valid = true;
  }

  return valid

}


//Add a listener to the form on submit and checks all inputs are valid
form.addEventListener('submit', (e) => {
  e.preventDefault();
  let nameValid = checkFirstName();
  let lastValid = checkLastName();
  let emailValid = checkEmail();
  let dateValid = checkDate();
  let villeValid = checkVilles();
  let conditionsValid = checkConditions();

  let formIsValid = nameValid && lastValid && emailValid && dateValid && villeValid && conditionsValid;

  if(formIsValid) {
    successMeassage.classList.add('show');
    form.reset();
    for ( let input of allInput) {
      input.classList.remove('valid');
    }
  }
})

// for instant client-side validation
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
    case 'location1':
      checkVilles();
      break;
    case 'location2':
      checkVilles();
      break;
    case 'location3':
      checkVilles();
      break;
    case 'location4':
      checkVilles();
      break;
    case 'location5':
      checkVilles();
      break;
    case 'location6':
      checkVilles();
      break;
    case 'checkbox1':
      checkConditions();
      break;
  }
})




