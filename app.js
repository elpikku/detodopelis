// Ejemplo de cómo podrías cargar una lista de películas de manera dinámica.
const movies = [
    { title: "Película 1", poster: "https://via.placeholder.com/150" },
    { title: "Película 2", poster: "https://via.placeholder.com/150" },
    { title: "Película 3", poster: "https://via.placeholder.com/150" },
    { title: "Película 4", poster: "https://via.placeholder.com/150" },
];

function loadMovies() {
    const movieGrid = document.getElementById("movieGrid");
    movieGrid.innerHTML = ''; // Limpiar contenido previo

    movies.forEach(movie => {
        const movieCard = document.createElement("div");
        movieCard.classList.add("movie-card");

        movieCard.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title}">
            <h3>${movie.title}</h3>
        `;

        movieGrid.appendChild(movieCard);
    });
}

// Cargar películas al iniciar
loadMovies();
