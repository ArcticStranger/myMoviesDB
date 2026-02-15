import { Spin } from "antd";
import { filmsGrid } from "../../../styles/contentStyles";
import { FilmItem, FilmItemList } from "./ContentItems";

import { useSelector } from "react-redux";
import { useGetFilmInfoBySearch } from "../../../hooks/useMovieInfo";
import sortingData from "../../../utils/sortingData"

export default function AppContent({
  database,
  filterData
}) {
  const searchQuery = useSelector((state) => state.search.query);
  const hasSearched = useSelector((state) => state.search.hasSearched);

  const datasearch = useGetFilmInfoBySearch(searchQuery);
  

  

  if (!database || !database.length) return <Spin />;
  const keyword = filterData?.keywordQuery?.trim().toLowerCase();

  const sortedDatabase = sortingData(
    filterData.year, 
    filterData.alphabet, 
    database, 
    keyword
  );

  const keywordActive = filterData?.keyword && !!keyword;
  const genreActive = filterData?.genre && !!filterData?.selectedGenre;


  const baseSearch =
    datasearch?.Search && keywordActive
      ? datasearch.Search.filter(matchesKeyword)
      : datasearch?.Search;

  const sortedSearch =
    filterData?.year && baseSearch ? [...baseSearch].sort(byYear) : baseSearch;

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
