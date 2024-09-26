// Sign in
const signInBtn = document.querySelector("#signBtn");
const signInMenu = document.querySelector("#signIn-menu");
signInBtn.addEventListener("click", function () {
  signInMenu.classList.toggle("sign-active");
});
// function verifyCredentials (email, password) {
//     const validated = validateUserName(email);

//     if (validated == false){
//          return "Sorry, not verified.";
//     }

//     const validPassword =  validatePassword(password);

//     if (validPassword == true) {
//          return "Verified!";
//     }

//     else {
//          return "Sorry, not verified.";
//     }
// }
