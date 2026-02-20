import { Spin, Typography } from "antd";
import { filmsGrid } from "../../../styles/contentStyles";
import { FilmItem, FilmItemList } from "./ContentItems";

import { useSelector } from "react-redux";
import { useGetFilmInfoBySearch } from "../../../hooks/useMovieInfo";
import sortingData from "../../../utils/sortingData";

export default function AppContent({ database, filterData }) {
  const searchQuery = useSelector((state) => state.search.query);
  const hasSearched = useSelector((state) => state.search.hasSearched);

  const datasearch = useGetFilmInfoBySearch(searchQuery);

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
    <>
      <div style={filmsGrid}>
        {hasSearched && searchQuery ? (
          <FilmItemList searchData={searchData} />
        ) : (
          sortedDatabase.map((movie) => (
            <FilmItem key={movie.imdbID || movie.Title} check={movie} />
          ))
        )}
      </div>
    </>
  );
}
