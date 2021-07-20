// Selectors

var button = document.querySelector(".btn-mode");
var body = document.querySelector("body");

// Events
button.addEventListener("click", changeTheme);

//functions
function changeTheme() {
  body.classList.toggle("dark");
}
