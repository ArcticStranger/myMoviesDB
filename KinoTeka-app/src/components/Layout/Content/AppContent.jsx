import LoadingState from "./states/LoadingState";
import ErrorState from "./states/ErrorState";
import FavoritesState from "./states/FavoritesState";
import DefaultState from "./states/DefaultState";
import SearchResultsState from "./states/SearchResultsState";
import useAppContentViewModel from "../../../hooks/useAppContentViewModel";

// Хэш-мапа компонентов для каждого состояния
const STATE_COMPONENTS = {
  loading: LoadingState,
  loadError: ErrorState,
  favorites: FavoritesState,
  searchResults: SearchResultsState,
  default: DefaultState,
};

// Правила определения состояния
const STATE_RULES = {
  searchResults: (viewModel) => viewModel.shouldShowSearchResults,
  loading: (viewModel) => viewModel.mode === "loading",
  loadError: (viewModel) => viewModel.mode === "loadError",
  favorites: (viewModel) => viewModel.mode === "favorites",
  default: () => true, // всегда true как fallback
};

export default function AppContent({ database, forceFavorites = false }) {
  const viewModel = useAppContentViewModel({ database, forceFavorites });

  // Определяем компонент через правила
  const componentKey = Object.keys(STATE_RULES).find((key) =>
    STATE_RULES[key](viewModel)
  );

  const StateComponent = STATE_COMPONENTS[componentKey];

  // Пропсы для каждого состояния
  const stateProps = {
    favorites: { movies: viewModel.favoritesMovies },
    searchResults: { searchData: viewModel.searchData },
    default: { movies: viewModel.movies },
    loading: {},
    loadError: {},
  };

  return <StateComponent {...stateProps[componentKey]} />;
}
