import { Spin, Typography } from "antd";
import { filmsGrid } from "../../../styles/contentStyles";
import { FilmItem, FilmItemList } from "./ContentItems";

import { useSelector, useDispatch } from "react-redux";
import { useGetFilmInfoBySearch } from "../../../hooks/useMovieInfo";
import sortingData from "../../../utils/sortingData";
import { getFavoriteFilms } from "../../../services/localStorage";

export default function AppContent({ database, forceFavorites = false }) {
  const searchQuery = useSelector((state) => state.search.query);
  const hasSearched = useSelector((state) => state.search.hasSearched);
  const buttonTriggered = useSelector((state) => state.button.hasButtonTapped);
  const favorData = getFavoriteFilms();
  const showFavorites = forceFavorites || buttonTriggered;

  const filter_keywordQuery = useSelector((state) => state.filter.keywordQuery);
  const filter_keyword = useSelector((state) => state.filter.keyword);
  const filter_genre = useSelector((state) => state.filter.genre);
  const filter_selectedGenre = useSelector((state) => state.filter.selectedGenre);
  const filter_year = useSelector((state) => state.filter.year);
  const filter_yearQuery = useSelector((state) => state.filter.yearQuery);
  const filter_alphabetSort = useSelector((state) => state.filter.alphabetSort);
  const filter_childRatingSort = useSelector((state) => state.filter.childRatingSort);


  const datasearch = useGetFilmInfoBySearch(searchQuery);
  const keyword = filter_keywordQuery?.trim().toLowerCase() || "";
  const keywordForFilter = filter_keyword ? keyword : "";
  const genreActive = filter_genre && !!filter_selectedGenre;

  if (showFavorites) {
    const favoritesBase = genreActive
      ? favorData.filter((movie) => movie.Genre?.includes(filter_selectedGenre))
      : favorData;

    const sortedFavorites = sortingData({
      year: filter_year,
      alphabet: filter_alphabetSort,
      database: favoritesBase,
      keyword: keywordForFilter,
    });

    const normalizedQuery = searchQuery?.trim().toLowerCase() || "";
    const filteredFavorites = hasSearched && normalizedQuery
      ? sortedFavorites.filter((movie) =>
          movie?.Title?.toLowerCase().includes(normalizedQuery)
        )
      : sortedFavorites;

    return (
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
  }

  if (!database) return <Spin />;
  if (!database.length)
    return <Typography.Text>Не удалось загрузить фильмы</Typography.Text>;

  const baseDatabase = genreActive
    ? database.filter((movie) => movie.Genre?.includes(filter_selectedGenre))
    : database;

  const sortedDatabase = sortingData({
    year: filter_year,
    alphabet: filter_alphabetSort,
    database: baseDatabase,
    keyword: keywordForFilter,
  });

  const sortedSearch = datasearch?.Search
    ? sortingData({
        year: filter_year,
        alphabet: filter_alphabetSort,
        database: datasearch.Search,
        keyword: keywordForFilter,
      })
    : datasearch?.Search;

  const searchData = datasearch
    ? { ...datasearch, Search: sortedSearch }
    : datasearch;

  return (
    <div style={filmsGrid}>
      {hasSearched && searchQuery ? (
        <FilmItemList searchData={searchData} />
      ) : (
        sortedDatabase.map((movie) => (
          <FilmItem key={movie.imdbID || movie.Title} check={movie} />
        ))
      )}
    </div>
  );
}
