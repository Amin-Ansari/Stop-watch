let timerElement = document.querySelector(".timer");
const buttons = document.querySelectorAll("button");
let timeList = ["00", "00", "00"];

function timeShow() {
  timerElement.innerHTML = timeList.join(" : ");
}



timeShow();
