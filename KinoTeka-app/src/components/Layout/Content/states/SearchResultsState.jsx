import MovieCard from "../MovieCard";
import { filmsGrid } from "../../../../styles/contentStyles";

export default function SearchResultsState({ searchData }) {
  const results = Array.isArray(searchData?.Search) ? searchData.Search : [];

  if (results.length === 0) {
    return (
      <div className="kt-state">
        <div className="kt-state__title">Фильмы не найдены</div>
        <div className="kt-state__text">
          Попробуйте изменить запрос или проверьте название.
        </div>
      </div>
    );
  }

  return (
    <div style={filmsGrid}>
      {results.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          movie={movie}
          ariaLabelPrefix="toggle-favorite-search"
        />
      ))}
    </div>
  );
}
