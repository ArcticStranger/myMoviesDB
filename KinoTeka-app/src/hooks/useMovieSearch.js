import { useState, useEffect } from "react";
import { makeOmdbUrl } from "../constants/api";

export const useMovieSearch = (filmName) => {
  const [searchData, setSearchData] = useState(null);

  useEffect(() => {
    if (!filmName) return;

    const abortController = new AbortController();

    const loadSearch = async () => {
      try {
        const searchResponse = await fetch(makeOmdbUrl({ s: filmName }), {
          signal: abortController.signal,
        });
        const data = await searchResponse.json();

        if (!Array.isArray(data?.Search)) {
          setSearchData(data);
          return;
        }

        setSearchData({ ...data, Search: data.Search });
      } catch (error) {
        if (error?.name !== "AbortError") {
          setSearchData({ Search: [] });
        }
      }
    };

    loadSearch();

    return () => abortController.abort();
  }, [filmName]);

  // Handle empty filmName case synchronously
  if (!filmName && searchData !== null) {
    setSearchData(null);
  }

  return searchData;
};
