const BLOCKED_RATINGS = ["R", "NC-17", "TV-MA", "18+"];

export function isKidsFriendly(movie) {
  const rated = String(movie?.Rated ?? "").toUpperCase();
  if (!rated || rated === "N/A") return false;
  return !BLOCKED_RATINGS.some((mark) => rated.includes(mark));
}

export function hasRussianLanguage(movie) {
  const language = String(movie?.Language ?? "").toLowerCase();
  return language.includes("russian") || language.includes("рус");
}

export function hasHighRating(movie) {
  const imdbRating = Number.parseFloat(movie?.imdbRating);
  if (!Number.isNaN(imdbRating) && imdbRating >= 7) return true;

  const rottenTomatoes = Array.isArray(movie?.Ratings)
    ? movie.Ratings.find((item) => item?.Source === "Rotten Tomatoes")
    : null;
  if (!rottenTomatoes?.Value) return false;

  const rottenValue = Number.parseInt(
    String(rottenTomatoes.Value).replace("%", ""),
    10
  );
  return !Number.isNaN(rottenValue) && rottenValue >= 70;
}

export function applyRadioFilter(movies, radioFilter) {
  if (!Array.isArray(movies)) return [];

  switch (radioFilter) {
    case "ZeroAdult":
      return movies.filter(isKidsFriendly);
    case "RussianLang":
      return movies.filter(hasRussianLanguage);
    case "HighRating":
      return movies.filter(hasHighRating);
    default:
      return movies;
  }
}
