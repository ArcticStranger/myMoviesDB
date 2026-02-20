import { useState } from "react";
import { getFavoriteFilm, setFavoriteFilm } from "../services/localStorage";

export default function useLocalStorage() {
  const [storage, setStorage] = useState(null);
  const [isEdited, setIsEdited] = useState(false); 
  

  let check;

  const onStorage = (value) => {
    setStorage(value);
    setIsEdited(true);
    check = getFavoriteFilm(value);
    setFavoriteFilm(value);
  };

  return {
    storage,
    isEdited,
    check,
  }

}