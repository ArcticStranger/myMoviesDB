import { Spin } from "antd";
import { Link, useParams } from "react-router-dom";
import { useGetFilmInfoById } from "../../hooks/useMovieInfo";
import { descriptionStyles, backLinkStyle } from "./Styles/movieDescStyles";
import MovieInfo from "./Components/MovieInfo";
import PlotSection from "./Components/PlotSection";

export default function MovieDescription() {
  const { imdbID } = useParams();
  const data = useGetFilmInfoById(imdbID);

  if (!data) {
    return (
      <div className="kt-state">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <>
      <div style={descriptionStyles}>
        <img
          src={data.Poster}
          className="movie-desc__poster"
          alt={`Постер фильма ${data.Title}`}
        />
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <MovieInfo data={data} />
          <PlotSection plot={data.Plot} />
        </div>
      </div>
      <div style={backLinkStyle}>
        <Link
          to="/"
          className="toggle-nav"
          style={{ color: "#98a1b3", textDecoration: "none" }}
        >
          ← Назад к каталогу
        </Link>
      </div>
    </>
  );
}
