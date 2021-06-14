document.addEventListener('DOMContentLoaded', () => {
  
  // DOM Elements
  const navBtn = document.querySelector('.nav-button');
  const navMenu = document.querySelector('.main-navbar');

  const modalbg = document.querySelector(".bground");
  const modalBtn = [...document.querySelectorAll(".modal-btn")];
  const close = document.querySelector('.close');
  const closeBtn = document.querySelector('.close-btn');
  const successMessage = document.querySelector('.success-message-container');

  const form = document.querySelector('#form');
  const firstName = document.querySelector('#first');
  const lastName = document.querySelector('#last');
  const email = document.querySelector('#email');
  const date = document.querySelector('#birthdate');
  const quantity = document.querySelector('#quantity');
  const villes = [...document.querySelectorAll('.radio-input')];
  const checkbox = document.querySelector('#checkbox1');
  const checkboxError = document.querySelector('.checkbox-error-message');



  //Open Nav Menu
  navBtn.addEventListener('click', () => {
    navMenu.classList.toggle('mobile');
    navBtn.classList.toggle('opened');
  })



  //Launch modal form
  const launchModal = () => {
    modalbg.classList.add('show');
  }
  for (let i=0; i < modalBtn.length; i++) {
    modalBtn[i].addEventListener('click', launchModal);
  }



  //Close Modal
  const closeModal = () => {
    modalbg.classList.remove('show');
  }
  close.addEventListener('click', closeModal);
  closeBtn.addEventListener('click', () => {
    modalbg.classList.remove('show');
    successMessage.classList.remove('show');
  });



  //function that shows the error state of an input
  const showError = (input) => {
    const parent = input.parentElement;
    const error = parent.querySelector('.error-message');
    input.classList.add('invalid');
    error.style.display="block";
  }



  //function that shows the success state of an input
  const showSuccess = (input) => {
    const parent = input.parentElement;
    const success = parent.querySelector('.error-message');
    input.classList.remove('invalid');
    success.style.display="none";
  }



  // Check the validity of the FIRST name input
  const checkFirstName = () => {

    let valid = false;
    const min = 2;

    if(firstName.value.length < min) {
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

    if(lastName.value.length < min) {
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
    let emailValue = email.value.trim();

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
    
    if(date.value === "") {
      showError(date);
    } else {
      showSuccess(date);
      valid = true;
    }
    return valid;
  }



  // Check the validity of the QUANTITY input
  const checkQuantity = () => {

    let valid = false;
    let min = 1;

    if(quantity.value < min ){
      showError(quantity);
      } else {
        showSuccess(quantity);
        valid = true;
      }
    return valid;

  }



  // Check the validity of the VILLES selection
  const checkVilles = () => {
    
    let valid = false;

    const radioError = document.querySelector('.radio-container .error-message');

    for (let i = 0; i < villes.length; i++) {

      if(villes[i].checked === false) {
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

    if(checkbox.checked === false) {
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
    let quantityValid = checkQuantity();
    let villeValid = checkVilles();
    let conditionsValid = checkConditions();

    let formIsValid = nameValid && lastValid && emailValid && dateValid && quantityValid && villeValid && conditionsValid;

    if(formIsValid) {
      successMessage.classList.add('show');
      form.reset();
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
      case 'quantity':
        checkQuantity();
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

})






