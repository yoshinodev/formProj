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

let regexName = "^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)";
let nameValue = fullName.value;
if (!regexName.test(nameValue)) {
    
}














