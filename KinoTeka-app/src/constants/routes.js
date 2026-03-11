export const ROUTES = {
  MAIN: "/main",
  SEARCH: "/search",
  MOVIE_DETAIL: "/movie/:imdbID",
  FAVORITES: "/favorites",
  HOME: "/",
};

export const getMovieDetailRoute = (imdbID) =>
  `${ROUTES.MOVIE_DETAIL.replace(":imdbID", imdbID)}`;

export const NAVIGATION_ITEMS = [
  {
    path: ROUTES.MAIN,
    title: "Главная",
    component: "HomePage",
  },
  {
    path: ROUTES.SEARCH,
    title: "Поиск",
    component: "SearchPage",
  },
  {
    path: ROUTES.FAVORITES,
    title: "Избранное",
    component: "FavoriteList",
  },
];
