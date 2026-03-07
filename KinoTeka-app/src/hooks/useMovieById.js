import { useState, useEffect } from "react";
import { makeOmdbUrl } from "../constants/api";

export const useMovieById = (imdbID) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!imdbID) return;

    fetch(makeOmdbUrl({ i: imdbID, plot: "full" }))
      .then((value) => value.json())
      .then((value) => setData(value));
  }, [imdbID]);

  // Handle empty imdbID case synchronously
  if (!imdbID && data !== null) {
    setData(null);
  }

  return data;
};
