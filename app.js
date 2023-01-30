let form = document.querySelector("form");
let fullName = document.getElementById("name");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let bornDate = document.getElementById("bornDate");
let newPassword = document.getElementById("newPassword");

let passwordConfirmation = document.getElementById("passwordConfirmation");

let select = document.querySelector("select");
let policy = document.getElementById("agreeStyle");



/*let levelOptions_Started = document.getElementById("levelOptions_Started");
let levelOptions_Intermediate = document.getElementById("levelOptions_Intermediate");
let levelOptions_Advanced = document.getElementById("levelOptions_Advanced");
let levelOptions_PreProfessional = document.getElementById("levelOptions_PreProfessional");
let levelOptions_Professional = document.getElementById("levelOptions_Professional"); */


fullName.addEventListener('input', validateName);

function validateName() {

    let regexName = (/^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/);
    let nameValue = fullName.value;
        
    if (!regexName.test(nameValue)) {
        document.getElementById("crossName").style.display = "block";
    } 
    else {
        // crossName.style.display = "none";     
        document.getElementById("crossName").style.display = "none";
    }
}


email.addEventListener('input', validateEmail);

function validateEmail() {
    let regexEmail = (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
    let emailValue = email.value; 
    
    if(!regexEmail.test(emailValue)) {
        document.getElementById("crossEmail").style.display = "block";
    }
    else {
        document.getElementById("crossEmail").style.display = "none";
    }
}

phone.addEventListener('input', validatePhone);

function validatePhone() {
    let regexPhone = (/9[1236][0-9]{7}|2[1-9][0-9]{7}/);
    let phoneValue = phone.value;

    if(!regexPhone.test(phoneValue)) {
        document.getElementById("crossPhone").style.display = "block";
    }
    else {
        document.getElementById("crossPhone").style.display = "none";
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












