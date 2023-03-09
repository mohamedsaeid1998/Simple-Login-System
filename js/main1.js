/***************GLOBAL***************/

let docHtml = document,
  emailInput = docHtml.getElementById("emailInput"),
  alertEmail = docHtml.getElementById("alertEmail"),
  passwordInput = docHtml.getElementById("passwordInput"),
  alertPass = docHtml.getElementById("alertPass"),
  loginInput = docHtml.getElementById("loginInput"),
  required = docHtml.getElementById("required"),
  signUp = docHtml.getElementById("signUp"),
  homeLocation = location.href.slice(0, location.href.lastIndexOf("/")) + "/homePage.html",
  indexLocation = location.href.slice(0, location.href.lastIndexOf("/")) + "/index.html",
  accounts = [];

if (getLocalInfo() != null) {
  accounts = getLocalInfo()
}

/***************EVENTS***************/

loginInput.addEventListener('click', checking)

signUp.addEventListener('click',_=>{
  location.replace(indexLocation)
})

passIcon.addEventListener("click", showPassword)

/**************FUNCTIONS****************/

function checking() {
  if(requiredFields()){
    for (let i = 0; i < accounts.length; i++) {
      let valEmail = accounts[i].userEmail.includes(emailInput.value),
        valUser = accounts[i].userName.includes(emailInput.value),
        valPass = accounts[i].userPass.includes(passwordInput.value)
      if ( (valEmail | valUser) & valPass ) {
        addDisplay()
        console.log("hello")
        localStorage.setItem("loginUser",JSON.stringify(accounts[i].userName))
        location.replace(homeLocation)
      } else {
        removeDisplay()
      }
    }
  }else {
    requiredFields()
    removeDisplay()
  }
}

function getLocalInfo() {
  return JSON.parse(localStorage.getItem("accounts"));
}

function removeDisplay() {
  alertEmail.classList.remove("d-none")
  alertPass.classList.remove("d-none")
}

function addDisplay() {
  alertEmail.classList.add("d-none")
  alertPass.classList.add("d-none")
}

function requiredFields() {
  if (getLocalInfo() == null || emailInput.value == "" || passwordInput.value == "") {
    required.classList.remove("d-none")
    return false
  } else {
    required.classList.add("d-none")
    return true
  }
}

function showPassword() {
  if (passwordInput.type == "password") {
    passwordInput.type = "text";
    passIcon.classList.replace("fa-eye", "fa-eye-slash");
  } else {
    passwordInput.type = "password";
    passIcon.classList.replace("fa-eye-slash", "fa-eye");
  }
}