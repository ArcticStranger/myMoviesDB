import { Layout } from "antd";
import { contentStyle, filmsGrid } from "../../../styles/contentStyles";
import { FilmItem } from "../../../hooks/MovieInfo";


export default function AppContent({ search }) {
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

  return (
    <Layout.Content style={contentStyle}>
      <div style={filmsGrid}>
        {search?.hasSearched ? (
          <FilmItem key={search.query} filmName={search.query} />
        ) : (
          defaultMovies.map((film) => (
            <FilmItem key={film} filmName={film} />
          ))
        )}
      </div>
    </Layout.Content>
  );
}
