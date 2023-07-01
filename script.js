// Global variable to store the currently displayed movie
let displayedMovie;

// Fetch movie data from the local server
fetch('http://localhost:3000/films')
  .then(response => response.json())
  .then(data => {
    const films = data;

      // Populate the movie list
      const filmsList = document.getElementById('films');
      films.forEach(film => {
        const li = document.createElement('li');
        li.classList.add('film', 'item');
        li.textContent = film.title;
        li.addEventListener('click', () => displayMovieDetails(film));
        filmsList.appendChild(li);
      });