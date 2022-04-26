let timerElement = document.querySelector(".timer");
const buttons = document.querySelectorAll("button");
let timeList = ["00", "00", "00"];

function timeShow() {
  timerElement.innerHTML = timeList.join(" : ");
}

function seccondAdd() {
  timeList[2] = Number(timeList[2]) + 1;
  timeShow();
}
function minuteAdd() {
  if (Number(timeList[2]) == 60) {
    timeList[2] = "00";
    timeList[1] = Number(timeList[1]) + 1;
    timeShow();
  }
}
function hourAdd() {
  if (Number(timeList[1]) == 60) {
    timeList[1] = "00";
    timeList[0] = Number(timeList[0]) + 1;
    timeShow();
  }
}

buttons[0].addEventListener("click", setInterval(seccondAdd, 1000));

timerElement.addEventListener("change", () => alert("done"));
