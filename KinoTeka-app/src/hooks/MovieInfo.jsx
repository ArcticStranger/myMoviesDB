import { useState, useEffect } from "react";
import { Spin, Typography } from "antd";
import "../styles/posterStyle.css";

import { textStyle, filmCard } from "../styles/contentStyles";

export function useGetFilmInfoBySearch(filmName) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_FILMDATA_SRC}?apikey=${import.meta.env.VITE_API_KEY}&s=${filmName}`
    )
      .then((value) => value.json())
      .then((value) => setData(value));
  }, [filmName]);
  return data;
}
export function useGetFilmInfoDefault(filmName) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_FILMDATA_SRC}?apikey=${import.meta.env.VITE_API_KEY}&t=${filmName}`
    )
      .then((value) => value.json())
      .then((value) => setData(value));
  }, [filmName]);
  return data;
}

export function FilmItem({ data }) {
  const check = useGetFilmInfoDefault(data);
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
          Название: {check.Title}
          <br />
          Год выпуска: {check.Year}
          <br />
          <br />
        </Typography.Text>
      </div>
    </div>
  );
}

export function FilmItemList({ data }) {
  const searchData = useGetFilmInfoBySearch(data);
  
  if (!searchData) {
    return <Spin />;
  }
  
  if (!searchData.Search) {
    return <Typography.Text>Фильмы не найдены</Typography.Text>;
  }
  
  return (
    searchData.Search.map(({Title, Year, Type, Poster, imdbID}) => {
       console.log(Title, Year, Type, Poster)
       return ( <div style={filmCard} key={imdbID}>
        <img src={Poster} className="posterStyle" />
        <Typography.Text style={textStyle}>
          Название: {Title}
          <br />
          Год выпуска: {Year}
          <br />
          <br />
        </Typography.Text>
      </div> )

    })
  )
}

// {
//     "Search": [
//         {
//             "Title": "That Obscure Object of Desire",
//             "Year": "1977",
//             "imdbID": "tt0075824",
//             "Type": "movie",
//             "Poster": "https://m.media-amazon.com/images/M/MV5BYTcwNjY3OTAtODNmYy00OTZlLWE0YmMtMGEwYmRmNjNiMmE5XkEyXkFqcGc@._V1_SX300.jpg"
//         },
//         {
//             "Title": "The Object of My Affection",
//             "Year": "1998",
//             "imdbID": "tt0120772",
//             "Type": "movie",
//             "Poster": "https://m.media-amazon.com/images/M/MV5BNDY2MjRhMTQtY2NhYi00OWNhLWJhYjUtNzA2NDYwNGFmN2FjXkEyXkFqcGc@._V1_SX300.jpg"
//         },
//         {
//             "Title": "Love Object",
//             "Year": "2003",
//             "imdbID": "tt0328077",
//             "Type": "movie",
//             "Poster": "https://m.media-amazon.com/images/M/MV5BYmEzZTIxNDUtZmY1YS00ZTZjLTk0MTMtOGM1MGIyZGRjMGYyXkEyXkFqcGc@._V1_SX300.jpg"
//         },
//         {
//             "Title": "The Object of Beauty",
//             "Year": "1991",
//             "imdbID": "tt0102573",
//             "Type": "movie",
//             "Poster": "https://m.media-amazon.com/images/M/MV5BMTI2MzQ4ODQ3MV5BMl5BanBnXkFtZTcwODQyMzgyMQ@@._V1_SX300.jpg"
//         },
//         {
//             "Title": "Mysterious Object at Noon",
//             "Year": "2000",
//             "imdbID": "tt0269587",
//             "Type": "movie",
//             "Poster": "https://m.media-amazon.com/images/M/MV5BOTU5MTI4NTM3NF5BMl5BanBnXkFtZTcwMjMxMTgxMQ@@._V1_SX300.jpg"
//         },
//         {
//             "Title": "An Object at Rest",
//             "Year": "2015",
//             "imdbID": "tt5062438",
//             "Type": "movie",
//             "Poster": "https://m.media-amazon.com/images/M/MV5BN2EzY2JkM2EtODk2NC00MWIyLWFkYWMtNjk2N2ZjODg1ZjZjXkEyXkFqcGdeQXVyOTg3MjcwMjg@._V1_SX300.jpg"
//         },
//         {
//             "Title": "Object of Obsession",
//             "Year": "1994",
//             "imdbID": "tt0114024",
//             "Type": "movie",
//             "Poster": "https://m.media-amazon.com/images/M/MV5BMDMwODlmZDQtYTEyNi00MWVlLWE0N2YtYWZmOGI5NWRjNzU2XkEyXkFqcGc@._V1_SX300.jpg"
//         },
//         {
//             "Title": "Heavy Object",
//             "Year": "2015–2016",
//             "imdbID": "tt5236260",
//             "Type": "series",
//             "Poster": "https://m.media-amazon.com/images/M/MV5BYzcwNjQ1ZjAtNTg2Mi00MWVmLThhYjItMWE2Y2U0MjdiZWE4XkEyXkFqcGc@._V1_SX300.jpg"
//         },
//         {
//             "Title": "The Transcendental Object at the End of Time",
//             "Year": "2014",
//             "imdbID": "tt4001078",
//             "Type": "movie",
//             "Poster": "https://m.media-amazon.com/images/M/MV5BMTc3MDI2MTA2Ml5BMl5BanBnXkFtZTgwMzgzNDE2MjE@._V1_SX300.jpg"
//         },
//         {
//             "Title": "The Daily Object Show",
//             "Year": "2020–2023",
//             "imdbID": "tt14743640",
//             "Type": "series",
//             "Poster": "https://m.media-amazon.com/images/M/MV5BMjZjNDA4OWMtMGNhOC00NmE0LTg3NWEtMTYxMDc3MTkxYTNmXkEyXkFqcGdeQXVyNzEwMzUxMzU@._V1_SX300.jpg"
//         }
//     ],
//     "totalResults": "207",
//     "Response": "True"
// }
