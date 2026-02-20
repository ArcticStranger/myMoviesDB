import { Layout, Switch, Button } from "antd";
import { HeartTwoTone } from '@ant-design/icons';

import SearchInput from "/src/components/common/Input/SearchInput.jsx";

import { useDispatch } from "react-redux";
import { setButton } from "../../redux/partReducers/buttonSlice"

export default function AppHeader({ onSearch }) {
  const dispatch = useDispatch();
  return (
    <Layout.Header style={{ display: "flex", alignItems: "center" }}>
      <div className="demo-logo" />
      <SearchInput onSearch={onSearch} />
      <Switch defaultChecked style={{ marginRight: "1rem" }} />
      <p style={{ color: "#fff" }}>Switch for local</p>

       <Button icon={<HeartTwoTone twoToneColor="#eb2f96" style={{
       "fontSize" : "1.2rem"}}/>}
       style={{
        "marginLeft" : 30
       }}
       onClick={(value) => {
               dispatch(setButton(value))
             }}
       >Избранное</Button>


    
    </Layout.Header>
  );
}
