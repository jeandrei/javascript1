/**
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
      console.log('Movie Details');
      break
    case '/tv-details.html' :
      console.log('TV Details');
      break
    case '/search.html' :
      console.log('Search');
      break
  }

  hightlightActiveLink()  
}


document.addEventListener('DOMContentLoaded', init)
