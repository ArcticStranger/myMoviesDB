import { Layout, Typography, Spin } from "antd";
import { useState } from "react";
import { contentStyle, filmsGrid } from "../../../styles/contentStyles";

import { useGetFilmInfo, FilmItem } from "../../../hooks/MovieInfo";
import MovieDescription from "../../../pages/Home/MovieDesc"

export default function AppContent() {
  const storage = [
    "The King's Speech",
    "The Hateful Eight",
    "Jojo Rabbit",
    "District 9",
    "The Green Mile",
    "Jobs",
    "Chappie",
    "Pacific Rim",
  ];
  const [MovieSearch, setMovieSearch] = useState(false);
  const data = `The King's Speech`;
  const dataResult = useGetFilmInfo(storage);

  return (
    <Layout.Content style={contentStyle}>
      <div style={filmsGrid} onClick={MovieSearch(true)}>
      MovieSearch(true) ? MovieDescription() :
        {storage.map((film) => (
          <FilmItem key={film} filmName={film} />
        ))}
      </div>
    </Layout.Content>
  );
}
