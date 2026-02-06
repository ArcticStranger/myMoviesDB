import AppHeader from "../../components/Layout/Header/AppHeader";
import AppContent from "../../components/Layout/Content/AppContent";
import AppSider from "../../components/Layout/Sidebar/AppSider";
import AppFooter from "../../components/Layout/Footer/AppFooter";
import { Layout, Spin } from "antd";
import useSearch from "../../hooks/useSearch.jsx";

import {
  useGetFilmInfoBySearch,
  useGetFilmInfoDefaults
} from "../../hooks/useMovieInfo.jsx"

const layoutStyle = {
  borderRadius: 8,
  overflow: "hidden",
};

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

export default function HomePage({onSearch}) {
  const def = useGetFilmInfoDefaults(defaultMovies);
  const input = useGetFilmInfoBySearch(onSearch.query);

  return (
        <AppContent search={onSearch} database={def} datasearch={input} />
  );
}
