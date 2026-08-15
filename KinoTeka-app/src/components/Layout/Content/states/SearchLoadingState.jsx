import { Spin } from "antd";

export default function SearchLoadingState() {
  return (
    <div className="kt-state">
      <Spin size="large" />
      <div className="kt-state__text">Ищем фильмы...</div>
    </div>
  );
}
