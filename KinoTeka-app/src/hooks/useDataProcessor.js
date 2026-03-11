import { useSelector } from "react-redux";
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

export default function useDataProcessor(contentTypeData) {
  const filters = useSelector(selectAppContentState);

  if (!contentTypeData.sourceData) {
    return contentTypeData;
  }

  // Обработка избранного
  if (contentTypeData.contentType === "favorites") {
    const filteredFavorites = applyFiltersAndSorting(
      contentTypeData.sourceData,
      filters
    );
    const searchedFavorites = filterMoviesBySearch(
      filteredFavorites,
      contentTypeData.searchQuery
    );

    return {
      ...contentTypeData,
      movies: searchedFavorites,
    };
  }

  // Обработка каталога
  if (contentTypeData.contentType === "catalog") {
    const filteredDatabase = applyFiltersAndSorting(
      contentTypeData.sourceData,
      filters
    );

    const processedSearchResults = contentTypeData.searchResults?.Search
      ? applyFiltersAndSorting(contentTypeData.searchResults.Search, filters)
      : contentTypeData.searchResults?.Search;

    const finalSearchResults = contentTypeData.searchResults
      ? { ...contentTypeData.searchResults, Search: processedSearchResults }
      : contentTypeData.searchResults;

    return {
      ...contentTypeData,
      movies: filteredDatabase,
      searchResults: finalSearchResults,
      showSearchResults: Boolean(contentTypeData.searchQuery),
    };
  }

  // Для loading и loadError просто возвращаем как есть
  return contentTypeData;
}
