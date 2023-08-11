import data from "../data/ghibli/ghibli.js";


const locations = Object.values(data.films).map((item) => item.locations);
const allLocations = () =>{
    let listAll = []
    locations.forEach((location) => {
        location.forEach((location) => {
          listAll.push(location);
        });
      });
      return listAll;
}
console.log(allLocations())
const displayLocations = document.getElementById("displayLocations")
function createLocations(location) {
    const card = document.createElement("article");
    card.classList.add("cardCharacters");
  
    const figure = document.createElement("figure");
    figure.classList.add("images");
    const image = document.createElement("img");
    image.src = location.img;
    figure.appendChild(image);
    const name = document.createElement("h2");
    name.textContent = location.name;
    name.classList.add("cardItems");
    const climate = document.createElement("p");
    climate.textContent = "Climate: " + location.climate;
    climate.classList.add("cardItems");
    const terrain = document.createElement("p");
    terrain.textContent = "Terrain: " + location.terrain;
    terrain.classList.add("cardItems");
    const surfaceWater = document.createElement("p");
    surfaceWater.textContent = "Surface water: " + location.surface_water;
    surfaceWater.classList.add("cardItems");
  
    card.appendChild(name);
    card.appendChild(figure);
    card.appendChild(climate);
    card.appendChild(terrain);
    card.appendChild(surfaceWater);
  
    return card;
  }
  function showInHtml(locations) {
    locations.forEach((location) => {
      const card = createLocations(location);
      displayLocations.appendChild(card);
    });
}
document.addEventListener("load", showInHtml(allLocations()));

