let timerElement = document.querySelector(".timer");
const buttons = document.querySelectorAll("button");
let timeList = ["00", "00", "00"];
var timeInterval;

function timeShow() {
  if (Number(timeList[2]) == 60) {
    minuteAdd();
  }
  if (Number(timeList[1]) == 60) {
    hourAdd();
  }
  timerElement.innerHTML = timeList.join(" : ");
}

function seccondAdd() {
  timeList[2] = Number(timeList[2]) + 1;
  timeShow();
}
function minuteAdd() {
  timeList[2] = "00";
  timeList[1] = Number(timeList[1]) + 1;
}
function hourAdd() {
  timeList[1] = "00";
  timeList[0] = Number(timeList[0]) + 1;
}

buttons[0].addEventListener("click", function () {
  timeInterval = setInterval(seccondAdd, 1000);
});

buttons[1].addEventListener("click", function () {
  clearInterval(timeInterval);
});
buttons[2].addEventListener("click", function () {
  clearInterval(timeInterval);
  for (let i = 0; i < timeList.length; i++) {
    timeList[i] = "00";
  }
  timeShow();
});
