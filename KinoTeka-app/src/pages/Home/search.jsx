import AppContent from "../../components/Layout/Content/AppContent";
import { useGetFilmInfoDefaults } from "../../hooks/useMovieInfo.jsx";

const defaultClickForSearch = [
  null,
]

export default function SearchPage() {
  const def = useGetFilmInfoDefaults(defaultClickForSearch);
  return <AppContent database={def}/>;
}
