import { alphabeticalOrder, searchBar, filter, ageOrder, allCharacters } from "/./data.js";

const showOrderBtn = document.getElementById("showOrderBtn");
const orderItems = document.getElementById("orderItems");
const showFilterBtn = document.getElementById("showFilterBtn");
const filterItems = document.getElementById("filterItems");
const displayCharacters = document.getElementById("displayCharacters");
const radioButtonsOrderAlphabet = orderByForm.elements["orderByAlphabet"];
const radioButtonsOrderAge = orderByForm.elements["orderByAge"];
const radioButtonsFilterSpecie= filterByForm.elements["filterBySpecie"];
const searchCharacters = document.getElementById("searchBar");
const howManyCharacters = document.getElementById("howManyCharacters");


function createCharacters(character) {
  const card = document.createElement("article");
  card.classList.add("cardCharacters");

  const info = document.createElement("section");
  info.classList.add("infoCharacters");

  const figure = document.createElement("figure");
  figure.classList.add("images");
  const image = document.createElement("img");
  image.src = character.img;
  figure.appendChild(image);

  const name = document.createElement("h2");
  name.textContent = character.name;

  const gender = document.createElement("p");
  gender.textContent = character.gender;

  const age = document.createElement("p");
  age.textContent = "Age: " + character.age;

  const eyeColor = document.createElement("p");
  eyeColor.textContent = "Eye Color: " + character.eye_color;

  const hairColor = document.createElement("p");
  hairColor.textContent = "Hair Color: " + character.hair_color;

  const specie = document.createElement("p");
  specie.textContent = "Specie: " + character.specie;

  const film = document.createElement("p");
  film.textContent = "Film: " + character.film;
  film.id = "film";

  info.appendChild(name);
  info.appendChild(gender);
  info.appendChild(age);
  info.appendChild(eyeColor);
  info.appendChild(hairColor);
  info.appendChild(specie);
  info.appendChild(film);
  
  card.appendChild(figure);
  card.appendChild(info);

  return card;
}
function showInHtml(characters) {
  characters.forEach((character) => {
    const card = createCharacters(character);
    displayCharacters.appendChild(card);
  });
}
function showOrderedCharactersAlphabetical(event) {
  const order = event.target.value;
  if (radioButtonsOrderAlphabet) {
    const newOrder = alphabeticalOrder(allCharacters(), order, "characters");
    displayCharacters.innerHTML = "";
    showInHtml(newOrder);
  }
}
function showOrderedCharactersAge(event) {
  const order = event.target.value;
  if (radioButtonsOrderAge) {
    const newOrder = ageOrder(allCharacters(), order);
    displayCharacters.innerHTML = "";
    showInHtml(newOrder);
  }
}
function showFilteredCharactersSpecie(event) {
  const selectedSpecie = event.target.value;
  if (radioButtonsFilterSpecie) {
    const filteredCharacters = filter(allCharacters(), "specie", selectedSpecie);
    displayCharacters.innerHTML = "";
    showInHtml(filteredCharacters);
    howManyCharacters.style.display = "inline-block";
    howManyCharacters.innerHTML = `${filteredCharacters.length} of the specie ${selectedSpecie}`
  }
}
searchCharacters.addEventListener("input", (event) => {
  const searchedName = event.target.value.toLowerCase();
  const filteredName = searchBar(allCharacters(), searchedName, "characters");
  displayCharacters.innerHTML = "";
  showInHtml(filteredName);
});
for (const radioButtonOrder of radioButtonsOrderAlphabet) {
  radioButtonOrder.addEventListener(
    "change",
    showOrderedCharactersAlphabetical
  );
}
for (const radioButtonOrder of radioButtonsOrderAge) {
  radioButtonOrder.addEventListener("change", showOrderedCharactersAge);
}
for (const radioButtonOrder of radioButtonsFilterSpecie){
  radioButtonOrder.addEventListener("change", showFilteredCharactersSpecie);
}
showOrderBtn.addEventListener("click", () => {
  if (orderItems.style.display === "none") {
    orderItems.style.display = "block";
  } else {
    orderItems.style.display = "none";
  }
});
showFilterBtn.addEventListener("click", () => {
  if (filterItems.style.display === "none") {
    filterItems.style.display = "block";
  } else {
    filterItems.style.display = "none";
  }
});
document.addEventListener("load", showInHtml(allCharacters()));
