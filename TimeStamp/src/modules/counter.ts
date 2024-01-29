
import moment from "moment";
import { startBreakTimer } from "./break";
import { startAnalogClock } from "./analog";
import { startVisualTimer } from "./visual";
import { showDigitalTimerForPopUp, showPausBreath, showTimesUp } from "./menu";

const checkboxIntervals = document.getElementById('checkbox-intervals') as HTMLInputElement;
const checkboxBreak = document.getElementById('checkbox-break') as HTMLInputElement;
const timerInput = document.getElementById('timer-input') as HTMLInputElement;
const timerDisplay = document.getElementById('timer-display') as HTMLDivElement;

  let timerInterval: number | null = null;
  let endTime: moment.Moment | null = null;
  let shouldRepeat = checkboxIntervals.checked;
  let shouldRepeatWithPaus = checkboxIntervals.checked && checkboxBreak.checked;

   // Lyssna på ändringar i checkboxarna
   checkboxIntervals.addEventListener('change', updateCheckboxValues);
   checkboxBreak.addEventListener('change', function () {
     // Klicka i checkboxIntervals om checkboxBreak är markerad
     if (checkboxBreak.checked) {
         checkboxIntervals.checked = true;
     }
     updateCheckboxValues();
 });

   // Funktion för att uppdatera checkbox-värden
   function updateCheckboxValues() {
    shouldRepeat = checkboxIntervals.checked;
    shouldRepeatWithPaus = checkboxIntervals.checked && checkboxBreak.checked;

    if (!shouldRepeat) {
      checkboxBreak.checked= false;
    }
  }

  function startTimer() {
    const minutes: number = parseInt(timerInput.value, 10);
    if (isNaN(minutes) || minutes <= 0) {
      alert("Please enter a valid positive number of minutes.");
      return;
    }
  
    showDigitalTimerForPopUp();
    endTime = moment().add(minutes, 'minutes');
    startAnalogClock(endTime);
    startVisualTimer(endTime);
    timerInterval = setInterval(() => {
      updateTimerDisplay();
      
      const now = moment();
      const duration = moment.duration(endTime!.diff(now));
      const minutes = Math.max(0, Math.floor(duration.asMinutes())); // Kontrollera att minuterna inte är negativa
      const seconds = Math.floor(duration.seconds());
  
      if (minutes === 0 && seconds === 0) {
        stopTimer();
        showTimesUp();

        if (shouldRepeat && !shouldRepeatWithPaus) {
          startTimer();
          
        } else if (shouldRepeatWithPaus) {
          
          stopTimer();
          startBreakTimer();
          showPausBreath();
          
        } 
      }
    }, 1000);
    updateTimerDisplay();
    
  
  }

  function stopTimer() {
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
      endTime = null;
    }
  }

  function updateTimerDisplay() {
    if (endTime) {
      const duration = moment.duration(endTime.diff(moment()));
      const minutes = Math.floor(duration.asMinutes());
      const seconds = Math.floor(duration.seconds());
      timerDisplay.innerText = `${minutes
        .toString()
        .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
  }

  export {startTimer, stopTimer, updateTimerDisplay, updateCheckboxValues};