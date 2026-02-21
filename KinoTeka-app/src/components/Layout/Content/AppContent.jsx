import { Spin, Typography } from "antd";
import { filmsGrid } from "../../../styles/contentStyles";
import { FilmItem, FilmItemList } from "./ContentItems";

import { useSelector } from "react-redux";
import { useGetFilmInfoBySearch } from "../../../hooks/useMovieInfo";
import sortingData from "../../../utils/sortingData";
import { getFavoriteFilms } from "../../../services/localStorage";

export default function AppContent({ database, filterData }) {
  const searchQuery = useSelector((state) => state.search.query);
  const hasSearched = useSelector((state) => state.search.hasSearched);
  const buttonTriggered = useSelector((state) => state.button.hasButtonTapped);

  const datasearch = useGetFilmInfoBySearch(searchQuery);
  // console.log(getFavoriteFilms());
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

  const favorData = getFavoriteFilms();
  console.log(favorData);
  return (
    <>
      <div style={filmsGrid}>
        {hasSearched && searchQuery ? ( buttonTriggered ? 
        favorData.map((movie) => (
        <FilmItem key={movie.imdbID || movie.Title} check={movie}/> 
        )) :
          <FilmItemList searchData={searchData} />
        ) : ( buttonTriggered ? 
        favorData.map((movie) => (
        <FilmItem key={movie.imdbID || movie.Title} check={movie}/> 
        ))
        :
          sortedDatabase.map((movie) => (
            <FilmItem key={movie.imdbID || movie.Title} check={movie} />
          ))
        )}
      </div>
    </>
  );
}
