import AppContent from "../../components/Layout/Content/AppContent";
import { useDispatch, useSelector } from "react-redux";

import {
  useGetFilmInfoBySearch,
  useGetFilmInfoDefaults,
} from "../../hooks/useMovieInfo.jsx";

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

export default function HomePage({filter}) {
  const def = useGetFilmInfoDefaults(defaultMovies);
  return (
    <AppContent
      database={def}
      filterData={filter}
    />
  );
}
