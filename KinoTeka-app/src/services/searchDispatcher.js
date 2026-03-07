import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { useCallback } from "react";
import { setQuery } from "../components/redux/partReducers/searchSlice";
import { clearButton } from "../components/redux/partReducers/buttonSlice";

const SEARCH_PATH = "/search";

export default function useTriggerInput() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  return useCallback(
    (value) => {
      // Валидация входных данных
      if (value == null || typeof value !== "string") {
        console.warn("useTriggerInput: value must be a string");
        return;
      }

      const nextQuery = value.trim();

      // Не выполняем действия если запрос пустой
      if (!nextQuery) {
        console.warn("useTriggerInput: empty query after trim");
        return;
      }

      // Обновляем состояние (общая логика для обоих случаев)
      dispatch(setQuery(nextQuery));
      dispatch(clearButton());

      // Навигация только если не на странице поиска
      if (location.pathname !== SEARCH_PATH) {
        navigate(SEARCH_PATH);
      }
    },
    [dispatch, navigate, location.pathname]
  );
}
