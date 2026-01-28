import { useState, useEffect } from "react";

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
