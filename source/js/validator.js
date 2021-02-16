let userForm = document.querySelector(".add-user__form");
let userEmail = userForm.querySelector(".new-user-email");
let userPhone = userForm.querySelector(".new-user-phone");
let submitBtn = userForm.querySelector(".form__button-submit");

let isEmailOK = false;
let isPhoneOK = false;

const EMAIL_REGEXP = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const PHONE_REGEXP = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;

function emailValidation() {
    let emailValue = userEmail.value.trim().toLowerCase();
    console.log("entered email is: " + emailValue);
    if (EMAIL_REGEXP.test(emailValue)) {
        isEmailOK = true;
        console.log("REGEXP email OK")
    } else {
        console.log("REGEXP email fail");
    }
}

function phoneValidation() {
    let phoneValue = userPhone.value.trim();
    console.log("entered phone is: " + phoneValue);
    if (PHONE_REGEXP.test(phoneValue)) {
        isPhoneOK = true;
        console.log("REGEXP phone OK")
    } else {
        console.log("REGEXP fail")
    }
}

submitBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (!isEmailOK) {
        console.log("email is not ok")
    } else if (!isPhoneOK) {
        console.log("phone is not ok")
    } else {
        console.log("submitting...")
        userForm.submit();
    }
})

userEmail.addEventListener("change", emailValidation)
userPhone.addEventListener("change", phoneValidation)
