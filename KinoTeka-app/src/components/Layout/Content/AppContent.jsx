import { Layout, Spin } from "antd";
import { contentStyle, filmsGrid } from "../../../styles/contentStyles";
import {
  FilmItem,
  FilmItemList,
} from "./ContentItems";


export default function AppContent({ search, database, datasearch }) {
  return (!database || !database.length) ? (<Spin />) : (
      <>
      <div style={filmsGrid}>
        {search?.hasSearched ? (
          <FilmItemList searchData={datasearch} />
        ) : (
          database.map((movie) => (
            <FilmItem key={movie.imdbID || movie.Title} check={movie} />
          ))
        )}
      </div>
    </>
  );
}
