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

      // Display the details of the first movie
    if (films.length > 0) {
        displayMovieDetails(films[0]);
      }
    });

    // Function to display movie details
function displayMovieDetails(movie) {
    // Update the movie details on the right side
    const movieTitle = document.getElementById('movie-title');
    const movieRuntime = document.getElementById('movie-runtime');
    const movieShowtime = document.getElementById('movie-showtime');
    const movieTickets = document.getElementById('movie-tickets');
    const buyTicketBtn = document.getElementById('buy-ticket-btn');
    const moviePoster = document.getElementById('movie-poster');
  
    movieTitle.textContent = movie.title;
    movieRuntime.textContent = 'Runtime: ' + movie.runtime + ' minutes';
    movieShowtime.textContent = 'Showtime: ' + movie.showtime;
    movieTickets.textContent = 'Available Tickets: ' + (movie.capacity - movie.tickets_sold);
    moviePoster.src = movie.poster;
  
    buyTicketBtn.disabled = (movie.capacity - movie.tickets_sold) === 0;

     // Set the displayed movie variable
  displayedMovie = movie;
}

// Function to handle the buy ticket button click event
function handleBuyTicket() {
    const movieTickets = document.getElementById('movie-tickets');
    const movie = displayedMovie;

    if (movie.capacity - movie.tickets_sold > 0) {
        // Reduce the available tickets count
        movie.tickets_sold += 1;