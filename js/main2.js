/***************GLOBAL***************/

let docHtml = document,
loginLocation = location.href.slice(0, location.href.lastIndexOf("/")) + "/login.html",
logout = docHtml.getElementById("logout"),
welcome = docHtml.getElementById("welcome"),
userName = JSON.parse(localStorage.getItem("loginUser"));
console.log(welcome);

(function(){
  welcome.innerHTML =`<h1 class="fw-bold display-4 text-center here">WELCOME  ${userName.toUpperCase()} </h1>`
})()

logout.addEventListener("click", _ =>{
  location.replace(loginLocation)
  localStorage.removeItem("loginUser")
  })
/***************EVENTS***************/





