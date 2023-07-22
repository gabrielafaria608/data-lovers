import { getAll } from "./data.js";

const root = document.getElementById("root");
getAll().then(data => {
    const films = Object.values(data.films).map((item)=> item);
    films.forEach(film =>{
        const card = createFilms(film);
        root.appendChild(card);
    })    
}).catch(error=>{
    console.error('error in:',error)
})

function createFilms(film){
    const card = document.createElement("article");
    card.classList.add("card");
    
    const figure = document.createElement("figure");
    figure.classList.add("images");
    const image = document.createElement("img");
    image.src = film.poster;
    figure.appendChild(image);
    const title = document.createElement("h3");
    title.textContent = film.title;
    const description = document.createElement("p");
    description.textContent = film.description;
    const date = document.createElement("p");
    date.textContent = "Release date: "+film.release_date;
    const director = document.createElement("p");
    director.textContent = "Director: "+film.director;
    const producer = document.createElement("p");
    producer.textContent = "Producer: "+film.producer;
    const score = document.createElement("p");
    score.textContent = "Ratings: "+film.rt_score;

    card.appendChild(figure);
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(date);
    card.appendChild(director);
    card.appendChild(producer);
    card.appendChild(score);

    return card;
}
