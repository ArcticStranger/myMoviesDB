import { useState } from "react";
import { useLocation } from "react-router-dom";
import { ROUTES } from "../constants/routes.js";

export function useBurgerMenu() {
  const location = useLocation();
  const [burgerState, setBurgerState] = useState(null); // null | 'close' | 'open'

  const isMovieDescriptionRoute = location.pathname.startsWith(
    ROUTES.MOVIE_DETAIL.replace(":imdbID", "")
  );

  // Close burger when navigating to movie description
  const isBurgerOpenComputed =
    burgerState === "open" && !isMovieDescriptionRoute;
  const isBurgerMode = burgerState !== null;

  const setBurgerMenuState = (action) => {
    const actions = {
      enable: () => setBurgerState("close"),
      disable: () => setBurgerState(null),
      open: () =>
        !isMovieDescriptionRoute &&
        burgerState !== null &&
        setBurgerState("open"),
      close: () => setBurgerState("close"), // default action
      toggle: () => setBurgerState(burgerState === "open" ? "close" : "open"),
    };

    const selectedAction = actions[action] || actions.close;
    selectedAction();
  };

  return {
    // State
    burgerState,
    isBurgerOpenComputed,
    isBurgerMode,
    isMovieDescriptionRoute,

    // Actions
    setBurgerMenuState,
  };
}
