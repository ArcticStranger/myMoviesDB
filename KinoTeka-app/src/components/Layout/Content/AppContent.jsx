import { Spin, Typography } from "antd";
import { filmsGrid } from "../../../styles/contentStyles";
import { FilmItem, FilmItemList } from "./ContentItems";

import { useGetFilmInfoBySearch } from "../../../hooks/useMovieInfo";
import useReduxSlicer from "../../../hooks/useRedux";
import sortingData from "../../../utils/sortingData";
import { getFavoriteFilms } from "../../../services/localStorage";

export default function AppContent({ database, forceFavorites = false }) {
  const reduxData = useReduxSlicer();

  const favorData = getFavoriteFilms();
  const showFavorites = forceFavorites || reduxData.buttonTriggered;

  const datasearch = useGetFilmInfoBySearch(reduxData.searchQuery);
  const keyword = reduxData.filter_keywordQuery?.trim().toLowerCase() || "";
  const keywordForFilter = reduxData.filter_keyword ? keyword : "";
  const genreActive = reduxData.filter_genre && !!reduxData.filter_selectedGenre;

  const isKidsFriendly = (movie) => {
    const rated = String(movie?.Rated ?? "").toUpperCase();
    if (!rated || rated === "N/A") return false;
    const blocked = ["R", "NC-17", "TV-MA", "18+"];
    return !blocked.some((mark) => rated.includes(mark));
  };

  const hasRussianLanguage = (movie) => {
    const language = String(movie?.Language ?? "").toLowerCase();
    return language.includes("russian") || language.includes("рус");
  };

  const hasHighRating = (movie) => {
    const imdbRating = Number.parseFloat(movie?.imdbRating);
    if (!Number.isNaN(imdbRating) && imdbRating >= 7) return true;

    const rottenTomatoes = Array.isArray(movie?.Ratings)
      ? movie.Ratings.find((item) => item?.Source === "Rotten Tomatoes")
      : null;
    if (!rottenTomatoes?.Value) return false;
    const rottenValue = Number.parseInt(String(rottenTomatoes.Value).replace("%", ""), 10);
    return !Number.isNaN(rottenValue) && rottenValue >= 70;
  };

  const applyRadioFilter = (movies) => {
    if (!Array.isArray(movies)) return [];
    switch (reduxData.filter_radioFilter) {
      case "ZeroAdult":
        return movies.filter(isKidsFriendly);
      case "RussianLang":
        return movies.filter(hasRussianLanguage);
      case "HighRating":
        return movies.filter(hasHighRating);
      default:
        return movies;
    }
  };
  let content;

  if (showFavorites) {
    const favoritesBase = genreActive
      ? favorData.filter((movie) => movie.Genre?.includes(reduxData.filter_selectedGenre))
      : favorData;
    const radioFilteredFavorites = applyRadioFilter(favoritesBase);

    const sortedFavorites = sortingData({
      year: reduxData.filter_year,
      alphabet: reduxData.filter_alphabetSort,
      database: radioFilteredFavorites,
      keyword: keywordForFilter,
    });

    const normalizedQuery = reduxData.searchQuery?.trim().toLowerCase() || "";
    const filteredFavorites =
      reduxData.hasSearched && normalizedQuery
        ? sortedFavorites.filter((movie) =>
            movie?.Title?.toLowerCase().includes(normalizedQuery)
          )
        : sortedFavorites;

    content = (
      <div style={filmsGrid}>
        {filteredFavorites.length ? (
          filteredFavorites.map((movie) => (
            <FilmItem key={movie.imdbID || movie.Title} check={movie} />
          ))
        ) : (
          <Typography.Text>Избранные фильмы не найдены</Typography.Text>
        )}
      </div>
    );
  } else if (!database) {
    content = <Spin />;
  } else if (!database.length) {
    content = <Typography.Text>Не удалось загрузить фильмы</Typography.Text>;
  } else {
    const baseDatabase = genreActive
      ? database.filter((movie) => movie.Genre?.includes(reduxData.filter_selectedGenre))
      : database;
    const radioFilteredBase = applyRadioFilter(baseDatabase);

    const sortedDatabase = sortingData({
      year: reduxData.filter_year,
      alphabet: reduxData.filter_alphabetSort,
      database: radioFilteredBase,
      keyword: keywordForFilter,
    });

    const radioFilteredSearch = applyRadioFilter(datasearch?.Search);
    const sortedSearch = datasearch?.Search
      ? sortingData({
          year: reduxData.filter_year,
          alphabet: reduxData.filter_alphabetSort,
          database: radioFilteredSearch,
          keyword: keywordForFilter,
        })
      : datasearch?.Search;

    const searchData = datasearch
      ? { ...datasearch, Search: sortedSearch }
      : datasearch;

    content = (
      <div style={filmsGrid}>
        {reduxData.hasSearched && reduxData.searchQuery ? (
          <FilmItemList searchData={searchData} />
        ) : (
          sortedDatabase.map((movie) => (
            <FilmItem key={movie.imdbID || movie.Title} check={movie} />
          ))
        )}
      </div>
    );
  }

  return content;
}
