import { Layout, Input, Switch } from 'antd'
import { AudioOutlined } from '@ant-design/icons';
import bruh from '../controller/apiRequest'

const { Search } = Input;
const onChange = checked => {
  console.log(`switch to ${checked}`);
};
const suffix = <AudioOutlined style={{ fontSize: 16, color: '#1677ff' }} />;
const onSearch = (value, _e, info) => console.log(info?.source, value);

bruh();
export default function AppHeader() {
  return (   <Layout.Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
           <Search placeholder="input search text" style={{maxWidth: '30vh', marginRight: '3rem'}} onSearch={onSearch} size="large" enterButton />
<Switch defaultChecked onChange={onChange} style={{marginRight:'1rem'}} />
<p style={{color: '#fff'}}>Switch for local</p>
      </Layout.Header>);
}