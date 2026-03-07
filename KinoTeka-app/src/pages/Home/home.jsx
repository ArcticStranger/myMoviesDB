import AppContent from "../../components/Layout/Content/AppContent";
import { useGetFilmInfoDefaults } from "../../hooks/useMovieInfo.jsx";
import { defaultMovies } from "../../constants/movies.js";

export default function HomePage() {
  const def = useGetFilmInfoDefaults(defaultMovies);
  return <AppContent database={def} />;
}
