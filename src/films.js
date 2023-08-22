import data from "./data/ghibli/ghibli.js";
import {
  alphabeticalOrder,
  releaseOrder,
  scoreOrder,
  searchBar,
  filter,
} from "./data.js";

const allFilms = Object.values(data.films).map((item) => item);
const displayFilms = document.getElementById("displayFilms");
const orderByForm = document.getElementById("orderByForm");
const searchFilms = document.getElementById("searchBar");
const showOrderBtn = document.getElementById("showOrderBtn");
const orderItems = document.getElementById("orderItems");
const showFilterBtn = document.getElementById("showFilterBtn");
const filterItems = document.getElementById("filterItems");
const radioButtonOrderScore = orderByForm.elements["orderByScore"];
const radioButtonsOrderRelease = orderByForm.elements["orderByRelease"];
const radioButtonsOrderAlphabet = orderByForm.elements["orderByAlphabet"];
const filterByForm = document.getElementById("filterByForm");
const radioButtonsFilterDirector = filterByForm.elements["filterByDirectors"];
const howManyFilms = document.getElementById("howManyFilms");

function createFilms(film) {
  const card = document.createElement("article");
  card.classList.add("cardFilms");

  const info = document.createElement("section");
  info.classList.add("infoFilms");

  const figure = document.createElement("figure");
  figure.classList.add("images");
  const image = document.createElement("img");
  image.src = film.poster;
  figure.appendChild(image);

  const title = document.createElement("h2");
  title.textContent = film.title;
  title.id = "title"

  const description = document.createElement("p");
  description.textContent = film.description;

  const date = document.createElement("p");
  date.textContent = "Release date: " + film.release_date;

  const director = document.createElement("p");
  director.textContent = "Director: " + film.director;

  const producer = document.createElement("p");
  producer.textContent = "Producer: " + film.producer;

  const score = document.createElement("p");
  score.textContent = "Ratings: " + film.rt_score;

  info.appendChild(title);
  info.appendChild(description);
  info.appendChild(date);
  info.appendChild(director);
  info.appendChild(producer);
  info.appendChild(score);
  card.appendChild(figure);
  card.appendChild(info);

  return card;
}
function showInHtml(films) {
  films.forEach((film) => {
    const card = createFilms(film);
    displayFilms.appendChild(card);
  });
}
function showOrderedFilmsAlphabetical(event) {
  const order = event.target.value;
  if (radioButtonsOrderAlphabet) {
    const newOrder = alphabeticalOrder(allFilms, order, "films");
    displayFilms.innerHTML = "";
    showInHtml(newOrder);
  }
}
function showOrderedFilmsRelease(event) {
  const order = event.target.value;
  if (radioButtonsOrderRelease) {
    const newOrder = releaseOrder(allFilms, order);
    displayFilms.innerHTML = "";
    showInHtml(newOrder);
  }
}
function showOrderedFilmsScore() {
  if (radioButtonOrderScore) {
    const newOrder = scoreOrder(allFilms);
    displayFilms.innerHTML = "";
    showInHtml(newOrder);
  }
}
function showFilteredFilmsDirector(event) {
  const selectedDirector = event.target.value;
  if (radioButtonsFilterDirector) {
    const filteredFilms = filter(allFilms, "director", selectedDirector);
    displayFilms.innerHTML = "";
    showInHtml(filteredFilms);
    howManyFilms.style.display = "inline-block";
    howManyFilms.innerHTML = `${selectedDirector} has directed ${filteredFilms.length} films`;
  }
}
document.addEventListener("load", showInHtml(allFilms));
searchFilms.addEventListener("input", (event) => {
  const searchedName = event.target.value.toLowerCase();
  const filteredName = searchBar(allFilms, searchedName, "films");
  displayFilms.innerHTML = "";
  showInHtml(filteredName);
});
radioButtonOrderScore.addEventListener("change", showOrderedFilmsScore);
for (const radioButtonOrder of radioButtonsOrderRelease) {
  radioButtonOrder.addEventListener("change", showOrderedFilmsRelease);
}
for (const radioButtonOrder of radioButtonsOrderAlphabet) {
  radioButtonOrder.addEventListener("change", showOrderedFilmsAlphabetical);
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
for (const radioButtonFilter of radioButtonsFilterDirector) {
  radioButtonFilter.addEventListener("change", showFilteredFilmsDirector);
}
