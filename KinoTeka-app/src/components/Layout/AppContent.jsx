import { Layout, Typography } from 'antd'
import { useState, useEffect } from 'react'

const { Text } = Typography;
const contentStyle = {
  textAlign: 'center',
  minHeight: 'calc(100vh - 90px)',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#0958d9',
};

const textStyle ={
  color: '#fff',
  fontFamily: 'Inter',
  fontWeight: 700,
  whiteSpace: 'pre-wrap',
  lineHeight: .4,
}


function getFilmInfo(filmName) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=ea46ba8f&t=${filmName}`)
      .then(value => value.json())
      .then(value => setData(value));
    }, [filmName]);

    return data;
}

function filmDescription(data) {
    return (
        <Layout.Content style={contentStyle}>
    <Text style={textStyle}>
      {`
    "Название фильма": ${data.Title}
    "Год выпуска": ${data.Year}
    "Длительность": ${data.Runtime}
    `.replace(/"/g, '')}
</Text>
  </Layout.Content>
    )
}

function FilmItem({ filmName }) {
  const data = getFilmInfo(filmName);

  if (!data) {
    return <Text style={textStyle}>Loading...</Text>
  }

  return (
    <Text style={textStyle} block>
  Название: {data.Title}
  <br/>
  Год выпуска: {data.Year}
  <br/>
  Длительность: {data.Runtime}
  <br/>
    </Text>
  );
}

export default function AppContent() {
  const storage = [
    "The King's Speech",
    "The Hateful Eight",
    "The Electrical Life of Louis Wain",
    "Jojo Rabbit",
    "District 9"
  ]
  const data = `The King's Speech`;
  const dataResult = getFilmInfo(storage)

  return (
    <Layout.Content style={contentStyle}>
        {storage.map((film) => (
          <FilmItem key={film} filmName={film}/>
        ))}
    </Layout.Content>
  )
}  

