// call the all inputs

const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const cpassword = document.querySelector("#cpassword");

// if we click the register button without checking it hold the form
// so this function will validate

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent default form submission
  const isValid = validateInputs();
  if (isValid) {
    alert("Registration Successful!"); // Feedback for successful validation
    form.reset(); // Reset form fields
  }
});

function validateInputs() {
  // it check the space in the inputfield if is there it will trim
  const usernameval = username.value.trim();
  const emailval = email.value.trim();
  const passwordval = password.value.trim();
  const cpasswordval = cpassword.value.trim();
  let success = true;

  if (usernameval === "") {
    success = false;
    setError(username, "Username is required");
  } else setSuccess(username);

  if (emailval === "") {
    success = false;
    setError(email, "Email is required");
  } else if (!validateEmail(emailval)) {
    success = false;
    setError(email, "Please enter a valid email");
  } else {
    setSuccess(email);
  }

  if (passwordval === "") {
    success = false;
    setError(password, "Password is required");
  } else if (passwordval.length < 8) {
    setError(password, "password must be atleast 8 characters");
  } else {
    setSuccess(password);
  }

  if (cpasswordval === "") {
    success = false;
    setError(cpassword, "Confirm password is required");
  } else if (cpasswordval !== passwordval) {
    setError(cpassword, "Password does not match");
  } else {
    setSuccess(cpassword);
  }

  return success;
}

// it will check the value is valid or not
function setError(element, message) {
  // it will get the value from the parent class and find the error class
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector(".error");

  //   And get the text from the inputfield and if valid gives success and unvalid is error
  errorElement.innerText = message;
  inputGroup.classList.add("error");
  inputGroup.classList.remove("success");
}

function setSuccess(element) {
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector(".error");

  errorElement.innerText = "";
  inputGroup.classList.add("success");
  inputGroup.classList.remove("error");
}

// validating the email
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
};
