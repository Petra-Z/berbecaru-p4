function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements - form
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalCloseBtn = document.querySelector(".close");
const form = document.getElementById("form");
const content = document.querySelector(".content")
const modalBody = document.querySelector(".modal-body")

// DOM Elements - validation message
const successMsg = document.getElementById("success-popup");
const successPopupClose = document.querySelector(".btn-fermer");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
modalCloseBtn.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form when clicking the x
function closeModal() {
  modalbg.style.display = "none";
}

// close modal function when clicking outside the form
window.addEventListener("click", (e) => {
  if(e.target === modalbg){
    modalbg.style.display = "none";
  }
});

// close success event
successPopupClose.addEventListener("click", closeSuccess);

// close success message popup and refresh the page 
function closeSuccess() {
  successMsg.style.display = "none";
  form.style.display = "block";
  closeModal();
  form.reset();
}

// DOM Elements - all the input form elements
const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const checkbox1 = document.getElementById("checkbox1");
const quantity = document.getElementById("quantity");


// event submit form
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkFirstName();
  checkLastName();
  checkEmail();
  checkBirthdate();
  checkQuantity();
  checkLocation();
  checkboxValidation();
  if(
  checkFirstName() && checkLastName() && checkEmail() && checkBirthdate() && checkQuantity() && checkLocation() && checkboxValidation()
  ) {
    form.style.display = "none";
    successMsg.style.display = 'block';
  }
});


// check first name
function checkFirstName() {

  let firstName = document.getElementById("first-name");

  if(first.value.trim() === '' || first.value.trim().length < 2 ){
    firstName.setAttribute('data-error-visible', 'true');
    return false;
  } else {
    firstName.setAttribute('data-error-visible', 'false');
    return true;
  }
}

// check last name
function checkLastName() {

  let lastName = document.getElementById("last-name");

  if(last.value.trim() === '' || last.value.trim().length <2){
    lastName.setAttribute('data-error-visible', 'true');
    return false;
  } else {
    lastName.setAttribute('data-error-visible', 'false');
    return true;
  }
}

// check email 
function checkEmail() {

  let emailData = document.getElementById("emailData");
  let rgxEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;

   if(email.value.trim() === '' || rgxEmail.test(email.value) == false){
    emailData.setAttribute('data-error-visible', 'true');
    return false;
   }
  else {
    emailData.setAttribute('data-error-visible', 'false');
    return true;
  }
}

// check birthday
function checkBirthdate() {

  let birthdateData = document.getElementById("birthdateData");

  if(birthdate.value === ''){
    birthdateData.setAttribute('data-error-visible', 'true');
    return false;
  } else {
    birthdateData.setAttribute('data-error-visible', 'false');
    return true;
  }
}

// check quantity
function checkQuantity() {

  let quantityData = document.getElementById("quantityData");
  
  if(quantity.value === ''){
    quantityData.setAttribute('data-error-visible', 'true');
    return false;
  } else {
    quantityData.setAttribute('data-error-visible', 'false');
    return true;
  }
}

// check location
function checkLocation() {

  let locationData = document.getElementById("locationData");

  if (
    location1.checked == false &&
    location2.checked == false &&
    location3.checked == false &&
    location4.checked == false &&
    location5.checked == false &&
    location6.checked == false
  ) {
    locationData.setAttribute('data-error-visible', 'true');
    return false;
  } else {
    locationData.setAttribute('data-error-visible', 'false');
    return true;
  }
}

// check checkbox
function checkboxValidation() {

  let checkbox1Data = document.getElementById("checkbox1Data");

  if(checkbox1.checked == false) {
    checkbox1Data.setAttribute('data-error-visible', 'true');
    return false;
  } else {
    checkbox1Data.setAttribute('data-error-visible', 'false');
    return true;
  } 
}

