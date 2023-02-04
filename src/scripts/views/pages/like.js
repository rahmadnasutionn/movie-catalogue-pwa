import FavoriteMovieIdb from '../../data/favorite-movie-idb';
import { createMovieItemTemplate } from '../templates/template-creator';

const Like = {
    async render() {
        return `
      <div class="content">
        <h2 class="content__heading">Your Liked Movie</h2>
        <div id="movies" class="movies">
        </div>
      </div>
    `;
    },

    async afterRender() {
        const movies = await FavoriteMovieIdb.getAllMovies();
        const moviesContainer = document.querySelector('#movies');

        movies.forEach((movie) => {
            moviesContainer.innerHTML += createMovieItemTemplate(movie);
        });

        if (movies.length < 1) {
            moviesContainer.innerHTML += '<h4 class="movie-item__not__found">Tidak ada film untuk ditampilkan</h4>';
        }
    },
};

export default Like;