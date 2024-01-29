const setTimerSection: HTMLElement | any = document.querySelector('.set-timer');
const visualTimerSection: HTMLElement | any = document.getElementById('visual-timer-section');
const digitalTimerSection: HTMLElement | any = document.getElementById('digital-timer');
const analogTimerSection: HTMLElement | any = document.getElementById('analogTimerSection');
const startPageSection: HTMLElement | any = document.querySelector('.start-page');
const timesUp: HTMLElement | any = document.querySelector('.times-up');
const pauseBreath: HTMLElement | any = document.querySelector('.pause-breath');
const timerBreak = document.getElementById('timer-display-break') as HTMLDivElement;


let menuHidden: HTMLDivElement | any = document.querySelector('.menu-hidden');
const dropdownMenu: HTMLDivElement | any = document.querySelector('.dropdown-menu');
const dropdownButton: HTMLDivElement | any = document.querySelector('.dropdown-button');
const abortButton: HTMLButtonElement | any = document.querySelector('.stop-button');



function timerMenu(){
	menuHidden.classList.toggle('show');
	dropdownMenu.style.display = 'flex';
	setTimerSection.style.display = 'none';
	digitalTimerSection.style.display = "none";
	analogTimerSection.style.display = "none";
	visualTimerSection.style.display = "none";
	
};

function clickStartPage() {
	setTimerSection.style.display = 'block';
	digitalTimerSection.style.display = "none";
	analogTimerSection.style.display = "none";
	visualTimerSection.style.display = "none";
	dropdownMenu.style.display = 'none';
	startPageSection.style.display = 'none';


	

}

function showSetTimer(){
	
	// setTimerVisible = !setTimerVisible;
	
	if(setTimerSection){
		setTimerSection.style.display = 'flex';
		digitalTimerSection.style.display = "none";
		analogTimerSection.style.display = "none";
		visualTimerSection.style.display = "none";
		dropdownMenu.style.display = 'none';

		setTimerSection.prepend(dropdownButton);	
		menuHidden.classList.toggle('show');
		
	}};
	
	
	function showDigitalTimer() {
		// Invertera värdet på variabeln
		// digitalTimerVisible = !digitalTimerVisible;
		
		// Sätt display-egenskapen baserat på variabelns värde
		if (digitalTimerSection) {
			digitalTimerSection.style.display = "flex";
			analogTimerSection.style.display = "none";
			visualTimerSection.style.display = "none";
			setTimerSection.style.display = 'none';
			dropdownMenu.style.display = 'none';
			pauseBreath.style.display = 'none';
			digitalTimerSection.prepend(dropdownButton);	
			digitalTimerSection.append(abortButton);		
			menuHidden.classList.toggle('show');


	}
}

function showVisualTimer() {
	// Invertera värdet på variabeln
		// visualTimerVisible = !visualTimerVisible;
		 
		// Sätt display-egenskapen baserat på variabelns värde
		if (visualTimerSection) {
			visualTimerSection.style.display = "flex";
			analogTimerSection.style.display = "none";
			digitalTimerSection.style.display = "none";
			setTimerSection.style.display = 'none';
			dropdownMenu.style.display = 'none';

			visualTimerSection.prepend(dropdownButton);	
			visualTimerSection.append(abortButton);		
			menuHidden.classList.toggle('show');



		}}

	function toggleAnalogTimer() {
		// Invertera värdet på variabeln
		// analogTimerVisible = !analogTimerVisible;
		 
		// Sätt display-egenskapen baserat på variabelns värde
		if (analogTimerSection) {
			analogTimerSection.style.display = "flex";
			digitalTimerSection.style.display = "none"
			visualTimerSection.style.display = "none";
			setTimerSection.style.display = 'none';
			dropdownMenu.style.display = 'none';
			analogTimerSection.append(abortButton);		
			analogTimerSection.prepend(dropdownButton);	
			menuHidden.classList.toggle('show');

		}}
	
		function showTimesUp() {
			// Invertera värdet på variabeln
			// analogTimerVisible = !analogTimerVisible;
			 
			// Sätt display-egenskapen baserat på variabelns värde
			if (timesUp) {
				timesUp.style.display = "flex"
				analogTimerSection.style.display = "none";
				digitalTimerSection.style.display = "none"
				visualTimerSection.style.display = "none";
				setTimerSection.style.display = 'none';
				dropdownMenu.style.display = 'none';
				analogTimerSection.append(abortButton);		
				analogTimerSection.prepend(dropdownButton);	
				
				
			}}

			function showPausBreath() {
				// Invertera värdet på variabeln
				// analogTimerVisible = !analogTimerVisible;
				 
				// Sätt display-egenskapen baserat på variabelns värde
				if (pauseBreath) {
					pauseBreath.style.display = "flex"
					timesUp.style.display = "none"
					analogTimerSection.style.display = "none";
					digitalTimerSection.style.display = "none"
					visualTimerSection.style.display = "none";
					setTimerSection.style.display = 'none';
					dropdownMenu.style.display = 'none';
					analogTimerSection.append(abortButton);		
					analogTimerSection.prepend(dropdownButton);	
					timerBreak.style.display = 'flex';
				}}

	
				function showDigitalTimerForPopUp() {
					// Invertera värdet på variabeln
					// digitalTimerVisible = !digitalTimerVisible;
					
					// Sätt display-egenskapen baserat på variabelns värde
					if (digitalTimerSection) {
						timesUp.style.display = "none"
						digitalTimerSection.style.display = "flex";
						analogTimerSection.style.display = "none";
						visualTimerSection.style.display = "none";
						setTimerSection.style.display = 'none';
						dropdownMenu.style.display = 'none';
						pauseBreath.style.display = 'none';
						digitalTimerSection.prepend(dropdownButton);	
						digitalTimerSection.append(abortButton);		
						timerBreak.style.display = "none"
			
			
				}
			}
			
	
export {timerMenu, toggleAnalogTimer, showDigitalTimer, showVisualTimer, showSetTimer, showTimesUp, showPausBreath, showDigitalTimerForPopUp, clickStartPage};