import AppContent from "../../components/Layout/Content/AppContent";
import { useGetFilmInfoDefaults } from "../../hooks/useMovieInfo.jsx";

const defaultSearchQuery = [];

export default function SearchPage() {
  const defaultMovies = useGetFilmInfoDefaults(defaultSearchQuery);
  return <AppContent database={defaultMovies} />;
}
