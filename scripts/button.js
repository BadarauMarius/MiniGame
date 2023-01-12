const showHeroesButton = document.querySelector("#show-heroes");
const title = document.querySelector("#game-name");
const heroes = document.querySelector("#arena");
const startFightButton = document.querySelector("#start-fight");



function displayHeroes() {
    title.classList.add("d-none");
    heroes.classList.add("d-flex");
    
}

showHeroesButton.addEventListener("click", displayHeroes);

function hideHeroes() {
    title.classList.add("d-none");
    heroes.classList.add("d-none");
    
}

startFightButton.addEventListener("click", hideHeroes);
