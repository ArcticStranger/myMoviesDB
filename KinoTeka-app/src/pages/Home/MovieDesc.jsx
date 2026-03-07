import { Spin } from "antd";
import { Link, useParams } from "react-router-dom";
import { useGetFilmInfoById } from "../../hooks/useMovieInfo";
import { useDispatch } from "react-redux";
import { setDescriptionState } from "../../components/redux/partReducers/buttonSlice";
import {
  descriptionStyles,
  descPosterStyle,
  backLinkStyle,
} from "./Styles/movieDescStyles";
import MovieInfo from "./Components/MovieInfo";
import PlotSection from "./Components/PlotSection";
import { useEffect } from "react";

export default function MovieDescription() {
  const { imdbID } = useParams();
  const data = useGetFilmInfoById(imdbID);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDescriptionState(true));
  }, [dispatch]);

  if (!data) {
    return <Spin />;
  }

  return (
    <>
      <div style={descriptionStyles}>
        <img src={data.Poster} style={descPosterStyle} alt={data.Title} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <MovieInfo data={data} />
          <PlotSection plot={data.Plot} />
        </div>
      </div>
      <div style={backLinkStyle}>
        <Link to="/">~Назад</Link>
      </div>
    </>
  );
}
