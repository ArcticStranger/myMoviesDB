export default function ErrorState() {
  return (
    <div className="kt-state">
      <div className="kt-state__title" style={{ color: "#f87171" }}>
        Не удалось загрузить фильмы
      </div>
      <div className="kt-state__text">
        Проверьте подключение к интернету или попробуйте позже.
      </div>
    </div>
  );
}
