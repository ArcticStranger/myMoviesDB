import { Layout } from 'antd'


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

export default function AppContent() {
  return (<Layout.Content style={contentStyle}>
   

  </Layout.Content>)
}