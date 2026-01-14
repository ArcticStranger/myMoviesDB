import { useState, useEffect } from 'react'
import { Layout } from 'antd';
import getFilmInfo from '../controller/apiRequest'

const siderStyle = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#1677ff',
};

export default function AppSider() {
  const [loading, setLoading] = useState(false)
  const [crypto, setCrypto] = useState([])
  const [assets, setAssets] = useState([])

  useEffect(() => {
   async function preload() {
    setLoading(true)
     const {data} = await getFilmInfo()

     setAssets(assets.map(asset => {
      const coin = result.find(c => c.id === asset.id)
      return {
        filmName: getFilmInfo('The Hateful Eight'),
        ...asset,
      }
     }))
     setCrypto(result)
     setLoading(false)
    }
    preload()
  }, [])
  return (<Layout.Sider width="25%" style={siderStyle}>
          {assets.map(asset => {

          })}
        </Layout.Sider>)
}