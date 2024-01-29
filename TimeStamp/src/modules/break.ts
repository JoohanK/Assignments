import moment from "moment";
import {startTimer} from './counter';

const timerBreak = document.getElementById('timer-display-break') as HTMLDivElement;

let breakTimerInterval: number | null = null;
let breakEndTime: moment.Moment | null = null;


function startBreakTimer() {
	const breakMinutes: number = 5;
    breakEndTime = moment().add(breakMinutes, 'minutes');
	
    breakTimerInterval = setInterval(() => {
		updateBreakTimer();
		
		const now = moment();
		const duration = moment.duration(breakEndTime!.diff(now));
		const minutes = Math.floor(duration.asMinutes());
		const seconds = Math.floor(duration.seconds());
		
      if (minutes <= 0 && seconds <= 0) {
        stopBreakTimer();
        // Startar om den satta timern efter pausen
      }
    }, 1000);
    updateBreakTimer();
   }

  function stopBreakTimer() {
    if (breakTimerInterval) {
      clearInterval(breakTimerInterval);
      breakTimerInterval = null;
      breakEndTime = null;
      startTimer();
    }
  }

  function updateBreakTimer() {
    if (breakEndTime) {
    const breakDuration = moment.duration(breakEndTime.diff(moment()));
    const breakMinutes = Math.floor(breakDuration.asMinutes());
    const breakSeconds = Math.floor(breakDuration.seconds());
    
    timerBreak.innerText = `${breakMinutes.toString().padStart(2, '0')}:${breakSeconds
      .toString()
      .padStart(2, '0')}`;
  }
  }

  export { startBreakTimer, stopBreakTimer, updateBreakTimer}