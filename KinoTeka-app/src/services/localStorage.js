
const FAVORITES_KEY = "favorite_films";

export function readFavorites() {
  if (typeof window === "undefined") return [];

  try {
    const raw = localStorage.getItem(FAVORITES_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeFavorites(favorites) {
  if (typeof window === "undefined") return;
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
}

export function getFavoriteFilms() {
  return readFavorites();
}

export function isFavoriteFilm(imdbID) {
  return readFavorites().some((movie) => movie.imdbID === imdbID);
}

export function toggleFavoriteFilm(movie) {
  if (!movie?.imdbID) return false;

  const favorites = readFavorites();
  const exists = favorites.some((item) => item.imdbID === movie.imdbID);

  if (exists) {
    const check = window.confirm("Вы точно хотите удалить из избранного?");
    if (check === true) {
    writeFavorites(favorites.filter((item) => item.imdbID !== movie.imdbID));
    return false;
    } else return true;
  }

  writeFavorites([...favorites, movie]);

  return true;
}

export function getFavoriteFilm(imdbID) {
  return isFavoriteFilm(imdbID);
}

export function setFavoriteFilm(movie) {
  return toggleFavoriteFilm(movie);
}
