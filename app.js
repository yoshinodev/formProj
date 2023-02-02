let form = document.querySelector("form");
let fullName = document.getElementById("name");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let bornDate = document.getElementById("bornDate");
let newPassword = document.getElementById("newPassword");
let pwdConfirm = document.getElementById("passwordConfirmation");
let submitedMessage = document.getElementById("messagValidation");

function isRequired(value) {
    if (value === '') {
        return false;
    }
    else{
        return true;
    }
}

fullName.addEventListener('input', validateName);

/* function to check iff the name is valid: it's considered valid
 if it has at least 2 alphabetical words with 2 letters each*/

function validateName() {
    isRequired = true;
    let regexName = (/^([a-zA-Z]{1,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{1,}\s?([a-zA-Z]{1,})?)/);
    let nameValue = fullName.value;
    let crossName = document.getElementsByClassName("cross")[0];
    if (!regexName.test(nameValue)) {
        crossName.style.display = "inline";
        return false;
    }
    else {
        crossName.style.display = "none";
        return true;
    }
}

email.addEventListener('input', validateEmail);

// function to check if the email is valid using a regex for email format

function validateEmail() {
    isRequired = true;
    let regexEmail = (/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/);
    let emailValue = email.value;
    let crossEmail = document.getElementsByClassName("cross")[1];

    if(!regexEmail.test(emailValue)) {
        crossEmail.style.display = "inline";
        return false;
    }
    else {
        crossEmail.style.display = "none";
        return true;
    }
}

phone.addEventListener('input', validatePhone);

/* function to check if the phone number is valid using a regex for phone format
    It's considered valid if it has only digits and min 9 digits or 12 with a plus in the beginning */

function validatePhone() {
    isRequired = false;
    let regexPhone = (/^\+?[0-9]{9}([0-9]{3})?$/);
    let phoneValue = phone.value;
    let crossPhone = document.getElementsByClassName("cross")[2];

    if (phoneValue === '') {
        crossPhone.style.display = "none";
    }
    else if(!regexPhone.test(phoneValue)) {
        crossPhone.style.display = "inline";
        return false;
    }
    else {
        crossPhone.style.display = "none";
        return true;
    }
}

bornDate.addEventListener("input", validateBornDate);

// function to check if the date is valid using a regex for date format

function validateBornDate() {
    isRequired = false;
    /* regex for date format dd/mm/yyyy only accepts digits, / and 4 digits for the year
    It also checks if it's a leap year for february and months with 30 and 31 days */
    let regexBornDate = (/^(?=\d{2}(\/)\d{2}\1\d{4}$)(?:0[1-9]|1\d|[2][0-8]|29(?!.02.(?!(?!(?:[02468][1-35-79]|[13579][0-13-57-9])00)\d{2}(?:[02468][048]|[13579][26])))|30(?!.02)|31(?=.(?:0[13578]|10|12))).(?:0[1-9]|1[012]).\d{4}$/);
    let bornDateValue = bornDate.value;
    let crossBornDate = document.getElementsByClassName("cross")[3];

    //if the input is empty, the cross is not displayed because the field is not required
    if (bornDateValue === '') {
        crossBornDate.style.display = "none";
    }
    else if (!regexBornDate.test(bornDateValue)) {
        crossBornDate.style.display = "inline";
        return false;
    }
    else {
        crossBornDate.style.display = "none";
        return true;
    }
}

newPassword.addEventListener("input", validateNewPassword);

// function to check if the password is valid using a regex for password format

function validateNewPassword() {
    isRequired = true;
    /* regex for password with at least 6 characters, 1 uppercase, 1 lowercase,
     1 number and 1 special character from the list given */
    let regexNewPassword = (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[#$%&])[0-9a-zA-Z#$%&]{6,10}$/);
    /* ^                        // start passwordRegex
      (?=.*\d)                   // must contain at least 1 digit
      (?=.*[a-z])                // must contain at least 1 lower case letter
      (?=.*[A-Z])                // must contain at least 1 upper case letter
      (?=.*[#$%&])               // must contain at least 1 special character
      [0-9a-zA-Z#$%&]{6,10}      // must contain a minimum of 6 and maximum of 10 special characters
    */
    let newPasswordValue = newPassword.value;
    let crossNewPassword = document.getElementsByClassName("cross")[4];

    if (!regexNewPassword.test(newPasswordValue)) {
        crossNewPassword.style.display = "inline";
        return false;
    }
    else {
        crossNewPassword.style.display = "none";
        return true;
    }
}

pwdConfirm.addEventListener("input", validatePwdConfirm);

// function to check if the password confirmation is valid

function validatePwdConfirm() {
    isRequired = true;
    let pwdConfirmValue = pwdConfirm.value;
    let crossPwdConf = document.getElementsByClassName("cross")[5];

    if (pwdConfirmValue !== newPassword.value) {
        crossPwdConf.style.display = "inline";
        return false;
    }
    else {
        crossPwdConf.style.display = "none";
        return true;
    }
}

let checkPolicy = document.getElementById("checkPolicy");
checkPolicy.addEventListener("click", checkboxValidate);

// function to check if the checkbox is checked and therefore valid

function checkboxValidate() {
    isRequired = true;
    let checkBox = document.getElementById("checkPolicy");
    let crossPolicy = document.getElementsByClassName("cross")[6];

    if (checkBox.checked !== true){
        crossPolicy.style.display = "inline";
        return false;
    } else {
        crossPolicy.style.display = "none";
        return true;
    }
  }

// function to check if all the required input validations are true
function validateMaster() {
 if (
    validateName() === true &&
    validateEmail() === true &&
    validateNewPassword() === true &&
    validatePwdConfirm() === true &&
    checkboxValidate() === true
 ) 
 {
    return true;
 }
 else {
    return false;
 }
}

/* function to check if all the input validations are true
    if that's the case, form's hidden and a new message appears */

    form.addEventListener('submit', function (e) {
        // prevent the form from submitting
        e.preventDefault();
        if (validateMaster() === true) {
            form.style.display = "none";
            submitedMessage.style.display = "block";
        }
    });

form.addEventListener('reset', resetFunction);

// function to reset the form

function resetFunction () {
    let reset = document.getElementById("resetBtn").reset();
    return reset;
}
