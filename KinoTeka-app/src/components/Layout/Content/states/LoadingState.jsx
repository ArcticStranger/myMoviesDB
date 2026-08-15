import { Spin } from "antd";

export default function LoadingState() {
  return (
    <div className="kt-state">
      <Spin size="large" />
      <div className="kt-state__text">Загружаем каталог фильмов...</div>
    </div>
  );
}
