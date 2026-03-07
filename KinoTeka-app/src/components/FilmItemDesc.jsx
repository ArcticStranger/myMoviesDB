import { Spin, Typography } from "antd";
import { useGetFilmInfoById } from "../hooks/useMovieInfo";
import "../styles/posterStyle.css";
import { textStyle, filmCard } from "../styles/contentStyles";

export function FilmItemDesc({ data }) {
  const check = useGetFilmInfoById(data);
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
        <img src={check.Poster} alt={check.Title} className="posterStyle" />
        <Typography.Text style={textStyle}>
          <br />
          imdbID: {check.imdbID}
          <br />
        </Typography.Text>
      </div>
    </div>
  );
}
