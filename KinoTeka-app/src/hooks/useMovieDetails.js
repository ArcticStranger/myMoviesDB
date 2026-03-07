import { useState, useEffect } from "react";
import { makeOmdbUrl } from "../constants/api";

export const useMovieDetails = (movies) => {
  const [detailedMovies, setDetailedMovies] = useState(null);

  useEffect(() => {
    if (!movies?.length) return;

    const abortController = new AbortController();

    const loadDetails = async () => {
      const detailedResults = await Promise.allSettled(
        movies.map((movie) =>
          fetch(makeOmdbUrl({ i: movie.imdbID }), {
            signal: abortController.signal,
          }).then((value) => value.json())
        )
      );

      const detailedSearch = detailedResults.map((result, index) => {
        if (
          result.status === "fulfilled" &&
          result.value?.Response !== "False"
        ) {
          return result.value;
        }
        return movies[index];
      });

      setDetailedMovies(detailedSearch);
    };

    loadDetails();

    return () => abortController.abort();
  }, [movies]);

  return detailedMovies;
};
