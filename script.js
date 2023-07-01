// Global variable to store the currently displayed movie
let displayedMovie;

// Fetch movie data from the local server
fetch('http://localhost:3000/films')
  .then(response => response.json())
  .then(data => {
    const films = data;