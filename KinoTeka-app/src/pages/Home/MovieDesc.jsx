import { Layout, Spin, Typography } from "antd";
import { Link, useParams } from "react-router-dom";
import { contentStyle } from "../../styles/contentStyles";
import { useGetFilmInfoById } from "../../hooks/useMovieInfo";

const descriptionStyles = {
  display: "flex",
  gap: "40px",
  marginTop: "100px",
};

export const textDescStyle = {
  color: "#342d2d",
  fontFamily: "Inter",
  fontWeight: 700,
  fontSize: 20,
  whiteSpace: "no-wrap",
  lineHeight: 1.4,
  width: 540,
  textAlign: "left",
  marginBottom: "40px",
};

const descPosterStyle = {
  width: "640px",
  margin: "0px 40px",
  transition: "transform 0.2s ease, boxShadow 0.2s ease",
  boxShadow: "none",
  cursor: "pointer",
  transform: "scale(1)",
};

export default function MovieDescription({ search }) {
  const { imdbID } = useParams();
  const data = useGetFilmInfoById(imdbID);

  if (!data) {
    return <Spin />;
  }

  return (
    <>
      <div style={descriptionStyles}>
        <img src={data.Poster} style={descPosterStyle} alt={data.Title} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Typography.Text style={textDescStyle}>
            Название: {data.Title}
            <br />
            Год выпуска: {data.Year}
            <br />
            Жанр: {data.Genre}
            <br />
            Релиз: {data.Released}
            <br />
            Рейтинг: {data.Rated}
            <br />
            Длительность: {data.Runtime}
            <br />
            Директор: {data.Director}
            <br />
            Сценарист: {data.Writer}
            <br />
            Актеры: {data.Actors}
            <br />
          </Typography.Text>
          <Typography.Text
            style={{
              fontSize: 24,
              fontWeight: 800,
            }}
          >
            Краткое описание:
          </Typography.Text>
          <Typography.Text
            style={{
              fontSize: 18,
              fontWeight: 500,
              border: "4px solid #c2c02a",
              borderRadius: 10,
              background: "#ded7d7",
              maxWidth: 600,
              padding: 20,
              textAlign: "inherit",
            }}
          >
            {data.Plot}
          </Typography.Text>
        </div>
      </div>
      <div
        style={{
          marginTop: 16,
          marginLeft: 40,
          fontSize: 25,
        }}
      >
        <Link to="/">~Назад</Link>
      </div>
    </>
  );
}
