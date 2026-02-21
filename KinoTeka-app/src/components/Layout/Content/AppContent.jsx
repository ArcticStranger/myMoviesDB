import { Spin, Typography } from "antd";
import { filmsGrid } from "../../../styles/contentStyles";
import { FilmItem, FilmItemList } from "./ContentItems";

import { useSelector } from "react-redux";
import { useGetFilmInfoBySearch } from "../../../hooks/useMovieInfo";
import sortingData from "../../../utils/sortingData";
import { getFavoriteFilms } from "../../../services/localStorage";

export default function AppContent({ database, filterData, forceFavorites = false }) {
  const searchQuery = useSelector((state) => state.search.query);
  const hasSearched = useSelector((state) => state.search.hasSearched);
  const buttonTriggered = useSelector((state) => state.button.hasButtonTapped);
  const favorData = getFavoriteFilms();
  const showFavorites = forceFavorites || buttonTriggered;

  const datasearch = useGetFilmInfoBySearch(searchQuery);

  if (showFavorites) {
    const normalizedQuery = searchQuery?.trim().toLowerCase() || "";
    const filteredFavorites = hasSearched && normalizedQuery
      ? favorData.filter((movie) =>
          movie?.Title?.toLowerCase().includes(normalizedQuery)
        )
      : favorData;

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

  const keyword = filterData?.keywordQuery?.trim().toLowerCase() || "";
  const keywordForFilter = filterData?.keyword ? keyword : "";
  const genreActive = filterData?.genre && !!filterData?.selectedGenre;

  const baseDatabase = genreActive
    ? database.filter((movie) => movie.Genre?.includes(filterData.selectedGenre))
    : database;

  const sortedDatabase = sortingData({
    year: filterData?.year,
    alphabet: filterData?.alphabet,
    database: baseDatabase,
    keyword: keywordForFilter,
  });

  const sortedSearch = datasearch?.Search
    ? sortingData({
        year: filterData?.year,
        alphabet: filterData?.alphabet,
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
