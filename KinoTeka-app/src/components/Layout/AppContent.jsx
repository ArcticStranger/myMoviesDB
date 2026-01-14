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

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

function getFilmInfo(filmName) {
const [data, setData] = useState(null);

useEffect(() => {
  fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=ea46ba8f&s=${filmName}`)
  .then((value) => {
    return value.json();
  }).then((value) => {
    setData(value);
  })
});
return (data);
} 


export default function AppContent() {
  const data = `The King's Speech`;
  // [data, setData] = useState(false);
  const dataResult = getFilmInfo({data})

  return (<Layout.Content style={contentStyle}>
    <Text>{JSON.stringify(data, null, 3)}</Text>
  </Layout.Content>)
}