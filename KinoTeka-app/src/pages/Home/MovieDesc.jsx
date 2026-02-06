import { Layout, Spin, Typography } from "antd";
import { Link, useParams } from "react-router-dom";
import { contentStyle, textStyle } from "../../styles/contentStyles";
import { useGetFilmInfoById } from "../../hooks/useMovieInfo";

const descriptionStyles = {
  display: "flex",
  gap: "40px",
};

const descPosterStyle = {
  width: "350px",
  margin: "20px 0",
  transition: "transform 0.2s ease, boxShadow 0.2s ease",
  boxShadow: "none",
  cursor: "pointer",
  transform: "scale(1)",
};

export default function MovieDescription({search}) {
  const { imdbID } = useParams();
  const data = useGetFilmInfoById(imdbID);

  if (!data) {
    return <Spin />;
  }
  

  return (
    <Layout.Content style={contentStyle}>
      <div style={descriptionStyles}>
        <img src={data.Poster} style={descPosterStyle} alt={data.Title} />
        <Typography.Text style={textStyle}>
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
          Краткое описание: {data.Plot}
        </Typography.Text>
      </div>
      <div style={{ marginTop: 16 }}>
        <Link to="/">Назад</Link>
      </div>
    </Layout.Content>
  );
}
