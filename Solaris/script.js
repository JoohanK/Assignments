//"Solsystemet solaris" är en header
//Dom-element
//Alla planeter, mitt main-element
const planets = document.querySelectorAll(".planet");
//solen, en aside som ligger i main
const sun = document.querySelector(".sun");
//Hela sidan när man tryckt in på en planet
const planetInfoOverlay = document.querySelector(".planet-info-overlay");
//Faktarutan när man tryckt in på en planet
const factBox = document.querySelector(".planet-info");
//Stängknappen
const closeInfoButton = document.getElementById("close-info");

//Jag kör min fetch-funktion och hämtar informationen som ligger på APIn 
//I detta fall spelar det ingen roll om den ligger före eller efter själva funktionen är deklarerad.
fetchData();


//skapar min fetch function och hämtar api
function fetchData() {
    fetch('https://majazocom.github.io/Data/solaris.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Något gick fel');
        }
        //returnerar data från api till json-format
        return response.json();
      })

      //vad jag sen vill göra med min data
      .then((data) => {

        //console.log bara för att se api data i consolen
        console.log(data);
        
        // kopplar rätt data till rätt planet. datan går från vänster till höger på mina planeter men jag startar att hämta data från den andra indexplatsen i apit för att den första innehåller fakta om solen som jag exkluderar.
        planets.forEach((planet, index) => {
          const planetData = data[index+1];//Här är +1 för att planeterna skall stämma
          
          //När man klickar en planet visas informationen från Apit i min faktaruta och jag ändrar utseendet på hemsidan för att få en "natt-känsla"
          planet.addEventListener('click', () => {
            sun.style.backgroundColor = "lightblue"; 
            sun.style.boxShadow = "20px 0px 20px rgba(107, 180, 200, 0.5";
            planetInfoOverlay.style.display = "flex"; //planetInfoOverlay går från display none till flex och syns nu.

       
            //Anväder innerhtml på min factBox (planet-info) för att skapa olika idn på all olik data, detta gör jag för att jag sen ska kunna style min data i css. 
            //Skapar också "containers" för min data, fyra totalt name-info, description, random-info och moons.
            factBox.innerHTML = `
            <div id="name-info">
            <h2 id="planet-name"> ${planetData.name}</h2>
            <div id="latin-name">${planetData.latinName}</div>
            </div>
          
            <div id="description">${planetData.desc}</div>

            <div id="random-info">
            <div id="distance"><h3>Avstånd från solen i km</h3> ${planetData.distance}</div>
            <div id="orbital-period"><h3>Omloppstid i dagar</h3> ${planetData.orbitalPeriod}</div>
           
            <div id="temp-day"><h3>Max temp</h3>${planetData.temp.day} °C</div>
            <div id="temp-night"><h3>Min temp</h3> ${planetData.temp.night} °C</div>
            </div>

            <div id="moons"><h2>Månar</h2> ${planetData.moons.join(', ')}</div>`
        
            
            //Alla planeter förutom den jag tryckt på skall försvinna (display none). 
            //Den planeten som jag tryckt på är den enda som blir kvar och syns i faktarutan fast lite bakom på ett snyggt sätt. 
            planets.forEach(otherPlanet => {
                if (otherPlanet !== planet) {
                    otherPlanet.style.display = 'none';
                }
            });

            //Testade först att skapa stjärnhimmel i css med after/before. 
            //Tyckte inte det kändes nice så jag testade mig fram med en for-loop som skapar stjärnor(divar)
            //Valde denna metoden för att den är intressant och kan vara användbar i framtiden
             // Skapar 100 stjärnor genom att loopa från 1-100, siffrorna blir divar med en och samma class "star" och blir barn till planetInfoOverlay
             for (let i = 0; i < 100; i++) {
              const star = document.createElement("div");
              star.className = "star";
              planetInfoOverlay.appendChild(star);
              }
              
              //Har samlat mina DOM längst upp i scripten men denna måste ligga här i eftersom "star" skapas i denna funktion.
              const allStars = document.querySelectorAll(".star");
  
              // Placera stjärnorna slumpmässigt inom planetInfoOverlay
              // Nu slumpar jag ut 100 olika platser på skärmen där min stjärnor kan lägga sig
              allStars.forEach(star => {
              // 100 står för 100% av bredden/höjden
              const x = Math.random() * 100; // Slumpmässig x-koordinat (0-100%) horisontellt
              const y = Math.random() * 100; // Slumpmässig y-koordinat (0-100%) lodrätt
              
              // Använder nu .style för att kunna ge css direkt här i scripten
              // left och top är för den horisontella samt lodräta placeringen av mina stjärnor. Vi ger också deras slumpade kordinater "%" för att variablarna skall få ett förhållande till sin förälders visningsarea (planetInfoOverlay)
              star.style.left = x + "%";
              star.style.top = y + "%";
             });


          });
        });
      })

      //Har en catch för att fånga eventuella fel vid hämtning av API
      .catch((error) => {
        console.error('Fel: ' + error);
      });
  }
  

 


  //När man trycker på stäng knappen efter att ha läst faktarutan händer dessa saker
  //Denna händelselyssnare hade kunnat ligga innanför min fetchfunktion men tyckte att den då blev för stor och innehöll väldigt mycket info så därför la jag denna utanför funktionen
  closeInfoButton.addEventListener("click", () => {
    //Solen skall få tillbaka sin orginalfärg på sitt glow
    sun.style.boxShadow = "20px 0px 20px rgba(255, 111, 0, 0.5)";
    //solen skall få tillbaka sin orginalfärg
    sun.style.backgroundColor = "rgb(255, 204, 0)"; 
    //min faktaruta skall försvinnanär jag klicka stäng
    planetInfoOverlay.style.display = "none";
    //Alla planeter skall komma tillbaka när jag klickar stäng på faktarutan
    planets.forEach(planet => {
        planet.style.display = 'block';
    }); 
});














  


