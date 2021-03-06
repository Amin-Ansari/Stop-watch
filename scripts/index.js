let timerElement = document.querySelector(".timer");
const buttons = document.querySelectorAll("button");
let timeList = ["00", "00", "00"];
var num = 0;
var timeInterval;
var lastTimeInterval;
function timeShow() {
  if (Number(timeList[2]) == 60) {
    minuteAdd();
  }
  if (Number(timeList[1]) == 60) {
    hourAdd();
  }
  timerElement.innerHTML = timeList.join(" : ");
}
function pauseChange() {
  if (timeInterval) {
    if (buttons[1].innerHTML == "Stop") {
      buttons[1].innerHTML = "Continue";
    } else {
      buttons[1].innerHTML = "Stop";
    }
  }
}

function seccondAdd() {
  num = 0;
  if (timeList[2] < 9) {
    num = Number(timeList[2]) + 1;
    timeList[2] = "0" + num;
  } else {
    num = Number(timeList[2]) + 1;
    timeList[2] = num;
  }
  timeShow();
}
function minuteAdd() {
  timeList[2] = "00";
  num = 0;
  if (timeList[1] < 9) {
    num = Number(timeList[1]) + 1;
    timeList[1] = "0" + num;
  } else {
    num = Number(timeList[1]) + 1;
    timeList[1] = num;
  }
}
function hourAdd() {
  timeList[1] = "00";
  num = 0;
  if (timeList[0] < 9) {
    num = Number(timeList[0]) + 1;
    timeList[0] = "0" + num;
  } else {
    num = Number(timeList[0]) + 1;
    timeList[0] = num;
  }
}

buttons[0].addEventListener("click", function () {
  if (!timeInterval) {
    timeInterval = setInterval(seccondAdd, 1000);
  }
});
buttons[1].addEventListener("click", function () {
  if (timeInterval) {
    if (buttons[1].innerHTML == "Continue") {
      timeInterval = setInterval(seccondAdd, 1000);
    } else {
      clearInterval(timeInterval);
    }

    pauseChange();
  }
});
buttons[2].addEventListener("click", function () {
  location.reload();
});
