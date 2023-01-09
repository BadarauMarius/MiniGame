const showHeroesButton = document.querySelector("#button");
const title = document.querySelector("#game-name");
const heroes = document.querySelector("#arena");



function displayHeroes() {
    title.classList.add("d-none");
    heroes.classList.add("d-flex");
    console.log('test');
}

showHeroesButton.addEventListener("click", displayHeroes);
