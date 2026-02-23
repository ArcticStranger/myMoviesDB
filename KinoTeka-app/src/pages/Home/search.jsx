import AppContent from "../../components/Layout/Content/AppContent";
import { useGetFilmInfoDefaults } from "../../hooks/useMovieInfo.jsx";

export default function SearchPage() {
  // const def = useGetFilmInfoDefaults(defaultMovies);
  return <AppContent database={def} />;
}
