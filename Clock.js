// Selectors
const hourr = document.querySelector(".hour");
const minutee = document.querySelector(".minute");
const secondd = document.querySelector(".second");
const digitalHo = document.querySelector(".ho");
const digitalMin = document.querySelector(".min");
const day = document.querySelector(".day");

// Functions

function getTime() {
  var time = new Date();
  var hour = time.getHours() - 12;
  var minute = time.getMinutes();
  var second = time.getSeconds();

  rotateHour = hour / 12;
  rotateMin = minute / 60;
  rotateSecon = second / 60;

  rotate(hourr, rotateHour);
  rotate(minutee, rotateMin);
  rotate(secondd, rotateSecon);

  digitalHo.textContent = time.getHours();
  digitalMin.textContent = minute;
  day.textContent = time.getFullYear();
}

function rotate(pointer, time) {
  pointer.style.setProperty("--rotate", time * 360);
}

setInterval(getTime, 1000);
