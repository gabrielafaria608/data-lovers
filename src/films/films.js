import { getFilms, alphabeticalOrder, releaseOrder, scoreOrder } from "/./data.js";


const displayFilms = document.getElementById("displayFilms");
const orderByForm = document.getElementById("orderByForm");
const getData = async () => {
    const data = await getFilms();
    document.addEventListener("load", showInHtml(data));

    {
        function showOrderedFilmsAlphabet(event){
            const order = event.target.value;
            if(orderByForm.elements["orderByAlphabet"]){
                const newOrder  = alphabeticalOrder(data, order);
                displayFilms.innerHTML = "";
                showInHtml(newOrder);
            }
        }
        const radioButtonsOrderAlphabet = orderByForm.elements["orderByAlphabet"];
        for (const radioButtonOrder of radioButtonsOrderAlphabet){
            radioButtonOrder.addEventListener("change", showOrderedFilmsAlphabet);
        }
        function showOrderedFilmsRelease(event){
            const order = event.target.value;
            if(orderByForm.elements["orderByRelease"]){
                const newOrder = releaseOrder(data, order);
                displayFilms.innerHTML = "";
                showInHtml(newOrder);
            }
        }
        const radioButtonsOrderRelease = orderByForm.elements["orderByRelease"];
        for (const radioButtonOrder of radioButtonsOrderRelease){
            radioButtonOrder.addEventListener("change", showOrderedFilmsRelease);
        }
        function showOrderedFilmsScore(){
            if(orderByForm.elements["orderByScore"]){
                const newOrder = scoreOrder(data);
                displayFilms.innerHTML = "";
                showInHtml(newOrder);
            }
        }
        const radioButtonOrderScore = orderByForm.elements["orderByScore"];
        radioButtonOrderScore.addEventListener("change", showOrderedFilmsScore);
    }

};


{
const showOrderBtn = document.getElementById("showOrderBtn");
const orderItems = document.getElementById("orderItems");
const showFilterBtn = document.getElementById("showFilterBtn")
const filterItems = document.getElementById("filterItems");
showOrderBtn.addEventListener("mousedown", () => {
    if(orderItems.style.display === "none"){
        orderItems.style.display = "block";
    }
    else{
        orderItems.style.display = "none";
    }
});
showFilterBtn.addEventListener("mousedown", () => {
    if(filterItems.style.display === "none"){
        filterItems.style.display = "block";
    }
    else{
        filterItems.style.display = "none";
    }
});
}
function createFilms(film) {
  const card = document.createElement("article");
  card.classList.add("card");

  const figure = document.createElement("figure");
  figure.classList.add("images");
  const image = document.createElement("img");
  image.src = film.poster;
  figure.appendChild(image);
  const title = document.createElement("h2");
  title.textContent = film.title;
  title.classList.add("cardItems");
  const description = document.createElement("p");
  description.textContent = film.description;
  description.classList.add("cardItems");
  const date = document.createElement("p");
  date.textContent = "Release date: " + film.release_date;
  date.classList.add("cardItems");
  const director = document.createElement("p");
  director.textContent = "Director: " + film.director;
  director.classList.add("cardItems");
  const producer = document.createElement("p");
  producer.textContent = "Producer: " + film.producer;
  producer.classList.add("cardItems");
  const score = document.createElement("p");
  score.textContent = "Ratings: " + film.rt_score;
  score.classList.add("cardItems");

  card.appendChild(title);
  card.appendChild(figure);
  card.appendChild(description);
  card.appendChild(date);
  card.appendChild(director);
  card.appendChild(producer);
  card.appendChild(score);

  return card;
}
function showInHtml(films){
    films.forEach(film =>{
      const card = createFilms(film);
      displayFilms.appendChild(card);
    })
}
getData();


