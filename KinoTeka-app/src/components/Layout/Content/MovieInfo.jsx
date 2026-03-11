import { Typography } from "antd";
import { textStyle } from "../../../styles/contentStyles";
import FavoriteStarButton from "./FavoriteStarButton";

export default function MovieInfo({
  movie,
  ariaLabelPrefix = "toggle-favorite",
}) {
  return (
    <Typography.Text style={textStyle} className="movie-card__text">
      Название: {movie.Title}
      <br />
      Год выпуска: {movie.Year}
      <br />
      Жанр: {movie.Genre || "N/A"}
      <br />
      Добавить в избранное
      <FavoriteStarButton
        movie={movie}
        ariaLabel={`${ariaLabelPrefix}-${movie.imdbID}`}
      />
    </Typography.Text>
  );
}
