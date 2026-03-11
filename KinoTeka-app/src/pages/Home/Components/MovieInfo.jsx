import { Typography } from "antd";
import { textDescStyle } from "../../../constants/styles";

export default function MovieInfo({ data }) {
  return (
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
  );
}
