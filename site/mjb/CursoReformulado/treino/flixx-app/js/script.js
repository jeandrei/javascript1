/**
 * OBS.: NO VS CODE ABRA SÓ A PASTA DO PROJETO PARA FUNCIONAR NO LIVE SERVER
 * API: https://www.themoviedb.org
 * 
 */

const global = {
  //currentPage hold the page like /, /index.html, /shows.html
  currentPage: window.location.pathname
}



// display 20 most popular movies
async function displayPopularMovies(){
  //as it returns a object with results we can destruct results so that we get the array with results instead of the object
  const { results } = await fetchAPIData('movie/popular')

  results.forEach((movie) => {
    const div = document.createElement('div')
    div.classList.add('card')
    div.innerHTML = `   
    <a href="movie-details.html?id=${movie.id}">
      ${
        movie.poster_path
        ? `<img
        src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
        class="card-img-top"
        alt="${movie.title}"
        />`
        :
        `<img
        src="images/no-image.jpg"
        class="card-img-top"
        alt="${movie.title}"
        />
        `
      }
    </a>
    <div class="card-body">
      <h5 class="card-title">${movie.title}</h5>
      <p class="card-text">
        <small class="text-muted">Release: ${movie.release_date}</small>
      </p>
    </div>`
    document.querySelector('#popular-movies').appendChild(div)
  })  
  
}

// display 20 most popular tv shows
async function displayPopularShows(){
  //as it returns a object with results we can destruct results so that we get the array with results instead of the object
  const { results } = await fetchAPIData('tv/popular')

  results.forEach((show) => {
    const div = document.createElement('div')
    div.classList.add('card')
    div.innerHTML = `   
    <a href="tv-details.html?id=${show.id}">
      ${
        show.poster_path
        ? `<img
        src="https://image.tmdb.org/t/p/w500${show.poster_path}"
        class="card-img-top"
        alt="${show.name}"
        />`
        :
        `<img
        src="images/no-image.jpg"
        class="card-img-top"
        alt="${show.name}"
        />
        `
      }
    </a>
    <div class="card-body">
      <h5 class="card-title">${show.name}</h5>
      <p class="card-text">
        <small class="text-muted">Air Date: ${show.first_air_date}</small>
      </p>
    </div>`
    document.querySelector('#popular-shows').appendChild(div)
  })  
  
}

// Display Movie Details
async function displayMovieDetails(){
  //return the search passed through ? like ?id=12345
  const movieId = window.location.search.split('=')[1];
  const movie = await fetchAPIData(`movie/${movieId}`)  

  // Overlay for background image
  displayBackgroundImage('movie', movie.backdrop_path)

  const div = document.createElement('div')
  div.innerHTML = `
  <div class="details-top">
    <div>
      ${
        movie.poster_path
        ? `<img
        src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
        class="card-img-top"
        alt="${movie.title}"
        />`
        :
        `<img
        src="images/no-image.jpg"
        class="card-img-top"
        alt="${movie.title}"
        />
        `
      }
    </div>
    <div>
      <h2>${movie.title}</h2>
      <p>
        <i class="fas fa-star text-primary"></i>
        ${movie.vote_average.toFixed(1)} / 10
      </p>
      <p class="text-muted">Release Date: ${movie.release_date}</p>
      <p>
       ${movie.overview}
      </p>
      <h5>Genres</h5>
      <ul class="list-group">
        ${movie.genres.map((genre) => `<li>${genre.name}</li>`).join('')}
      </ul>
      <a href="${movie.homepage}" target="_blank" class="btn">Visit Movie Homepage</a>
    </div>
  </div>
  <div class="details-bottom">
    <h2>Movie Info</h2>
    <ul>
      <li><span class="text-secondary">Budget:</span> $${addCommasToNumber(movie.budget)}</li>
      <li><span class="text-secondary">Revenue:</span> $${addCommasToNumber(movie.revenue)}</li>
      <li><span class="text-secondary">Runtime:</span> ${movie.runtime} minutes</li>
      <li><span class="text-secondary">Status:</span> ${movie.status}</li>
    </ul>
    <h4>Production Companies</h4>
    <div class="list-group">
      ${movie.production_companies.map((company) => `<span>${company.name}</span>`).join('')}
    </div>
  </div>
  `
  document.querySelector('#movie-details').appendChild(div)
}

