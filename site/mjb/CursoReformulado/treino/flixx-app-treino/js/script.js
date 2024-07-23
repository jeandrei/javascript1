/**
 * API: https://www.themoviedb.org
 * 
 * Create a const objct global with
 * currentPage with window.location.pathname that will return like /, /index.html, /shows.html
 * a sub object search with term, type, page:1, totalPages:1 totalResults: 0
 * a sub object api with apiKey: '8447df8edaa7afafb1b029868613779e' apiUrl: 'https://api.themoviedb.org/3/'
 * 
 * Now let's create the router
 * create a function init 
 * Inside the function create a switch case global.currentPage
 * case /
 * case /index.html
 * Home
 * case /shows.html
 * shows
 * case /movie-details.html
 * Movie Detail
 * case /tv-details.html
 * Tv details
 * case /search.html
 * search
 * then at the end of file create an eventlistener DOMContentLoaded and call init
 * 
 * now create a function hightlightActiveLink() so that wen we click in one link it will apply another style
 * create a const links and get all the links with the class nav-link
 * now for eatch link check if link.getAttribute('ref') that returns the end link like /shows.html is
 * iqual to the global.currentPage if so it means that the link is the current page showing for user
 * and so we can apply a style to this link 
 * add the class active to the link
 * call the function hightlightActiveLink() at the end of init
 * 
 * First let's create the function to show and hide spinner
 * Create a function showSpinner()
 * inside the function just queryselect the id spinner and add the class show
 * then create another function hideSpinner and queryslect the id spinner and remove the class show
 * 
 * Now let's create a function to fetch the data
 * create a async function fetchAPIData(endpoint)
 * inside create a const API_KEY with global.api.apiKey
 * then create a const API_URL  with global.api.apiUrl
 * showspinner
 * create a const response await fetch API_URL endpoint ?api_key= API_KEY &language=en-US
 * obs.: endpoint is gonna be like movie/now_playing
 * create a const data await response.json
 * hidespinner
 * return data
 * 
 * Now let`s create a function to show the 20 most popular movies and call it at home
 * create a async function displayPopularMovies()
 * create a const results and fetchAPIData with endpoint movie/popular use destruct to get value results
 * then foreach results and for each movie create a const div
 * add the class card to the div
 * then add the code from the div card in the inex.html to the new div innerhtml
 * replace the fake values to the movie.value from foreach
 * append the div to #popular-movies
 * call the displayPopularMovies() in the switch home in the router
 * href must be like movie-details.html?id=${movie.id}
 * image src https://image.tmdb.org/t/p/w500${movie.poster_path}
 * 
 * now just copy the displayPopularMovies() and rename it to displayPopularShows()
 * the endpoint is tv/popular
 * Call the function in the show router
 * 
 * now let`s create a function to display the movie details
 * Create a async function displayMovieDetails()
 * then create a const movieId = window.location.search.split(`=`)
 * what it does in window.location.search it will return everything in the url after the ? 
 * and so wi will get ?id=12345 then we split at the = sign and we get an array with two elements
 * [id,12345] as we want the number id we simple put the index to get it [1]
 * then create a const movie and fetchAPIData(`movie/${movieId}
 * then create a div
 * Get the code from the movie details and past in div innerHTML
 * in the image using ternary opeator check if there is movie.poster_path if so show the image like
 * https://image.tmdb.org/t/p/w500${movie.poster_path} else
 * show the noimage picture images/no-image.jpg
 * 
 * now let's create a function to display show details
 * Create a async function displayShowDetails
 * then create a const showId = window.location.search.split('=')[1];
 * now create a const show and await fetchAPIData the endpoit tv/${showId}
 * now create a div
 * get the code from tv-details and paste in the innerHTML
 * image src https://image.tmdb.org/t/p/w500${show.poster_path}
 * use ternary opeator to check if there is image show image else show noimage picture images/no-image.jpg
 * to show the companies use show.production_companies.map to map to all companies and inside span tag
 * print the compani and join with ''
 * then appendChild the div to the show-details class
 * 
 * Now create a function displayBackgroundImage(type, backgroundPath)
 * inside the function create a const overlayDiv and set to createElement div
 * now using css set the backgorundImage to the url `url(https://image.tmdb.org/t/p/original/${backgroundPath})`
 * set the background size to cover
 * backgroundPosition to center
 * backgroundRepeat to no-repeat
 * height to 100vh
 * width to 100vw
 * position to absolute
 * top to zero
 * left to zero
 * zindex to -1
 * opacity to 0.1
 * then check if it type is movie append the div to #movie-details
 * else append the div to #show-details
 * and then call the function after fetch in displayShowDetails and displayMovieDetails
 * 
 * The search is divided in 3 steps
 * @todo
 * 1 create a searchAPIData() that will make the search in the database
 * 2 search that will get the users search request and call the searchAPIData
 * 3 displaySearchResults that will display the result in the app
 * 
 * 
 * 2 - Now lets create the search part
 * create a async search function
 * inside the function create a const queryString = to the window.location.search
 * window.location.search will return whatever is after the ? in the url
 * then create a const urlParams = new URLSearchParams(queryString)
 * now set the global.search.type to the urlParams.get('type') it will come from the url ?type
 * and the global.search.term to the urlParams.get('search-term') it will come from the url?type=movie&search-term=teste
 * now check if global.search.term !== '' and global.search.term !== null if so
 * create a set of const using destruct results, total_pages, page, total_results await searchAPIData()
 * set the global.search page to page
 * global.search.totalPages to total_pages
 * global.search.totalResults to total_results
 * then call displaySearchResults(results)
 * clear the search document.queryselect('#search-term').value = ''
 * else if text of search is blank showAlert('Please enter a search term');
 * 
 * 
 * call the function search() at the router search.html
 *   
 */




