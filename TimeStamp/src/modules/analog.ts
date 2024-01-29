import moment from "moment";

const handSeconds: Element | any = document.querySelector(".hand.seconds");
const handMinutes: Element | any = document.querySelector(".hand.minutes");
const numberOfMinutes: Element | any = document.querySelector(".numberOfminutes");

const secondMarks: string[] = [];

// Loop som loopar fram indikationer för varje sträck som visar klockans sekunder/minuter.
for (let i = 0; i < 60; i++) {
  secondMarks.push(`<span style="--index:${i}"></span>`);
}

numberOfMinutes.innerHTML = secondMarks.join("");

let timerEndTime: moment.Moment | null = null;
let timerInterval: number | null = null;

function updateAnalogClock() {
  if (timerEndTime) {
    const now = moment();
    const duration = moment.duration(timerEndTime.diff(now));
    const minutes = Math.ceil(Math.max(0, duration.asMinutes()));
    const seconds = Math.floor(duration.seconds());
	
    // Uppdatera analog klocka baserat på förfluten tid i timern
    handSeconds.style.transform = `rotate(${- seconds * 6}deg)`; // 60 - seconds för att räkna bakåt
    handMinutes.style.transform = `rotate(${- minutes * 6}deg)`; // 60 - minutes för att räkna bakåt
  }
}

function startAnalogClock(endTime: moment.Moment) {
  timerEndTime = endTime;

  // Uppdatera klockan varje sekund
  timerInterval = setInterval(updateAnalogClock, 1000);
}

function stopAnalogClock() {
  // Stoppa uppdateringen av klockan
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
    timerEndTime = null;
  }
}



setInterval(updateAnalogClock, 1000);

export { startAnalogClock, stopAnalogClock, updateAnalogClock};