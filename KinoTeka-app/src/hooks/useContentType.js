import { useSelector } from "react-redux";
import { useGetFilmInfoBySearch } from "./useMovieInfo";
import { getFavoriteFilms } from "../services/localStorage";
import { selectAppContentState } from "../components/redux/selectors/contentSelectors";

export default function useContentType({ database, forceFavorites = false }) {
  const filters = useSelector(selectAppContentState);
  const favorites = getFavoriteFilms();
  const showFavorites = forceFavorites || filters.buttonTriggered;
  const searchResults = useGetFilmInfoBySearch(filters.searchQuery);

  // Определяем режим отображения
  if (showFavorites) {
    return {
      contentType: "favorites",
      sourceData: favorites,
      searchQuery: filters.normalizedQuery,
      searchResults,
    };
  }

  // Обработка ошибок загрузки
  if (!database) {
    return { contentType: "loading" };
  }

  if (!database.length) {
    return { contentType: "loadError" };
  }

  // Основной режим - каталог
  return {
    contentType: "catalog",
    sourceData: database,
    searchQuery: filters.normalizedQuery,
    searchResults,
  };
}
