import { Layout } from "antd";
import { contentStyle, filmsGrid } from "../../../styles/contentStyles";
import {
  FilmItem,
  FilmItemList,
} from "../../../hooks/MovieInfo";

const defaultMovies = [
  "The King's Speech",
  "The Hateful Eight",
  "Jojo Rabbit",
  "District 9",
  "The Green Mile",
  "Jobs",
  "Chappie",
  "Pacific Rim",
];

export default function AppContent({ search }) {
  console.log("AppContent search:", search);
  
  return (
    <Layout.Content style={contentStyle}>
      <div style={filmsGrid}>
        {search?.hasSearched ? (
          <FilmItemList data={search.query} />
        ) : (
          defaultMovies.map((movie) => (
            <FilmItem key={movie} data={movie} />
          ))
        )}
      </div>
    </Layout.Content>
  );
}
