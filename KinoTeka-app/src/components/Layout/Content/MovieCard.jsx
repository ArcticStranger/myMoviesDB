import { Link } from "react-router-dom";
import "../../../styles/posterStyle.css";
import { filmCard } from "../../../styles/contentStyles";
import MovieInfo from "./MovieInfo";

export default function MovieCard({
  movie,
  ariaLabelPrefix = "toggle-favorite",
}) {
  return (
    <div style={filmCard} className="movie-card" key={movie.imdbID}>
      <Link to={`/movie/${movie.imdbID}`} style={{ textDecoration: "none" }}>
        <img src={movie.Poster} alt={movie.Title} className="posterStyle" />
      </Link>
      <MovieInfo movie={movie} ariaLabelPrefix={ariaLabelPrefix} />
    </div>
  );
}
