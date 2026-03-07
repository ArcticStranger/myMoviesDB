import { Button } from "antd";
import { useState } from "react";
import { StarOutlined, StarFilled } from "@ant-design/icons";
import { starStyle } from "../../../styles/contentStyles";
import {
  isFavoriteFilm,
  toggleFavoriteFilm,
} from "../../../services/localStorage";

export default function FavoriteStarButton({ movie, ariaLabel }) {
  const [isFavorite, setIsFavorite] = useState(() =>
    isFavoriteFilm(movie?.imdbID)
  );

  const handleFavoriteClick = () => {
    if (!movie?.imdbID) return;
    const next = toggleFavoriteFilm(movie);
    setIsFavorite(next);
  };

  return (
    <Button
      type="text"
      aria-label={ariaLabel}
      onClick={handleFavoriteClick}
      icon={
        isFavorite ? (
          <StarFilled style={starStyle} />
        ) : (
          <StarOutlined style={starStyle} />
        )
      }
    />
  );
}
