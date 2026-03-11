import MoviesList from "../MoviesList";

export default function FavoritesState({ movies }) {
  return (
    <MoviesList movies={movies} emptyMessage="Избранные фильмы не найдены" />
  );
}
