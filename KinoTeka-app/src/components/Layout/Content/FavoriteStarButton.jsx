import { Button } from "antd";
import { useState } from "react";
import { StarOutlined, StarFilled } from "@ant-design/icons";
import { isFavoriteFilm, toggleFavorite } from "../../../services/localStorage";

export default function FavoriteStarButton({ movie, ariaLabel }) {
  const [isFavorite, setIsFavorite] = useState(() =>
    isFavoriteFilm(movie?.imdbID)
  );

  const handleFavoriteClick = () => {
    if (!movie?.imdbID) return;
    const result = toggleFavorite(movie);
    if (!result?.success) return;
    setIsFavorite(result.action === "added");
  };

  return (
    <Button
      type="text"
      className={`movie-card__favorite-btn${isFavorite ? " is-favorite" : ""}`}
      aria-label={ariaLabel}
      aria-pressed={isFavorite}
      onClick={handleFavoriteClick}
      icon={
        isFavorite ? (
          <StarFilled style={{ color: "inherit" }} alt="Избранное" />
        ) : (
          <StarOutlined style={{ color: "inherit" }} alt="В избранное" />
        )
      }
    />
  );
}
