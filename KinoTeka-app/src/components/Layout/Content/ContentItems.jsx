import { Spin, Typography, Button } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../../../styles/posterStyle.css";
import { StarOutlined, StarFilled } from "@ant-design/icons";
import { textStyle, filmCard, starStyle } from "../../../styles/contentStyles";
import {
  isFavoriteFilm,
  toggleFavoriteFilm,
} from "../../../services/localStorage";

function FavoriteStarButton({ movie, ariaLabel }) {
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

export function FilmItem({ check }) {
  return !check ? (
    <Spin />
  ) : (
    <div style={filmCard} className="movie-card">
      <Link to={`/movie/${check.imdbID}`} style={{ textDecoration: "none" }}>
        <img src={check.Poster} alt={check.Title} className="posterStyle" />
      </Link>
      <Typography.Text style={textStyle} className="movie-card__text">
        Название: {check.Title}
        <br />
        Год выпуска: {check.Year}
        <br />
        Жанр: {check.Genre}
        <br />
        Добавить в избранное
        <FavoriteStarButton movie={check} ariaLabel="toggle-favorite" />
      </Typography.Text>
    </div>
  );
}

export function FilmItemList({ searchData }) {
  if (!searchData) {
    return <Spin />;
  }

  if (!searchData.Search) {
    return <Typography.Text>Фильмы не найдены</Typography.Text>;
  }

  return searchData.Search.map((movie) => {
    const { Title, Year, Genre, Poster, imdbID } = movie;

    return (
      <div style={filmCard} className="movie-card" key={imdbID}>
        <Link to={`/movie/${imdbID}`} style={{ textDecoration: "none" }}>
          <img src={Poster} alt={Title} className="posterStyle" />
        </Link>
        <Typography.Text style={textStyle} className="movie-card__text">
          Название: {Title}
          <br />
          Год выпуска: {Year}
          <br />
          Жанр: {Genre || "N/A"}
          <br />
          Добавить в избранное
          <FavoriteStarButton
            movie={movie}
            ariaLabel="toggle-favorite-search"
          />
        </Typography.Text>
      </div>
    );
  });
}
