import { useSelector } from "react-redux";
import { useGetFilmInfoBySearch } from "./useMovieInfo";
import { getFavoriteFilms } from "../services/localStorage";
import sortingData from "../utils/sortingData";
import { applyRadioFilter } from "../utils/movieFilters";
import { selectAppContentState } from "../components/redux/selectors/contentSelectors";

// Вспомогательные функции
const filterMoviesByGenre = (movies, isGenreActive, selectedGenre) => {
  if (!Array.isArray(movies)) return [];
  if (!isGenreActive) return movies;
  return movies.filter((movie) => movie.Genre?.includes(selectedGenre));
};

const applyFiltersAndSorting = (movies, filters) => {
  return sortingData({
    year: filters.year,
    alphabet: filters.alphabetSort,
    database: applyRadioFilter(
      filterMoviesByGenre(movies, filters.genreActive, filters.selectedGenre),
      filters.radioFilter
    ),
    keyword: filters.keywordForFilter,
  });
};

const filterMoviesBySearch = (movies, searchQuery) => {
  if (!searchQuery) return movies;
  return movies.filter((movie) =>
    movie?.Title?.toLowerCase().includes(searchQuery.toLowerCase())
  );
};

// Основные функции обработки данных
const processFavoritesData = (favorites, filters, searchQuery) => {
  const filteredFavorites = applyFiltersAndSorting(favorites, filters);
  const searchedFavorites = filterMoviesBySearch(
    filteredFavorites,
    searchQuery
  );

  return {
    contentType: "favorites",
    movies: searchedFavorites,
  };
};

const processCatalogData = (database, filters, searchQuery, searchResults) => {
  const filteredDatabase = applyFiltersAndSorting(database, filters);

  const processedSearchResults = searchResults?.Search
    ? applyFiltersAndSorting(searchResults.Search, filters)
    : searchResults?.Search;

  const finalSearchResults = searchResults
    ? { ...searchResults, Search: processedSearchResults }
    : searchResults;

  return {
    contentType: "catalog",
    movies: filteredDatabase,
    searchResults: finalSearchResults,
    showSearchResults: Boolean(searchQuery),
  };
};

export default function useAppContentViewModel({
  database,
  forceFavorites = false,
}) {
  const filters = useSelector(selectAppContentState);
  const favorites = getFavoriteFilms();
  const showFavorites = forceFavorites || filters.buttonTriggered;
  const searchResults = useGetFilmInfoBySearch(filters.searchQuery);

  // Определяем режим отображения
  if (showFavorites) {
    return processFavoritesData(favorites, filters, filters.normalizedQuery);
  }

  // Обработка ошибок загрузки
  if (!database) {
    return { contentType: "loading" };
  }

  if (!database.length) {
    return { contentType: "loadError" };
  }

  // Основной режим - каталог
  return processCatalogData(
    database,
    filters,
    filters.normalizedQuery,
    searchResults
  );
}
