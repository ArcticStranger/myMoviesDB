import { Layout } from 'antd'


const footerStyle = {
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
  backgroundColor: '#4096ff',
};

export default function AppFooter() {
  return (<Layout.Footer style={footerStyle}>
Footer
  </Layout.Footer>)
}