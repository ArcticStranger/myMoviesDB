import { useState, useEffect } from "react";
import { Spin, Typography } from "antd";
import "../styles/posterStyle.css";

import { textStyle, filmCard } from "../styles/contentStyles";

export function useGetFilmInfoBySearch(filmName) {
  const [data, setData] = useState(null);
  useEffect(() => {
    if (!filmName) {
      setData(null);
      return;
    }
    fetch(
      `${import.meta.env.VITE_FILMDATA_SRC}?apikey=${import.meta.env.VITE_API_KEY}&s=${encodeURIComponent(filmName)}`
    )
      .then((value) => value.json())
      .then((value) => setData(value))
      .catch(() => setData({ Search: [] }));
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
          `${import.meta.env.VITE_FILMDATA_SRC}?apikey=${import.meta.env.VITE_API_KEY}&t=${encodeURIComponent(filmName)}`
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
      `${import.meta.env.VITE_FILMDATA_SRC}?apikey=${import.meta.env.VITE_API_KEY}&i=${imdbID}&plot=full`
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
