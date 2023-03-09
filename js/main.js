/***************GLOBAL***************/

let docHtml = document,
  nameInput = docHtml.getElementById("nameInput"),
  alertName = docHtml.getElementById("alertName"),
  emailInput = docHtml.getElementById("emailInput"),
  alertEmail = docHtml.getElementById("alertEmail"),
  alertEmailRe = docHtml.getElementById("alertEmailRe"),
  passwordInput = docHtml.getElementById("passwordInput"),
  alertPass = docHtml.getElementById("alertPass"),
  done = docHtml.getElementById("done"),
  signUp = docHtml.getElementById("signUp"),
  signIn = docHtml.getElementById("signIn"),
  passIcon = docHtml.getElementById("passIcon"),
  loginLocation = location.href.slice(0, location.href.lastIndexOf("/")) + "/login.html",
  regex1 = /^([a-z]{3,8})?\s?[a-z]{1,8}?$/i,
  regex2 = /^\w+([a-z])+(\d+)?@(gmail|yahoo|hotmail|outlook)\.com$/i,
  regex3 = /.{6}/i,
  array = [];

if (getLocalInfo() != null) {
  array = getLocalInfo();
}

/***************EVENTS***************/

signIn.addEventListener("click", _ => {
  location.replace(loginLocation)
})

nameInput.addEventListener("input", _ => {
  if (regex1.test(nameInput.value)) {
    nameInput.style.borderColor = "green"
  } else {
    nameInput.style.borderColor = "red"
  }
})

emailInput.addEventListener("input", _ => {
  if (regex2.test(emailInput.value)) {
    emailInput.style.borderColor = "green"
  } else {
    emailInput.style.borderColor = "red"
  }
})

passwordInput.addEventListener("input", _ => {
  if (regex3.test(passwordInput.value)) {
    passwordInput.style.borderColor = "green"
  } else {
    passwordInput.style.borderColor = "red"
  }
})

passIcon.addEventListener("click", showPassword)

/**************FUNCTIONS****************/

signUp.addEventListener("click", _ => {
  if (nameVal() & emailVal1() & emailVal2() & passVal()) {
    const newAccount = {
      userName: nameInput.value,
      userEmail: emailInput.value,
      userPass: passwordInput.value
    }
    array.push(newAccount)
    setLocal()
    done.classList.remove("d-none");
    resetInp()
  }
})

function setLocal() {
  localStorage.setItem("accounts", JSON.stringify(array))
}

function getLocalInfo() {
  return JSON.parse(localStorage.getItem("accounts"));
}

function nameVal() {
  if (nameInput.style.borderColor === "green") {
    alertName.classList.add("d-none")
    return true;
  } else {
    alertName.classList.remove("d-none")
    return false;
  }
}

function emailVal1() {
  if (emailInput.style.borderColor === "green") {
    alertEmail.classList.add("d-none")
    return true;
  } else {
    alertEmail.classList.remove("d-none")
    return false;
  }
}

function emailVal2() {
  if (emailVal1() & localStorage.getItem("accounts") != null) {
    if (localStorage.getItem("accounts").includes(emailInput.value) & emailInput.value != "") {
      alertEmailRe.classList.remove("d-none")
      emailInput.style.borderColor = "yellow"
      return false
    } else {
      alertEmailRe.classList.add("d-none")
      return true
    }
  } else {
    return true
  }
}

function passVal() {
  if (passwordInput.style.borderColor === "green") {
    alertPass.classList.add("d-none")
    return true
  } else {
    alertPass.classList.remove("d-none")
    return false
  }
}

function resetInp() {
  nameInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";
  setTimeout(() => {
    done.classList.add("d-none");
  }, 5000);
  nameInput.style.borderColor = "#ced4da"
  emailInput.style.borderColor = "#ced4da"
  passwordInput.style.borderColor = "#ced4da"
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
