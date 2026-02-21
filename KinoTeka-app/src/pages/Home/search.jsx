import AppContent from "../../components/Layout/Content/AppContent";
import { useGetFilmInfoDefaults } from "../../hooks/useMovieInfo.jsx";

export const defaultMovies = [
  "The King's Speech",
  "The Hateful Eight",
  "Jojo Rabbit",
  "District 9",
  "The Green Mile",
  "Jobs",
  "Chappie",
  "Pacific Rim",
];

export default function SearchPage({ filterData }) {
  const def = useGetFilmInfoDefaults(defaultMovies);
  return <AppContent database={def} filterData={filterData} />;
}