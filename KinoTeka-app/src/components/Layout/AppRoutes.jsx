import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../../pages/Home/home.jsx";
import SearchPage from "../../pages/Home/search.jsx";
import MovieDescription from "../../pages/Home/MovieDesc.jsx";
import FavoriteList from "../../pages/Home/FavoriteList.jsx";
import { ROUTES } from "../../constants/routes.js";

export default function AppRoutes() {
  return (
    <Routes>
      <Route
        path={ROUTES.HOME}
        element={<Navigate to={ROUTES.MAIN} replace />}
      />
      <Route path={ROUTES.MAIN} element={<HomePage />} />
      <Route path={ROUTES.SEARCH} element={<SearchPage />} />
      <Route path={ROUTES.MOVIE_DETAIL} element={<MovieDescription />} />
      <Route path={ROUTES.FAVORITES} element={<FavoriteList />} />
    </Routes>
  );
}
