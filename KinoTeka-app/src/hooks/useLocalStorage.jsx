import { useState } from "react";
import { getFavoriteFilm, setFavoriteFilm } from "../services/localStorage";

export default function useLocalStorage(key) {
  // Lazy initial state - читаем localStorage только при первом рендере
  const [storage, setStorage] = useState(() => getFavoriteFilm(key));
  const [isEdited, setIsEdited] = useState(false);

  const updateStorage = (value) => {
    setStorage(value);
    setIsEdited(true);
    setFavoriteFilm(key, value);
  };

  const clearStorage = () => {
    setStorage(null);
    setIsEdited(false);
    setFavoriteFilm(key, null);
  };

  return {
    storage,
    isEdited,
    updateStorage,
    clearStorage,
    hasValue: storage !== null,
  };
}
