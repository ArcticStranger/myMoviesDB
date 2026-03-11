import { readFavorites, writeFavorites } from "./core.js";
import { isFavoriteFilm } from "./queries.js";

export function addToFavorites(movie) {
  if (!movie?.imdbID) {
    return { success: false, error: "Invalid movie data" };
  }

  const favorites = readFavorites();
  const existingIndex = favorites.findIndex(
    (item) => item.imdbID === movie.imdbID
  );

  if (existingIndex !== -1) {
    return {
      success: false,
      error: "Movie already in favorites",
      alreadyExists: true,
    };
  }

  writeFavorites([...favorites, movie]);
  return { success: true, action: "added", movie };
}

export function removeFromFavorites(imdbID) {
  if (!imdbID) {
    return { success: false, error: "Invalid imdbID" };
  }

  const favorites = readFavorites();
  const movieIndex = favorites.findIndex((item) => item.imdbID === imdbID);

  if (movieIndex === -1) {
    return {
      success: false,
      error: "Movie not found in favorites",
      notFound: true,
    };
  }

  const removedMovie = favorites[movieIndex];
  writeFavorites(favorites.filter((item) => item.imdbID !== imdbID));

  return { success: true, action: "removed", movie: removedMovie };
}

export function updateFavoriteMovie(updatedMovie) {
  if (!updatedMovie?.imdbID) {
    return { success: false, error: "Invalid movie data" };
  }

  const favorites = readFavorites();
  const movieIndex = favorites.findIndex(
    (item) => item.imdbID === updatedMovie.imdbID
  );

  if (movieIndex === -1) {
    return {
      success: false,
      error: "Movie not found in favorites",
      notFound: true,
    };
  }

  const updatedFavorites = [...favorites];
  updatedFavorites[movieIndex] = updatedMovie;
  writeFavorites(updatedFavorites);

  return { success: true, action: "updated", movie: updatedMovie };
}

export function toggleFavorite(movie) {
  if (!movie?.imdbID) {
    return { success: false, error: "Invalid movie data", action: null };
  }

  const exists = isFavoriteFilm(movie.imdbID);

  if (exists) {
    return removeFromFavorites(movie.imdbID);
  } else {
    return addToFavorites(movie);
  }
}
