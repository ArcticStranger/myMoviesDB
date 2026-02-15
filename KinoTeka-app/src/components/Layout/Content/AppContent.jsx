import { Spin } from "antd";
import { filmsGrid } from "../../../styles/contentStyles";
import { FilmItem, FilmItemList } from "./ContentItems";

export default function AppContent({
  search,
  database,
  datasearch,
  filterData,
}) {
  if (!database || !database.length) return <Spin />;

  const parseYear = (value) => {
    const num = Number.parseInt(value, 10);
    return Number.isNaN(num) ? 0 : num;
  };

  const byYear = (a, b) => parseYear(a.Year) - parseYear(b.Year);

  const keyword = filterData?.keywordQuery?.trim().toLowerCase();
  const keywordActive = filterData?.keyword && !!keyword;
  const genreActive = filterData?.genre && !!filterData?.selectedGenre;

  const matchesKeyword = (movie) => {
    if (!keywordActive) return true;
    return Object.values(movie).some((value) => {
      if (value == null) return false;
      return String(value).toLowerCase().includes(keyword);
    });
  };

  const baseDatabase = database.filter((movie) => {
    if (genreActive && !movie.Genre?.includes(filterData.selectedGenre)) {
      return false;
    }
    return matchesKeyword(movie);
  });

  const sortedDatabase = filterData?.year
    ? [...baseDatabase].sort(byYear)
    : baseDatabase;

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
        {search?.hasSearched ? (
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
