import AppContent from "../../components/Layout/Content/AppContent";

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

  return (
    <AppContent
      search={search}
      database={def}
      datasearch={input}
      filterData={filterData}
    />
  );
}
