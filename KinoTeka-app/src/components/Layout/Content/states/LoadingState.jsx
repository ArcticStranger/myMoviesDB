import { Spin } from "antd";
import MoviesList from "./MoviesList";
import { FilmItemList } from "./ContentItems";

export default function LoadingState() {
  return <Spin size="large" />;
}
