import { useSelector } from "react-redux";

export default function useReduxSlicer() {
  const searchQuery = useSelector((state) => state.search.query);
    const hasSearched = useSelector((state) => state.search.hasSearched);
    const buttonTriggered = useSelector((state) => state.button.hasButtonTapped);
  
    const filter_keywordQuery = useSelector((state) => state.filter.keywordQuery);
    const filter_keyword = useSelector((state) => state.filter.keyword);
    const filter_genre = useSelector((state) => state.filter.genre);
    const filter_selectedGenre = useSelector(
      (state) => state.filter.selectedGenre
    );
    const filter_year = useSelector((state) => state.filter.year);
    const filter_alphabetSort = useSelector((state) => state.filter.alphabetSort);
    const filter_radioFilter = useSelector((state) => state.filter.radioFilter);

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
    }
}
