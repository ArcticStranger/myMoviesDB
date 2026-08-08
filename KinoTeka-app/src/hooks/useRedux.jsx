import { useSelector } from "react-redux";

export default function useReduxSlicer() {
  const { query: searchQuery, hasSearched } = useSelector(
    (state) => state.search
  );
  const { hasButtonTapped: buttonTriggered } = useSelector(
    (state) => state.button
  );
  const {
    keywordQuery: filter_keywordQuery,
    keyword: filter_keyword,
    genre: filter_genre,
    selectedGenre: filter_selectedGenre,
    year: filter_year,
    alphabetSort: filter_alphabetSort,
    radioFilter: filter_radioFilter,
  } = useSelector((state) => state.filter);

  return {
    searchQuery,
    hasSearched,
    buttonTriggered,
    filter_keyword,
    filter_keywordQuery,
    filter_genre,
    filter_selectedGenre,
    filter_year,
    filter_alphabetSort,
    filter_radioFilter,
  };
}
