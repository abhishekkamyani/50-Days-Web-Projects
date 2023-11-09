const movieContainer = document.querySelector('.movies');
console.log(movieContainer);

const movieInnerHTML = `  <div class="image">
                            <img src="" alt="">
                            </div>
                            <div class="title">
                            <h3></h3>
                            <p class="rating"></p>
                            </div>
                            <div class="overview">
                            <h3></h3>
                            <p></p>
                          </div>`;



const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNDczNDljYjg0MDhkZTAzZjEyYzhkMjY5ZjFiYzI3NCIsInN1YiI6IjY1NGE3M2M1NjdiNjEzMDBhZmM4NWM5YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mf81YttaVT53lyFaubpdBqwqEhLm-kf1xNlKxb90FG0'
    }
};

//   fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));


async function generateMovies(url) {
    const response = await fetch(url, options);
    let movies = await response.json();
    console.log(movies);
    let moviesdb = movies.results;

    const moviesArr = moviesdb.map(movie => {
        let average = +movie['vote_average'];
        average = parseInt(average * 10) / 10;
        
        return (
            `<div class="movie">
               <div class="image">
                    <img src="https://image.tmdb.org/t/p/w1280${movie['poster_path']}" alt="jnj">
                </div>
                <div class="title">
                    <h3>${movie['title']}</h3>
                    <p class="rating ${average >= 8 ? 'green' : ''}">${average}</p>
                </div>
                <div class="overview">
                    <h3>Overview</h3>
                    <p>${movie['overview']}</p>
                </div>
            </div>`
        );
    })


    movieContainer.innerHTML = moviesArr;
    hoverMovies();
}

generateMovies('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1');

function hoverMovies() {
    const movies = document.querySelectorAll('.movie');

    movies.forEach(movie => {
        movie.addEventListener('mouseover', () => movie.classList.add('active'));
        movie.addEventListener('mouseout', () => movie.classList.remove('active'));
    })
}


moviesForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const movie = search.value;

    generateMovies(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`);
})