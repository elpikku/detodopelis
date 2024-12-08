const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public')); // Sirve los archivos estáticos

// Endpoint de ejemplo para obtener las películas
app.get('/movies', (req, res) => {
    const movies = [
        { title: "Película 1", poster: "https://via.placeholder.com/150" },
        { title: "Película 2", poster: "https://via.placeholder.com/150" },
        { title: "Película 3", poster: "https://via.placeholder.com/150" },
        { title: "Película 4", poster: "https://via.placeholder.com/150" },
    ];
    res.json(movies);
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
