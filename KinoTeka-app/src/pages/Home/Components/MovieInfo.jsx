import { Button, Typography } from "antd";
import { StarFilled } from "@ant-design/icons";
import { textDescStyle } from "../../../constants/styles";
import { ratingColor } from "../../../styles/designTokens";

export default function MovieInfo({ data }) {
  const rating = Number.parseFloat(data?.imdbRating);
  const ratingValue = Number.isNaN(rating) ? null : rating.toFixed(1);

  return (
    <section>
      <Typography.Title
        level={2}
        style={{
          color: "#e8eaf0",
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 700,
          marginBottom: 12,
        }}
      >
        {data.Title}
      </Typography.Title>

      {ratingValue && (
        <Button
          type="text"
          style={{
            color: ratingColor(data.imdbRating),
            fontWeight: 700,
            paddingLeft: 0,
            marginBottom: 16,
            fontFamily: "'Space Grotesk', sans-serif",
          }}
          icon={<StarFilled style={{ color: "#fbbf24" }} />}
        >
          {ratingValue} / 10 · IMDB
        </Button>
      )}

      <Typography.Text style={textDescStyle}>
        Год выпуска: {data.Year || "—"}
        <br />
        Жанр: {data.Genre || "—"}
        <br />
        Релиз: {data.Released || "—"}
        <br />
        Возрастной рейтинг: {data.Rated || "—"}
        <br />
        Длительность: {data.Runtime || "—"}
        <br />
        Режиссёр: {data.Director || "—"}
        <br />
        Сценарист: {data.Writer || "—"}
        <br />В ролях: {data.Actors || "—"}
      </Typography.Text>
    </section>
  );
}
