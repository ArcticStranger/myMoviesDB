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

function getFilmInfo(filmName) {
const [data, setData] = useState(null);

useEffect(() => {
  fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=ea46ba8f&t=${filmName}`)
  .then((value) => {
    return value.json();
  }).then((value) => {
    Data(value);
  })
});
return (data);
} 

const textStyle ={
  color: '#fff',
  fontFamily: 'Inter',
  fontWeight: 700,
  whiteSpace: 'pre-wrap',
  lineHeight: 1.1,
}

export default function AppContent() {
  const data = `The King's Speech`;
  const dataResult = getFilmInfo(data)

  return (<Layout.Content style={contentStyle}>
<Text style={textStyle}>
{JSON.stringify({
  "Название фильма": dataResult.Title,
  "Год выпуска": dataResult.Year,
  "Длительность": dataResult.Runtime,
},null, 2).replace(/"/g, '')}
</Text>
  </Layout.Content>)
}  