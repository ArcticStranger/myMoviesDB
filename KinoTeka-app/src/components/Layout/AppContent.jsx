import { Layout, Typography, Spin } from 'antd'
import { useState, useEffect } from 'react'
import { 
  contentStyle, 
  textStyle, 
  filmCard, 
  posterStyle, 
  filmsGrid } from '../../styles/contentStyles'

const { Text } = Typography;

function useGetFilmInfo(filmName) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=ea46ba8f&t=${filmName}`)
      .then(value => value.json())
      .then(value => setData(value));
    }, [filmName]);

    return data;
}


function FilmItem({ filmName }) {
  const data = useGetFilmInfo(filmName);
  const [isHovered, setIsHovered] = useState(false);
  if (!data) {
    return <Spin />;
  }

  return (
    <div style={{
     marginTop: 24,
     marginLeft: 24,
     }}>

     <div 
     style={filmCard}
     onMouseEnter={() => setIsHovered(true)}
     onMouseLeave={() => setIsHovered(false)}
     >
    <img 
      src={data.Poster}
      alt={data.Title}
      style={posterStyle(isHovered)}
    />
    <Text style={textStyle}>
  Название: {data.Title}
  <br/>
  Год выпуска: {data.Year}
  <br/>
  Длительность: {data.Runtime}
  <br/>
  <br/>
    </Text>
    </div>
    </div>
  );
}


export default function AppContent() {
  const storage = [
    "The King's Speech",
    "The Hateful Eight",
    "The Electrical Life of Louis Wain",
    "Jojo Rabbit",
    "District 9",
    "The Green Mile",
    "Jobs",
    "Chappie",
    "Pacific Rim",
  ]
  const data = `The King's Speech`;
  const dataResult = useGetFilmInfo(storage)


  return (
    <Layout.Content style={contentStyle}>
        <div style={filmsGrid} 
        
        >
        {storage.map((film) => (
          <FilmItem key={film} filmName={film}/>
        ))
        }
        </div>
    </Layout.Content>
  )
}  

 