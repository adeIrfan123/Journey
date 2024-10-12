// Sign in
const signInBtn = document.querySelector("#signBtn");
const signInMenu = document.querySelector("#signIn-menu");
let SignInMode = true;
signInBtn.addEventListener("click", function () {
  signInMenu.classList.toggle("sign-active");
  if (SignInMode) {
    signInBtn.innerHTML = "Sign Up";
    SignInMode = false;
  } else {
    signInBtn.innerHTML = "Sign In";
    SignInMode = true;
  }
});

let inputEmail = document.getElementById("email");
let inputPw = document.getElementById("password");
let btnLogin = document.getElementById("login");

btnLogin.addEventListener("click", function () {
  const userEmail = "irfan@gmail.com";
  const userPw = "123";

  if (inputEmail.value === userEmail && inputPw.value === userPw) {
    window.open("index.html");
  } else {
    document.getElementById("invalid").classList.remove("hidden");
  }
});
