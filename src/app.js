const modal = document.getElementById("modal");
const close = document.getElementById("close");
const createAccount = document.getElementById("createAccount");
const createUser = document.getElementById("createUser");
const signupUser = document.getElementById("signupUser");
const verifyOtp = document.getElementById("verifyOtp");
const step = document.getElementById("step");
const stepOne = document.getElementById("stepOne");
const stepTwo = document.getElementById("stepTwo");
const stepThree = document.getElementById("stepThree");
const stepFour = document.getElementById("stepFour");

stepTwo.style.display = "none";
stepThree.style.display = "none";
stepFour.style.display = "none";

close.addEventListener("click", () => {
  modal.close();
});

createAccount.addEventListener("click", () => {
  modal.showModal();
});

createUser.addEventListener("click", () => {
  step.innerText = "2";
  stepOne.style.display = "none";
  stepTwo.style.display = "flex";
});

signupUser.addEventListener("click", () => {
  step.innerText = "3";
  stepTwo.style.display = "none";
  stepThree.style.display = "flex";
  modal.classList.add("h-119");
});

verifyOtp.addEventListener("click", () => {
  step.innerText = "4";
  stepThree.style.display = "none";
  stepFour.style.display = "flex";
});
