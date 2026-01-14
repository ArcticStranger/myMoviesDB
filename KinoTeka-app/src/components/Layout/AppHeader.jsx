import { Layout, Menu } from 'antd'
import bruh from '../controller/apiRequest'
const items1 = ['1', '2', '3'].map(key => ({
  key,
  label: `nav ${key}`,
}));

// const headerStyle = {
//   textAlign: 'center',
//   color: '#fff',
//   height: 90,
//   paddingInline: 48,
//   lineHeight: '64px',
//   backgroundColor: '#4096ff',
// };
bruh();
export default function AppHeader() {
  return (   <Layout.Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items1}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Layout.Header>);
}