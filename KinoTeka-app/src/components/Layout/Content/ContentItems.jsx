import { Spin, Typography, Button } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../../../styles/posterStyle.css";
import { StarOutlined, StarFilled } from "@ant-design/icons";
import { textStyle, filmCard } from "../../../styles/contentStyles";
import { isFavoriteFilm, toggleFavoriteFilm } from "../../../services/localStorage";

const starStyle = {
  fontSize: 35,
  color: "#ff0000",
};

function FavoriteStarButton({ movie, ariaLabel }) {
  const [isFavorite, setIsFavorite] = useState(() => isFavoriteFilm(movie?.imdbID));

  const handleFavoriteClick = () => {
    const next = toggleFavoriteFilm(movie);
    setIsFavorite(next);
  };

  return (
    <Button
      type="text"
      aria-label={ariaLabel}
      onClick={handleFavoriteClick}
      icon={isFavorite ? <StarFilled style={starStyle} /> : <StarOutlined style={starStyle} />}
    />
  );
}

export function FilmItem({ check }) {
  return !check ? (
    <Spin />
  ) : (
    <div
      style={{
        marginTop: 24,
        marginLeft: 24,
      }}
    >
      <div style={filmCard}>
        <Link to={`/movie/${check.imdbID}`} style={{ textDecoration: "none" }}>
          <img src={check.Poster} alt={check.Title} className="posterStyle" />
        </Link>
        <Typography.Text style={textStyle}>
          Название: {check.Title}
          <br />
          Год выпуска: {check.Year}
          <br />
          Жанр: {check.Genre}
          <br />
        </Typography.Text>
        <FavoriteStarButton movie={check} ariaLabel="toggle-favorite" />
      </div>
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
    const { Title, Year, Type, Poster, imdbID } = movie;

    // console.log(Title, Year, Type, Poster);
    return (
      <div style={filmCard} key={imdbID}>
        <Link to={`/movie/${imdbID}`} style={{ textDecoration: "none" }}>
          <img src={Poster} className="posterStyle" />
        </Link>
        <Typography.Text style={textStyle}>
          Название: {Title}
          <br />
          Год выпуска: {Year}
          <br />
          <br />
        </Typography.Text>
        <FavoriteStarButton
          movie={{ Title, Year, Type, Poster, imdbID }}
          ariaLabel="toggle-favorite-search"
        />
      </div>
    );
  });
}
