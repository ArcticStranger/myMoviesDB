import { useState, useEffect } from "react";
import { Spin, Typography } from "antd";
import "../styles/posterStyle.css"

import {
  textStyle,
  filmCard,
} from "../styles/contentStyles";

export function useGetFilmInfo(filmName) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_FILMDATA_SRC}/?i=tt3896198&apikey=${import.meta.env.VITE_API_KEY}&t=${filmName}`
    )
      .then((value) => value.json())
      .then((value) => setData(value));
  }, [filmName]);
  return data;
}

export function FilmItem({ filmName }) {
  const data = useGetFilmInfo(filmName);
  return (
    !data ? <Spin /> : (
    <div
      style={{
        marginTop: 24,
        marginLeft: 24,
      }}
    >
      <div
        style={filmCard}
      >
        <img
          src={data.Poster}
          alt={data.Title}
          className="posterStyle"
        />
        <Typography.Text style={textStyle}>
          Название: {data.Title}
          <br />
          Год выпуска: {data.Year}
          <br />
          Длительность: {data.Runtime}
          <br />
          <br />
        </Typography.Text>
      </div>
    </div>
  )
);
}
