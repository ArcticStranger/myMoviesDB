import { useSelector } from "react-redux";

export default function useReduxSlicer() {
  const reduxState = useSelector((state) => ({
    search: state.search,
    button: state.button,
    filter: state.filter,
  }));

  return {
    searchQuery: reduxState.search.query,
    hasSearched: reduxState.search.hasSearched,
    buttonTriggered: reduxState.button.hasButtonTapped,
    keywordQuery: reduxState.filter.keywordQuery,
    keyword: reduxState.filter.keyword,
    genre: reduxState.filter.genre,
    selectedGenre: reduxState.filter.selectedGenre,
    year: reduxState.filter.year,
    alphabetSort: reduxState.filter.alphabetSort,
    radioFilter: reduxState.filter.radioFilter,
  };
}
