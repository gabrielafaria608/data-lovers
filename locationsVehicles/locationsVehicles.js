import { alphabeticalOrder, searchBar, filter } from "/./data.js";

import data from "../data/ghibli/ghibli.js";

const searchLocationsVehicles = document.getElementById("searchBar");
const displayLocationsAndVehicles = document.getElementById(
  "displayLocationsAndVehicles"
);
const showOrderBtn = document.getElementById("showOrderBtn");
const orderItems = document.getElementById("orderItems");
const showFilterBtn = document.getElementById("showFilterBtn");
const filterItems = document.getElementById("filterItems");
const orderByForm = document.getElementById("orderByForm");
const filterByForm = document.getElementById("filterByForm");
const radioButtonsOrderAlphabet = orderByForm.elements["orderByAlphabet"];
const radioButtonsFilterType = filterByForm.elements["filterByType"];

const locations = Object.values(data.films).map((item) => {
  return {
    locations: item.locations,
    type: "location",
  };
});
const vehicles = Object.values(data.films).map((item) => {
  return {
    vehicles: item.vehicles,
    type: "vehicle",
  };
});
const allLocationsVehicles = () => {
  const listAll = [];
  vehicles.forEach((item) => {
    item.vehicles.forEach((vehicle) => {
      vehicle.type = item.type;
      listAll.push(vehicle);
    });
  });
  locations.forEach((item) => {
    item.locations.forEach((location) => {
      location.type = item.type;
      listAll.push(location);
    });
  });
  return listAll;
};
function createElement(element) {
  const card = document.createElement("article");
  card.classList.add("cardLocationsAndVehicles");

  const info = document.createElement("section");
  info.classList.add("infoLocationsAndVehicles");

  const figure = document.createElement("figure");
  figure.classList.add("images");
  const image = document.createElement("img");
  image.src = element.img;
  figure.appendChild(image);

  const name = document.createElement("h2");
  name.textContent = element.name;
  name.classList.add("cardItems");

  info.appendChild(name);

  card.appendChild(figure);
  card.appendChild(info);
  return card;
}
function showInHtml(elements) {
  elements.forEach((element) => {
    const card = createElement(element);
    displayLocationsAndVehicles.appendChild(card);
  });
}
searchLocationsVehicles.addEventListener("input", (event) => {
  const searchedName = event.target.value.toLowerCase();
  const filteredName = searchBar(
    allLocationsVehicles(),
    searchedName,
    "others"
  );
  displayLocationsAndVehicles.innerHTML = "";
  showInHtml(filteredName);
  console.log("here");
});
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
function showOrderedLocationsVehiclesAlphabetical(event) {
  const order = event.target.value;
  if (radioButtonsOrderAlphabet) {
    const newOrder = alphabeticalOrder(allLocationsVehicles(), order, "other");
    displayLocationsAndVehicles.innerHTML = "";
    showInHtml(newOrder);
  }
}
function showFilteredLocationsVehicles(event) {
  const selected = event.target.value;
  if (radioButtonsFilterType) {
    const filtered = filter(
      allLocationsVehicles(),
      "type",
      selected
    );
    displayLocationsAndVehicles.innerHTML = "";
    showInHtml(filtered);
  }
}
for (const radioButtonOrder of radioButtonsFilterType) {
  radioButtonOrder.addEventListener("change", showFilteredLocationsVehicles);
}
for (const radioButtonOrder of radioButtonsOrderAlphabet) {
  radioButtonOrder.addEventListener(
    "change",
    showOrderedLocationsVehiclesAlphabetical
  );
}
document.addEventListener("load", showInHtml(allLocationsVehicles()));
