const timer = document.querySelector(".timer");
const strBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");

let seconds = 0;
let intervalId = null;

function formatTime(totalSeconds) {
  //100
  const minutes = Math.floor(totalSeconds / 60); // 100/60 = Math.floor(1,7) = 1
  const seconds = totalSeconds % 60; // 100 % 60 = 40

  const formattedMin = String(minutes).padStart(2, "0");
  const formattedSec = String(seconds).padStart(2, "0");

  return `${formattedMin} : ${formattedSec}`;
}

strBtn.addEventListener("click", () => {
  if (intervalId !== null) {
    return;
  }

  intervalId = setInterval(() => {
    seconds += 1;

    timer.textContent = formatTime(seconds);
  }, 1000);
});

stopBtn.addEventListener("click", () => {
  clearInterval(intervalId);

  intervalId = null;
});

resetBtn.addEventListener("click", () => {
  clearInterval(intervalId);

  intervalId = null;
  seconds = 0;
  timer.textContent = formatTime(seconds);
});

// --------------------
// таймер зворотнього відліку

const reversCountTimer = document.querySelector(".count-down-timer");
const reversCountTimerButton = document.querySelector(".start-count-down");
const reversCountTimerStopButton = document.querySelector(
  ".start-count-down-stop",
);

let minuts = 5;
let callDownSeconds = minuts * 1;
let timerIsActive = false;
reversCountTimerButton.addEventListener("click", () => {
  if (timerIsActive) {
    return;
  }
    timerIsActive = true;

  const id = setInterval(() => {
    callDownSeconds -= 1;
    reversCountTimer.textContent = formatTime(callDownSeconds);

    if (callDownSeconds <= 0) {
      clearInterval(id);
      timerIsActive = false;
      alert("Час вийшов!");
    }
  }, 1000);

});

// reversCountTimerStopButton.addEventListener("click", () => {
//   clearInterval(id);
//   timerIsActive = false
// })