const global = {
  curentPage: window.location.pathname,
  search: {
    term: '',
    type: '',
    page: 1,
    totalPages: 1,
    totalResults: 0
  },
  api: {
    apiKey: '8447df8edaa7afafb1b029868613779e',
    apiUrl: 'https://api.themoviedb.org/3/'
  }
}

 function init(){
  switch (global.curentPage){
    case '/':
    case '/index.html' :
      displayPopularMovies()
      break
    case '/shows.html' :
      displayPopularShows()
      break
    case '/movie-details.html' :
      displayMovieDetails()
      break
    case '/tv-details.html' :
      displayShowDetails()
      break
    case '/search.html' :
      search()
      console.log('search');
  }
  hightlightActiveLink()  
}

function hightlightActiveLink(){
  const links = document.querySelectorAll('.nav-link')
  links.forEach((link) => {
    if(link.getAttribute('href') == global.curentPage){
      link.classList.add('active')
    }
  })
}

// Show spinner just add the class show to the object
function showSpinner(){
  document.querySelector('.spinner').classList.add('show')
}

function hideSpinner(){
  document.querySelector('.spinner').classList.remove('show')
}

async function fetchAPIData(endpoint){
  const API_KEY = global.api.apiKey
  const API_URL = global.api.apiUrl
  showSpinner()
  const response = await fetch(`${API_URL}${endpoint}?api_key=${API_KEY}&language=en-US`)  
  const data = await response.json()
  hideSpinner() 
  return data
}

async function displayPopularMovies(){ 
  const { results } = await fetchAPIData('movie/popular')
  results.forEach(movie => {
    const div = document.createElement('div')
    div.classList.add('card')
    div.innerHTML = `
    <a href="movie-details.html?id=${movie.id}">
      <img
        src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
        class="card-img-top"
        alt="${movie.title}"
      />
    </a>
    <div class="card-body">
      <h5 class="card-title">${movie.title}</h5>
      <p class="card-text">
        <small class="text-muted">Release: ${movie.release_date}</small>
      </p>
    </div>    `        
    document.querySelector('#popular-movies').appendChild(div)
  })  
}

async function displayPopularShows(){ 
  const { results } = await fetchAPIData('tv/popular')
  console.log(results)
  results.forEach(show => {
    const div = document.createElement('div')
    div.classList.add('card')
    div.innerHTML = `
    <a href="tv-details.html?id=${show.id}">
      <img
        src="https://image.tmdb.org/t/p/w500${show.poster_path}"
        class="card-img-top"
        alt="${show.name}"
      />
    </a>
    <div class="card-body">
      <h5 class="card-title">${show.name}</h5>
      <p class="card-text">
        <small class="text-muted">Release: ${show.first_air_date}</small>
      </p>
    </div>    `        
    document.querySelector('#popular-shows').appendChild(div)
  })  
}

// @ todo put the correct values in the code displayMovieDetails
async function displayMovieDetails(){
  const movieId = window.location.search.split('=')[1]
  const movie = await fetchAPIData(`movie/${movieId}`)
 
  // Overlay for background image
  displayBackgroundImage('movie', movie.backdrop_path);

  const div = document.createElement('div')

  div.innerHTML = `  
  <div class="details-top">
    <div>
    ${
      movie.poster_path
      ?
      `<img
        src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
        class="card-img-top"
        alt="Movie Title"`
      :
      `<img
        src="images/no-image.jpg"
        class="card-img-top"
        alt="Movie Title"`
    }
      
      />
    </div>
    <div>
      <h2>Movie Title</h2>
      <p>
        <i class="fas fa-star text-primary"></i>
        8 / 10
      </p>
      <p class="text-muted">Release Date: XX/XX/XXXX</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
        atque molestiae error debitis provident dolore hic odit, impedit
        sint, voluptatum consectetur assumenda expedita perferendis
        obcaecati veritatis voluptatibus. Voluptatum repellat suscipit,
        quae molestiae cupiditate modi libero dolorem commodi obcaecati!
        Ratione quia corporis recusandae delectus perspiciatis consequatur
        ipsam. Cumque omnis ad recusandae.
      </p>
      <h5>Genres</h5>
      <ul class="list-group">
        <li>Genre 1</li>
        <li>Genre 2</li>
        <li>Genre 3</li>
      </ul>
      <a href="#" target="_blank" class="btn">Visit Movie Homepage</a>
    </div>
  </div>
  <div class="details-bottom">
    <h2>Movie Info</h2>
    <ul>
      <li><span class="text-secondary">Budget:</span> $1,000,000</li>
      <li><span class="text-secondary">Revenue:</span> $2,000,000</li>
      <li><span class="text-secondary">Runtime:</span> 90 minutes</li>
      <li><span class="text-secondary">Status:</span> Released</li>
    </ul>
    <h4>Production Companies</h4>
    <div class="list-group">Company 1, Company 2, Company 3</div>
  </div>
  `
 
  document.querySelector('#movie-details').appendChild(div)  
}


async function displayShowDetails(){
  const showId = window.location.search.split('=')[1]
  const show = await fetchAPIData(`tv/${showId}`) 

  displayBackgroundImage('show', show.backdrop_path);
  
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




document.addEventListener('DOMContentLoaded', init())