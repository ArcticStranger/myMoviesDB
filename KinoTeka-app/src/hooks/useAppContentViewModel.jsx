import { useSelector } from "react-redux";
import { useGetFilmInfoBySearch } from "./useMovieInfo";
import { getFavoriteFilms } from "../services/localStorage";
import sortingData from "../utils/sortingData";
import { applyRadioFilter } from "../utils/movieFilters";
import { selectAppContentState } from "../components/redux/selectors/contentSelectors";

function filterByGenre(movies, genreActive, selectedGenre) {
  if (!Array.isArray(movies)) return [];
  if (!genreActive) return movies;
  return movies.filter((movie) => movie.Genre?.includes(selectedGenre));
}

function sortAndFilterMovies(movies, reduxData) {
  return sortingData({
    year: reduxData.year,
    alphabet: reduxData.alphabetSort,
    database: applyRadioFilter(
      filterByGenre(movies, reduxData.genreActive, reduxData.selectedGenre),
      reduxData.radioFilter
    ),
    keyword: reduxData.keywordForFilter,
  });
}

export default function useAppContentViewModel({ database, forceFavorites = false }) {
  const reduxData = useSelector(selectAppContentState);
  const favoriteData = getFavoriteFilms();
  const showFavorites = forceFavorites || reduxData.buttonTriggered;
  const searchDataRaw = useGetFilmInfoBySearch(reduxData.searchQuery);
  let viewModel;

  if (showFavorites) {
    const sortedFavorites = sortAndFilterMovies(favoriteData, reduxData);
    const favoritesMovies =
      reduxData.hasSearched && reduxData.normalizedQuery
        ? sortedFavorites.filter((movie) =>
            movie?.Title?.toLowerCase().includes(reduxData.normalizedQuery)
          )
        : sortedFavorites;

    viewModel = {
      mode: "favorites",
      favoritesMovies,
    };
  } else if (!database) {
    viewModel = { mode: "loading" };
  } else if (!database.length) {
    viewModel = { mode: "loadError" };
  } else {
    const movies = sortAndFilterMovies(database, reduxData);
    const sortedSearch = searchDataRaw?.Search
      ? sortAndFilterMovies(searchDataRaw.Search, reduxData)
      : searchDataRaw?.Search;

    const searchData = searchDataRaw
      ? { ...searchDataRaw, Search: sortedSearch }
      : searchDataRaw;

    viewModel = {
      mode: "catalog",
      movies,
      searchData,
      shouldShowSearchResults:
        reduxData.hasSearched && Boolean(reduxData.searchQuery),
    };
  }

  return viewModel;
}
