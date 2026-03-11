import sortingData from "../utils/sortingData";
import { applyRadioFilter } from "../utils/movieFilters";

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

export default function useMovieFilters(dataState, filters) {
  if (!dataState.sourceData) {
    return dataState;
  }

  // Обработка избранного
  if (dataState.contentType === "favorites") {
    const filteredFavorites = applyFiltersAndSorting(
      dataState.sourceData,
      filters
    );
    const searchedFavorites = filterMoviesBySearch(
      filteredFavorites,
      dataState.searchQuery
    );

    return {
      ...dataState,
      movies: searchedFavorites,
    };
  }

  // Обработка каталога
  if (dataState.contentType === "catalog") {
    const filteredDatabase = applyFiltersAndSorting(
      dataState.sourceData,
      filters
    );

    const processedSearchResults = dataState.searchResults?.Search
      ? applyFiltersAndSorting(dataState.searchResults.Search, filters)
      : dataState.searchResults?.Search;

    const finalSearchResults = dataState.searchResults
      ? { ...dataState.searchResults, Search: processedSearchResults }
      : dataState.searchResults;

    return {
      ...dataState,
      movies: filteredDatabase,
      searchResults: finalSearchResults,
      showSearchResults: Boolean(dataState.searchQuery),
    };
  }

  // Для loading и loadError просто возвращаем как есть
  return dataState;
}
