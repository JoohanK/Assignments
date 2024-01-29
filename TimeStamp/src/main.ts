import "./scss/styles.scss";


import { stopBreakTimer} from "./modules/break";
import {timerMenu, toggleAnalogTimer, showDigitalTimer, showVisualTimer, showSetTimer, clickStartPage} from './modules/menu';
import { startTimer} from "./modules/counter";


  // HTML-element
//   const dropdownButton = document.querySelector('.dropdown-button') as HTMLButtonElement;
//   const menuHidden = document.querySelector('.menu-hidden') as HTMLDivElement;
  const setTimerButton = document.querySelector('.setTimerBtn') as HTMLButtonElement;
  const analogButton = document.querySelector('.analogButton') as HTMLButtonElement;
  const digitalButton = document.querySelector('.digital') as HTMLButtonElement;
  const visualButton = document.querySelector('.visual') as HTMLButtonElement;
  const timerInput = document.getElementById('timer-input') as HTMLInputElement;
  const reduceTimeButton = document.querySelector('.reduce-time') as HTMLButtonElement;
  const addTimeButton = document.querySelector('.add-time') as HTMLButtonElement;
  const startFromPause = document.querySelector('.pause-breath-btn') as HTMLButtonElement;
  const timesUpButton = document.querySelector('.times-up-btn') as HTMLButtonElement;
  const startButton = document.getElementById('start-button') as HTMLButtonElement;
  const stopButton = document.querySelector('.stop-button') as HTMLButtonElement;
  const resetPausButton = document.getElementById('reset-paus-button') as HTMLButtonElement;
  let dropdownBtn: HTMLButtonElement | any = document.querySelector('.dropdown-button');
  const startPageSection: HTMLElement | any = document.querySelector('.start-page');





//drop down menu
//   dropdownButton.addEventListener("click", toggleMenuOptions);
setTimerButton.addEventListener("click", showSetTimer);
startPageSection.addEventListener("click", clickStartPage);
analogButton.addEventListener("click", toggleAnalogTimer);
digitalButton.addEventListener("click", showDigitalTimer );
visualButton.addEventListener("click", showVisualTimer);
dropdownBtn.addEventListener('click', timerMenu);
startFromPause.addEventListener('click', stopBreakTimer);
timesUpButton.addEventListener('click', function() {
	location.reload();
}); 
//Öka minska tiden
reduceTimeButton.addEventListener("click", () => adjustTime(-1));
addTimeButton.addEventListener("click", () => adjustTime(1));

//start, stop
startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", function() {
	location.reload();
});
  resetPausButton.addEventListener("click", startTimer);
  //Functions
//   function toggleMenuOptions() {
//     menuHidden.classList.toggle("hidden");
//   }


  // Funktion för att uppdatera checkbox-värden


  function adjustTime(delta: number): void {
    const currentValue: number = parseInt(timerInput.value, 10);

    if (!isNaN(currentValue)) {
        timerInput.value = Math.max(1, currentValue + delta).toString();
    }
}
