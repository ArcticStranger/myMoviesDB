import { Link } from "react-router-dom";
import { StarFilled } from "@ant-design/icons";
import "../../../styles/posterStyle.css";
import { filmCard } from "../../../styles/contentStyles";
import FavoriteStarButton from "./FavoriteStarButton";
import { ratingColor } from "../../../styles/designTokens";

export default function MovieCard({
  movie,
  ariaLabelPrefix = "toggle-favorite",
}) {
  const rating = Number.parseFloat(movie?.imdbRating);
  const ratingValue = Number.isNaN(rating) ? null : rating.toFixed(1);

  return (
    <div style={filmCard} className="movie-card" key={movie.imdbID}>
      <Link
        to={`/movie/${movie.imdbID}`}
        className="movie-card__poster"
        style={{ textDecoration: "none" }}
      >
        {ratingValue && (
          <span
            className="movie-card__badge"
            style={{ color: ratingColor(movie.imdbRating) }}
          >
            <StarFilled className="movie-card__rating-icon" />
            {ratingValue}
          </span>
        )}
        <img src={movie.Poster} alt={movie.Title} className="posterStyle" />
      </Link>

      <div className="movie-card__body">
        <div className="movie-card__title">{movie.Title}</div>
        <div className="movie-card__meta">
          <span className="movie-card__year">
            {movie.Year ? `${movie.Year} · ` : ""}
          </span>
          {movie.Genre || "Жанр не указан"}
        </div>
        <div className="movie-card__actions">
          <FavoriteStarButton
            movie={movie}
            ariaLabel={`${ariaLabelPrefix}-${movie.imdbID}`}
          />
        </div>
      </div>
    </div>
  );
}
