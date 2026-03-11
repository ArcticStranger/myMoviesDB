import { useState, useEffect } from "react";
import { makeOmdbUrl } from "../constants/api";

export const useMovieDefaults = (filmNames = []) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!filmNames.length) return;

    Promise.allSettled(
      filmNames.map((filmName) =>
        fetch(makeOmdbUrl({ t: filmName })).then((value) => value.json())
      )
    ).then((results) => {
      const movies = results.flatMap((result) =>
        result.status === "fulfilled" && result.value?.Response !== "False"
          ? [result.value]
          : []
      );
      setData(movies);
    });
  }, [filmNames]);

  // Handle empty filmNames case synchronously
  if (!filmNames.length && data !== null) {
    setData(null);
  }

  return data;
};
