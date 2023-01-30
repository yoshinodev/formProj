let form = document.querySelector("form");
let fullName = document.getElementById("name");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let bornDate = document.getElementById("bornDate");
let newPassword = document.getElementById("newPassword");

let pwdConfirm = document.getElementById("passwordConfirmation");

let select = document.querySelector("select");
let policy = document.getElementById("agreeStyle");



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
        crossName.style.display = "block"
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
        crossEmail.style.display = "block";
    }
    else {
        crossEmail.style.display = "none";
    }
}

phone.addEventListener('input', validatePhone);

function validatePhone() {
    let regexPhone = (/9[1236][0-9]{7}|2[1-9][0-9]{7}/);
    let phoneValue = phone.value;
    let crossPhone = document.getElementsByClassName("cross")[2];

    if(!regexPhone.test(phoneValue)) {
        crossPhone.style.display = "block";
    }
    else {
        crossPhone.style.display = "none";
    }
}

bornDate.addEventListener("input", validateBornDate);

function regexBornDate() {
    let regexBornDate = (/9[1236][0-9]{7}|2[1-9][0-9]{7}/);
    let bornDateValue = bornDate.value;
    let crossBornDate = document.getElementsByClassName("cross")[3];

    if (!regexBornDate.test(bornDateValue)) {
        crossBornDate.style.display = "block";
    }
    else {
        crossBornDate.style.display = "none";
    }
}

newPassword.addEventListener("input", validateNewPassword);

function regexNewPassword() {
    let regexNewPassword = (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[#$%&])[0-9a-zA-Z#$%&]{6,10}$/);
    let newPasswordValue = newPassword.value;
    let crossNewPassword = document.getElementsByClassName("cross")[4];

    if (!regexNewPassword.test(newPasswordValue)) {
        crossNewPassword.style.display = "block";
    }
    else {
        crossNewPassword.style.display = "none";
    }
} 

function pwdConfirm() {
    let pwdConfirm = pwdConfirm.value; 
    let pwdConfValue = document.getElementsByClassName("cross")[5];
    
    if (!pwdConfirm.test(pwdConfValue)) {
        crossPwdConfirm.style.display = "block";
    }
    else {
        crossPwdConfirm.style.display = "none";
    }
} 




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










