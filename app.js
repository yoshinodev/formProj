let form = document.querySelector("form");
let fullName = document.getElementById("name");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let bornDate = document.getElementById("bornDate");
let newPassword = document.getElementById("newPassword");

let pwdConfirm = document.getElementById("passwordConfirmation");
let checkPolicy = document.getElementById("checkPolicy");
let select = document.querySelector("select");




/*let levelOptions_Started = document.getElementById("levelOptions_Started");
let levelOptions_Intermediate = document.getElementById("levelOptions_Intermediate");
let levelOptions_Advanced = document.getElementById("levelOptions_Advanced");
let levelOptions_PreProfessional = document.getElementById("levelOptions_PreProfessional");
let levelOptions_Professional = document.getElementById("levelOptions_Professional"); */


fullName.addEventListener('input', validateName);

function validateName() {
    let regexName = (/^([a-zA-Z]{1,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{1,}\s?([a-zA-Z]{1,})?)/); 
            // it's acepting numbers after the first 2 words
    let nameValue = fullName.value;
    let crossName = document.getElementsByClassName("cross")[0];        
    if (!regexName.test(nameValue)) {
        crossName.style.display = "inline";
    } 
    else {
        crossName.style.display = "none";             
    }
}


email.addEventListener('input', validateEmail);

function validateEmail() {
    let regexEmail = (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
    let emailValue = email.value; 
    let crossEmail = document.getElementsByClassName("cross")[1];
    
    if(!regexEmail.test(emailValue)) {
        crossEmail.style.display = "inline";
    }
    else {
        crossEmail.style.display = "none";
    }
}

phone.addEventListener('input', validatePhone);

function validatePhone() {
    let regexPhone = (/^\+?[0-9]{9}([0-9]{3})?$/);
    let phoneValue = phone.value;
    let crossPhone = document.getElementsByClassName("cross")[2];

    if(!regexPhone.test(phoneValue)) {
        crossPhone.style.display = "inline";
    }
    else {
        crossPhone.style.display = "none";
    }
}

bornDate.addEventListener("input", validateBornDate);

function validateBornDate() {
    let regexBornDate = (/(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(19|20)\d{2}/);
    let bornDateValue = bornDate.value;
    let crossBornDate = document.getElementsByClassName("cross")[3];

    if (!regexBornDate.test(bornDateValue)) {
        crossBornDate.style.display = "inline";
    }
    else {
        crossBornDate.style.display = "none";
    }
}

newPassword.addEventListener("input", validateNewPassword);

function validateNewPassword() {
    let regexNewPassword = (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[#$%&])[0-9a-zA-Z#$%&]{6,10}$/);
    let newPasswordValue = newPassword.value;
    let crossNewPassword = document.getElementsByClassName("cross")[4];

    if (!regexNewPassword.test(newPasswordValue)) {
        crossNewPassword.style.display = "inline";
    }
    else {
        crossNewPassword.style.display = "none";
    }
} 

pwdConfirm.addEventListener("input", validatePwdConfirm);

function validatePwdConfirm() {
    let pwdConfirmValue = pwdConfirm.value; 
    let crossPwdConf = document.getElementsByClassName("cross")[5];
    
    if (pwdConfirmValue !== newPassword.value) {
        crossPwdConf.style.display = "inline";    
    }
    else {
        crossPwdConf.style.display = "none";
    }
} 

checkPolicy.addEventListener("click", myFunction); 

function myFunction() {
    let checkBox = document.getElementById("checkPolicy");
    let crossPolicy = document.getElementsByClassName("cross")[6];

    if (checkBox.checked !== true){
        crossPolicy.style.display = "inline";
    } else {
        crossPolicy.style.display = "none";
    }
  }
// IF  THE ABOVE DOESN'T WORK, WE TRY THIS ONE:
// function checkbocValidate(form) {
    
//     if(form.checkboxfield.checked) {
//         crossPolicy.style.display = "inline";
//     }
//     else { 
//         crossPolicy.style.display = "none";
//     }
// }




// Review later to add the cross on the checkbox policy









// const regex = new RegExp(/^a...s$/);
// console.log(regex.test('alias')); // true

// crossName
// ^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)

// email 
// /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test('iefp@sapo.com')

// Telefone
// /9[1236][0-9]{7}|2[1-9][0-9]{7}/.test('2463456789')

//telemovel
//9[1236][0-9]{7}|2[1-9][0-9]{7}/

//Password:
// /^
//   (?=.*\d)                   // must contein at least 1 digit
//   (?=.*[a-z])                // must contein at least 1 lower case letter
//   (?=.*[A-Z])                // must contein at least 1 upper case letter
//   (?=.*[#$%&])               // must contein at least 1 special character
//   [0-9a-zA-Z#$%&]{6,10}      // must contein a minimum of 6 and maximum of 10 special characters
// $/

