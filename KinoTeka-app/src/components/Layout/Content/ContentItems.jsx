import { Spin } from "antd";
import MovieCard from "./MovieCard";
import SearchLoadingState from "./states/SearchLoadingState";
import SearchEmptyState from "./states/SearchEmptyState";
import SearchResultsState from "./states/SearchResultsState";

export function FilmItem({ check }) {
  if (!check) {
    return <Spin />;
  }

  return <MovieCard movie={check} ariaLabelPrefix="toggle-favorite" />;
}

// Хэш-мапа компонентов для состояний поиска
const SEARCH_STATE_COMPONENTS = {
  loading: SearchLoadingState,
  empty: SearchEmptyState,
  results: SearchResultsState,
};

// Правила определения состояния поиска
const SEARCH_STATE_RULES = {
  loading: (searchData) => !searchData,
  empty: (searchData) => !searchData.Search,
  results: () => true, // fallback
};

export function FilmItemList({ searchData }) {
  // Определяем компонент через правила
  const stateKey = Object.keys(SEARCH_STATE_RULES).find((key) =>
    SEARCH_STATE_RULES[key](searchData)
  );

  const StateComponent = SEARCH_STATE_COMPONENTS[stateKey];

  // Пропсы для каждого состояния
  const stateProps = {
    loading: {},
    empty: {},
    results: { searchData },
  };

  return <StateComponent {...stateProps[stateKey]} />;
}
