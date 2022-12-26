
const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const pwdRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const form = document.querySelector("form");
const userName = document.querySelector("#userName");
const emailId = document.querySelector("#emailId");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const error = document.querySelector("#error");
const pwderror = document.querySelector("#pwderror");
const cnfrmerror = document.querySelector("#cnfrmerror");


window.addEventListener("load", () => {
    
    const isValid = emailId.value.length === 0 || emailRegExp.test(emailId.value);
    emailId.className = isValid ? "valid" : "invalid";
    const pwdValid = password.value.length === 0 || pwdRegExp.test(password.value);
    password.className = pwdValid ? "valid" : "invalid";

  });

emailId.addEventListener('input', () => {

    const isValid = emailId.value.length === 0 || emailRegExp.test(emailId.value);
    if (isValid) {
        emailId.className = "valid";
        error.textContent = "";
        error.className = "error";
      } else {
        emailId.className = "invalid";
      }
    

    
});

password.addEventListener( 'input', () => {
    
    const pwdValid = password.value.length === 0 || pwdRegExp.test(password.value);

    if(pwdValid) {
        password.className = "valid";
        pwderror.textContent = "";
        pwderror.className = "error";
      } else {
        password.className = "invalid";
      }
    

});

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const isValid = emailId.value.length === 0 || emailRegExp.test(emailId.value);
  if (!isValid) {
    emailId.className = "invalid";
    error.textContent = "I expect an email, darling!";
    error.className = "error active";
  } else {
    emailId.className = "valid";
    error.textContent = "";
    error.className = "error";
  }

  const pwdValid = password.value.length === 0 || pwdRegExp.test(password.value);
  if (!pwdValid) {
    password.className = "invalid";
    pwderror.textContent = "atleast one Upper,Lower,special case letter and one digit";
    pwderror.className = "error active";
  } else {
    password.className = "valid";
    pwderror.textContent = "";
    pwderror.className = "error";
  }

  if( confirmPassword.value == password.value){
    // password.className = "valid";
    cnfrmerror.textContent = "";
    cnfrmerror.className = "error active";
  } 
  else{
    cnfrmerror.textContent = "confirm password is not matching";
    cnfrmerror.className = "error";
  }
});