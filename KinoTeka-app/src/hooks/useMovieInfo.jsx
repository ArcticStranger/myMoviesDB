import { useState, useEffect } from "react";
import { Spin, Typography } from "antd";
import "../styles/posterStyle.css";

import { textStyle, filmCard } from "../styles/contentStyles";

const OMDB_URL = import.meta.env.VITE_FILMDATA_SRC;
const OMDB_KEY = import.meta.env.VITE_API_KEY;
const makeOmdbUrl = (params) =>
  `${OMDB_URL}?${new URLSearchParams({ apikey: OMDB_KEY, ...params }).toString()}`;

export function useGetFilmInfoBySearch(filmName) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();

    if (!filmName) {
      setData(null);
    } else {
      async function loadSearchWithDetails() {
        try {
          const searchResponse = await fetch(
            makeOmdbUrl({ s: filmName }),
            { signal: abortController.signal }
          );
          const searchData = await searchResponse.json();

          if (!Array.isArray(searchData?.Search)) {
            setData(searchData);
          } else {
            const detailedResults = await Promise.allSettled(
              searchData.Search.map((movie) =>
                fetch(
                  makeOmdbUrl({ i: movie.imdbID }),
                  { signal: abortController.signal }
                ).then((value) => value.json())
              )
            );

            const detailedSearch = detailedResults.map((result, index) => {
              if (result.status === "fulfilled" && result.value?.Response !== "False") {
                return result.value;
              }
              return searchData.Search[index];
            });

            setData({ ...searchData, Search: detailedSearch });
          }
        } catch (error) {
          if (error?.name !== "AbortError") {
            setData({ Search: [] });
          }
        }
      }

      loadSearchWithDetails();
    }

    return () => abortController.abort();
  }, [filmName]);

  return data;
}

export function useGetFilmInfoDefaults(filmNames = []) {
  const [data, setData] = useState(null);
  useEffect(() => {
    if (!filmNames.length) {
      setData(null);
      return;
    }
    Promise.allSettled(
      filmNames.map((filmName) =>
        fetch(
          makeOmdbUrl({ t: filmName })
        ).then((value) => value.json())
      )
    ).then((results) => {
      const movies = results
        .filter((result) => result.status === "fulfilled")
        .map((result) => result.value)
        .filter((movie) => movie?.Response !== "False");
      setData(movies);
    });
  }, [filmNames]);
  return data;
}

export function useGetFilmInfoById(imdbID) {
  const [data, setData] = useState(null);
  useEffect(() => {
    if (!imdbID) {
      setData(null);
      return;
    }
    fetch(
   makeOmdbUrl({ i: imdbID, plot: "full" })
    )
      .then((value) => value.json())
      .then((value) => setData(value));
  }, [imdbID]);
  return data;
}

export function FilmItemDesc({ data }) {
  const check = useGetFilmInfoById(data);
  return !check ? (
    <Spin />
  ) : (
    <div
      style={{
        marginTop: 24,
        marginLeft: 24,
      }}
    >
      <div style={filmCard}>
        <img src={check.Poster} alt={check.Title} className="posterStyle" />
        <Typography.Text style={textStyle}>
          <br />
          imdbID: {check.imdbID}
          <br />
        </Typography.Text>
      </div>
    </div>
  );
}
