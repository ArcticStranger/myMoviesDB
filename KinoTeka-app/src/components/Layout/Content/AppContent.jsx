import { Spin, Typography } from "antd";
import { filmsGrid } from "../../../styles/contentStyles";
import { FilmItem, FilmItemList } from "./ContentItems";
import useAppContentViewModel from "../../../hooks/useAppContentViewModel";

export default function AppContent({ database, forceFavorites = false }) {
  const viewModel = useAppContentViewModel({ database, forceFavorites });

  if (viewModel.mode === "favorites") {
    return (
      <div style={filmsGrid}>
        {viewModel.favoritesMovies.length ? (
          viewModel.favoritesMovies.map((movie) => (
            <FilmItem key={movie.imdbID || movie.Title} check={movie} />
          ))
        ) : (
          <Typography.Text>Избранные фильмы не найдены</Typography.Text>
        )}
      </div>
    );
  }

  if (viewModel.mode === "loading") {
    return <Spin />;
  }

  if (viewModel.mode === "loadError") {
    return <Typography.Text>Не удалось загрузить фильмы</Typography.Text>;
  }

  return (
    <div style={filmsGrid}>
      {viewModel.shouldShowSearchResults ? (
        <FilmItemList searchData={viewModel.searchData} />
      ) : (
        viewModel.movies.map((movie) => (
          <FilmItem key={movie.imdbID || movie.Title} check={movie} />
        ))
      )}
    </div>
  );
}
