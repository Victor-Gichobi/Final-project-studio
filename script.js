const movies = [
  {
    title: "Inception",
    year: "2010",
    rating: "8.8",
    image: "https://via.placeholder.com/300x450?text=Inception"
  },
  {
    title: "Interstellar",
    year: "2014",
    rating: "8.7",
    image: "https://via.placeholder.com/300x450?text=Interstellar"
  },
  {
    title: "The Dark Knight",
    year: "2008",
    rating: "9.0",
    image: "https://via.placeholder.com/300x450?text=Dark+Knight"
  }
];

const container = document.getElementById("movies");
const search = document.getElementById("search");

function displayMovies(list){
    container.innerHTML = "";

    list.forEach(movie=>{
        container.innerHTML += `
        <div class="card">
            <img src="${movie.image}">
            <div class="card-content">
                <h3>${movie.title}</h3>
                <p>⭐ ${movie.rating}</p>
                <p>${movie.year}</p>
            </div>
        </div>`;
    });
}

search.addEventListener("input", ()=>{
    const value = search.value.toLowerCase();

    const filtered = movies.filter(movie =>
        movie.title.toLowerCase().includes(value)
    );

    displayMovies(filtered);
});

displayMovies(movies);