import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  setQuery,
  clearQuery,
} from "../components/redux/partReducers/searchSlice";
import { useNavigate } from "react-router-dom";

export default function useSearch() {
  const [searchInput, setSearchInput] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = () => {
    const trimmedQuery = searchInput.trim();
    if (!trimmedQuery) return;

    // Устанавливаем запрос в Redux и помечаем что поиск был выполнен
    dispatch(setQuery(trimmedQuery));

    // Очищаем локальный инпут после поиска
    setSearchInput("");

    // Переходим на страницу поиска
    navigate("/search");
  };

  const clearSearch = () => {
    // Очищаем и локальное состояние и Redux
    setSearchInput("");
    dispatch(clearQuery());
  };

  return {
    searchInput,
    setSearchInput,
    handleSearch,
    clearSearch,
  };
}
