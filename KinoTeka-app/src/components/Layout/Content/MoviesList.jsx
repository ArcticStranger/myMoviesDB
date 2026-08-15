import { filmsGrid } from "../../../styles/contentStyles";
import MovieCard from "./MovieCard";

export default function MoviesList({
  movies,
  emptyMessage = "Фильмы не найдены",
}) {
  if (!movies || movies.length === 0) {
    return <div className="movie-card__empty">{emptyMessage}</div>;
  }

  return (
    <div style={filmsGrid}>
      {movies.map((movie) => (
        <MovieCard
          key={movie.imdbID || movie.Title}
          movie={movie}
          ariaLabelPrefix="toggle-favorite"
        />
      ))}
    </div>
  );
}
