import { itActsAsFavoriteMovieModel } from './contract/favoriteMovieContract';
import FavoriteMovieIdb from '../src/scripts/data/favorite-movie-idb';

xdescribe('Favorite Movie Idb Contrast Test Implementation', () => {
    afterEach(async() => {
        (await FavoriteMovieIdb.getAllMovies()).forEach(async(movie) => {
            await FavoriteMovieIdb.deleteMovie(movie.id);
        });
    });

    itActsAsFavoriteMovieModel(FavoriteMovieIdb);
});