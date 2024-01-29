import moment from "moment";

const timerInput = document.getElementById('timer-input') as HTMLInputElement;


let timerEndTime: moment.Moment | null = null;
let timerInterval: number | null = null;

function updateVisualTimer() {
  if (timerEndTime) {
    const now = moment();
    const duration = moment.duration(timerEndTime.diff(now));
    const minutes: number = parseInt(timerInput.value, 10);
    const milliseconds = duration.asMilliseconds() - 990;
    const visualTimer = document.querySelector('#visual-timer') as HTMLElement;
    // visualTimer.style.animation = `expandHeight ${minutes * 60}s linear`;
    let timeSurpassed = (1-milliseconds/(minutes * 60000)) * 41.6875;
    visualTimer.style.height = `${timeSurpassed}rem`;
  }
}

function startVisualTimer(endTime: moment.Moment) {
  timerEndTime = endTime;

  // Uppdatera klockan varje millisekund
  timerInterval = setInterval(updateVisualTimer, 1);
}

function stopVisualTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
    timerEndTime = null;
  }
}


setInterval(updateVisualTimer, 1);

export { startVisualTimer, stopVisualTimer, updateVisualTimer};