// Display Backdrop On Details Pages
function displayBackgroundImage(type, backgroundPath) {
  const overlayDiv = document.createElement('div');
  overlayDiv.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${backgroundPath})`;
  overlayDiv.style.backgroundSize = 'cover';
  overlayDiv.style.backgroundPosition = 'center';
  overlayDiv.style.backgroundRepeat = 'no-repeat';
  overlayDiv.style.height = '100vh';
  overlayDiv.style.width = '100vw';
  overlayDiv.style.position = 'absolute';
  overlayDiv.style.top = '0';
  overlayDiv.style.left = '0';
  overlayDiv.style.zIndex = '-1';
  overlayDiv.style.opacity = '0.1';

  if (type === 'movie') {
    document.querySelector('#movie-details').appendChild(overlayDiv);
  } else {
    document.querySelector('#show-details').appendChild(overlayDiv);
  }
}

// Display Show Details
async function displayShowDetails(){
  //return the search passed through ? like ?id=12345
  const showId = window.location.search.split('=')[1];
  const show = await fetchAPIData(`tv/${showId}`) 

  // Overlay for background image
  displayBackgroundImage('tv', show.backdrop_path)

  const div = document.createElement('div')
  div.innerHTML = `
  <div class="details-top">
    <div>
      ${
        show.poster_path
        ? `<img
        src="https://image.tmdb.org/t/p/w500${show.poster_path}"
        class="card-img-top"
        alt="${show.name}"
        />`
        :
        `<img
        src="images/no-image.jpg"
        class="card-img-top"
        alt="${show.name}"
        />
        `
      }
    </div>
    <div>
      <h2>${show.name}</h2>
      <p>
        <i class="fas fa-star text-primary"></i>
        ${show.vote_average.toFixed(1)} / 10
      </p>
      <p class="text-muted">Last Air Date: ${show.last_air_date}</p>
      <p>
       ${show.overview}
      </p>
      <h5>Genres</h5>
      <ul class="list-group">
        ${show.genres.map((genre) => `<li>${genre.name}</li>`).join('')}
      </ul>
      <a href="${show.homepage}" target="_blank" class="btn">Visit Movie Homepage</a>
    </div>
  </div>
  <div class="details-bottom">
    <h2>Show Info</h2>
    <ul>
      <li><span class="text-secondary">Number of Episodes:</span> ${show.number_of_episodes}</li>
      <li><span class="text-secondary">Last Episode to Air:</span> ${show.last_episode_to_air.name}</li>      
      <li><span class="text-secondary">Status:</span> ${show.status}</li>
    </ul>
    <h4>Production Companies</h4>
    <div class="list-group">
      ${show.production_companies.map((company) => `<span>${company.name}</span>`).join('')}
    </div>
  </div>
  `
  document.querySelector('#show-details').appendChild(div)
}

// Display Backdrop On Details Pages
function displayBackgroundImage(type, backgroundPath) {
  const overlayDiv = document.createElement('div');
  overlayDiv.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${backgroundPath})`;
  overlayDiv.style.backgroundSize = 'cover';
  overlayDiv.style.backgroundPosition = 'center';
  overlayDiv.style.backgroundRepeat = 'no-repeat';
  overlayDiv.style.height = '100vh';
  overlayDiv.style.width = '100vw';
  overlayDiv.style.position = 'absolute';
  overlayDiv.style.top = '0';
  overlayDiv.style.left = '0';
  overlayDiv.style.zIndex = '-1';
  overlayDiv.style.opacity = '0.1';

  if (type === 'movie') {
    document.querySelector('#movie-details').appendChild(overlayDiv);
  } else {
    document.querySelector('#show-details').appendChild(overlayDiv);
  }
}

// Fetch data from TMDB API
async function fetchAPIData(endpoint){
  //you should store your key and make request from a server
  const API_KEY = '8447df8edaa7afafb1b029868613779e'
  // 3 is the version of the api
  const API_URL = 'https://api.themoviedb.org/3/'
  showSpinner()
  const response = await fetch(`${API_URL}${endpoint}?api_key=${API_KEY}&language=en-US`)
  const data = await response.json()
  hideSpinner()
  return data
}

// in every paga we have a class spinner and with css if we add the class of show it will display
function showSpinner(){
  document.querySelector('.spinner').classList.add('show')
}

function hideSpinner(){
  document.querySelector('.spinner').classList.remove('show')
}

// Hightlight active link
function hightlightActiveLink(){
  //get all the links with the class nav-link
  const links = document.querySelectorAll('.nav-link')
  links.forEach((link) => {    
    //link.getAttribute('href') returns like /shows.html
    if(link.getAttribute('href') === global.currentPage) {      
      link.classList.add('active')
    }
  })
}

// Puts comma at every three zeros
function addCommasToNumber(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// Init app
function init(){
  switch (global.currentPage){
    case '/' :
    case '/index.html' :
      displayPopularMovies()
      console.log('Home')
      break
    case '/shows.html' :
      displayPopularShows()
      console.log('shows')
      break
    case '/movie-details.html' :
      displayMovieDetails()
      console.log('Movie Details');
      break
    case '/tv-details.html' :
      displayShowDetails()
      console.log('TV Details');
      break
    case '/search.html' :
      console.log('Search');
      break
  }

  hightlightActiveLink()  
}


document.addEventListener('DOMContentLoaded', init)
