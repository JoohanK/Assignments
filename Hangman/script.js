
// Vår lista med random ord som slupmässigt väljs ut
const words = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew"];

// Väljer ett random ord från lista
let randomWord = words[Math.floor(Math.random() * words.length)];

// variablar i olika former
let correctGuesses = Array(randomWord.length).fill(false);
let wrongGuesses = [];
const correctGuessedLetters = []
let wrongGuessCount = 0; // namnförslag: wrongGuessCount
let timeLeft = 60; // 1 minut i sekunder
let timerInterval;


// DOM elements
const wordDisplay = document.getElementById("word-display");
const wrongGuessesDisplay = document.getElementById("wrong-guesses");
const hangmanImage = document.querySelector(".hangman svg");
const resultText = document.getElementById("result-text");
const popUpBox = document.getElementById("correct-word");
const playAgainButton = document.getElementById("play-again-button");
const guessInput = document.getElementById("guess-input");
let hideContainer = document.querySelector(".container")
let resultScreen = document.querySelector(".result")
let timerButton = document.querySelector("#startTimer")

// Eventlisteners
playAgainButton.addEventListener("click",() => 
{window.location.reload()})

guessInput.addEventListener("keydown",(event) =>
{if(event.key === "Enter"){makeGuess()}})

// Du kan även trycka enter för att köra playagian
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter" && resultScreen.style.display === "block") {
        // Kontrollera om popup-rutan är uppe
        if (document.activeElement !== guessInput) {
            window.location.reload();
        }
    }
});

timerButton.addEventListener("click", timer)

updateWordDisplay(); // startar spelet
// Funktion för att visa
function updateWordDisplay()
{
    wordDisplay.innerHTML = "";
    for (let i = 0; i < randomWord.length; i++) {
        if (correctGuesses[i]) {
            wordDisplay.innerHTML += `${randomWord[i]}`;
        } else {
            wordDisplay.innerHTML += " _ ";
        }
    
    }
}

// Funktion för hantering av gissningar.
function makeGuess()
{
   const guess = guessInput.value.toLowerCase();
    if (!isValidGuess(guess))
    {
        return // ej giltlig gissning - avbryt gissning.
    }
    if (randomWord.includes(guess)) {
        
        for (let i = 0; i < randomWord.length; i++) {
           
            if (randomWord[i] === guess) 
            {
                if (!correctGuesses[i])
                {
                    correctGuesses[i] = true;
                    updateWordDisplay();
                    correctGuessedLetters.push(guess)
                    console.log(`rätt gissningar`, correctGuessedLetters) 
                }
            

            }
        }
    } 
    else 
    {
        wrongGuesses.push(guess);
        console.log(`fel gissningar`, wrongGuesses)
        wrongGuessCount++;
        wrongGuessesDisplay.innerHTML = wrongGuesses.join(", ");
        updateHangman();
        
    }
    
    guessInput.value = "";

    if (wrongGuessCount >= 6) {
        endGame(false);
    } else if (!correctGuesses.includes(false)) {
        endGame(true);
    }
}

function isValidGuess(guess)
{
    guessInput.value = "";

    if(!/[a-z]/.test(guess))
    {
        alert("Please enter a single letter between a and z.")
        return false // gissningen ej giltlig returnera false och ge en alert
    }
    if(correctGuessedLetters.includes(guess) || wrongGuesses.includes(guess))
    {
        alert("You've already guessed that letter.")
        return false // gissningen ej giltlig returnera false och ge en alert
    }
    return true
}

// Funktion för att uppdatera bilden när användaren gissar fel.
function updateHangman() {
    switch (wrongGuessCount) {
        case 1:
            document.getElementById("ground").style.display = "block";
            break;
        case 2:
            document.getElementById("scaffold").style.display = "block";
            break;
        case 3:
            document.getElementById("head").style.display = "block";
            break;
        case 4:
            document.getElementById("body").style.display = "block";
            break;
        case 5:
            document.getElementById("arms").style.display = "block";
            break;
        case 6:
            document.getElementById("legs").style.display = "block";
            
            break;
      
    }
}

// Funktion för att avsluta spelet och visa resultatet
function endGame(isWinner) {

    const winSound = document.getElementById("winSound");
    const loseSound = document.getElementById("loseSound");
    const winSound2 = document.getElementById("winSound2");
    const loseSound2 = document.getElementById("loseSound2");
   
    if (isWinner) {
        resultText.innerText = "You won!";
        hideContainer.style.display = "none";
        resultScreen.style.display = "block";
      
        winSound.play();
        winSound2.play();
        winImg.classList.remove("hiddenImgUntillWin")
        popUpBox.innerHTML = `Congratulations you are the best!
        The word was <span> ${randomWord}! </span>`;
        
    } else {
        resultText.innerText = "You lost!";
        hideContainer.style.display = "none";
        popUpBox.innerHTML = `The correct word was: <span> ${randomWord} </span> `;
        resultScreen.style.display = "block";
        loseSound.play();
        loseSound2.play();
        loseImg.classList.remove("hiddenImgUntillLose");
       
    }
    clearInterval(timerInterval) // Denna funktion stoppar timern
}

//Funktion för att starta timer
function timer() {
     if (timerInterval) {
        clearInterval(timerInterval); // Ser till att bara en timer startar
     }
   
        timerInterval = setInterval(function() 
        {
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft  %60;
            const timeString = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            
            // Uppdatera visningen av tiden
             document.getElementById("timer").textContent = timeString;

            // Minska tiden med 1 sekund
            timeLeft--;
         if(timeLeft < 0)
        {
            endGame()

        }
        }, 1000); // Uppdatera varje sekund

       
}










