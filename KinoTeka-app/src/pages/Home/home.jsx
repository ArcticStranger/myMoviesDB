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

export default function HomePage({ search, filterData }) {

  const def = useGetFilmInfoDefaults(defaultMovies);
  const input = useGetFilmInfoBySearch(search.query);

  const searchCounter = useSelector((searchState) => searchState.query);
  console.log(searchCounter);
  const searchDispatch = useDispatch();
  return (
    <AppContent
      search={search}
      database={def}
      datasearch={input}
      filterData={filterData}
    />
  );
}
