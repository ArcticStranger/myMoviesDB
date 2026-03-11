import { readFavorites } from "./core.js";

export function getFavoriteFilms() {
  return readFavorites();
}

export function isFavoriteFilm(imdbID) {
  if (!imdbID) return false;
  return readFavorites().some((movie) => movie.imdbID === imdbID);
}

export function getFavoriteFilm(imdbID) {
  if (!imdbID) return null;
  return readFavorites().find((movie) => movie.imdbID === imdbID) || null;
}
