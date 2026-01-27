import { Layout, Typography, Spin } from 'antd'
import { useState, useEffect } from 'react'

const { Text } = Typography;
const contentStyle = {
  minHeight: 'calc(100vh - 90px)',
  lineHeight: '120px',
  color: 'rgb(37, 37, 51)',
  backgroundColor: '#ffffff',
};

const textStyle = {
  color: '#342d2d',
  fontFamily: 'Inter',
  fontWeight: 700,
  fontSize: 20,
  whiteSpace: 'pre-wrap',
  lineHeight: 1.4,
  width: 250,
  textALign: 'left',
}

const filmCard ={
     display: 'flex',
     flexDirection: 'column',
     alignItems: 'center',
     gap: '8px',
     backgroundColor: '#bccd28',
     width: 300,
     minHeight: 580,
     borderRadius: 20,
}

const posterStyle = (isHovered) => ({
        width: 250, 
        marginBottom: 20,
        marginTop: 20,
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        transform: isHovered ? "scale(1.05)" : "scale(1)",
        boxShadow: isHovered
        ? "0 10px 25px rgba(0,0,0,0.25)"
        : "none",
        cursor: "pointer",
})

const filmsGrid = {
     display: 'grid',
     gridTemplateColumns: 'repeat(5, 1fr)',
     gap: '16px',
}

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

 