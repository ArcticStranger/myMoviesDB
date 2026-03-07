import MovieCard from "../MovieCard";

export default function SearchResultsState({ searchData }) {
  return searchData.Search.map((movie) => (
    <MovieCard
      key={movie.imdbID}
      movie={movie}
      ariaLabelPrefix="toggle-favorite-search"
    />
  ));
}
