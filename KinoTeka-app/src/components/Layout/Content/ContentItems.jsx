import { Spin, Typography } from "antd";
import { Link } from "react-router-dom";
import "../../../styles/posterStyle.css";
import { textStyle, filmCard } from "../../../styles/contentStyles";


export function FilmItem({ check }) {
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
        <Link to={`/movie/${check.imdbID}`} style={{ textDecoration: "none" }}>
          <img src={check.Poster} alt={check.Title} className="posterStyle" />
        </Link>
        <Typography.Text style={textStyle}>
          Название: {check.Title}
          <br />
          Год выпуска: {check.Year}
          <br />
          Жанр: {check.Genre}
          <br />
        </Typography.Text>
      </div>
    </div>
  );
}

export function FilmItemList({ searchData }) {
  
  if (!searchData) {
    return <Spin />;
  }
  
  if (!searchData.Search) {
    return <Typography.Text>Фильмы не найдены</Typography.Text>;
  }
  
  return (
    searchData.Search.map(({ Title, Year, Type, Poster, imdbID }) => {
       console.log(Title, Year, Type, Poster)
       return ( <div style={filmCard} key={imdbID}>
        <Link to={`/movie/${imdbID}`} style={{ textDecoration: "none" }}>
          <img src={Poster} className="posterStyle" />
        </Link>
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

// export function FilmItemDesc({ data }) {
//   const check = useGetFilmInfoById(data);
//   return !check ? (
//     <Spin />
//   ) : (
//     <div
//       style={{
//         marginTop: 24,
//         marginLeft: 24,
//       }}
//     >
//       <div style={filmCard}>
//         <img src={check.Poster} alt={check.Title} className="posterStyle" />
//         <Typography.Text style={textStyle}>
//           <br />
//           imdbID: {check.imdbID}
//           <br />
//         </Typography.Text>
//       </div>
//     </div>
//   );
// }

