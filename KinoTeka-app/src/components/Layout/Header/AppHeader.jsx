import { Layout, Switch, Button } from "antd";
import { HeartTwoTone } from '@ant-design/icons';
import { Link, useNavigate } from "react-router-dom";
import { clearButton } from "../../redux/partReducers/buttonSlice"

import SearchInput from "/src/components/common/Input/SearchInput.jsx";

import { useDispatch } from "react-redux";
import { setButton } from "../../redux/partReducers/buttonSlice"

export default function AppHeader({ onSearch }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <Layout.Header style={{ display: "flex", alignItems: "center" }}>
      <div className="demo-logo" />
      <SearchInput onSearch={onSearch} />
      <Link to="/main">
      <Button type="primary" onClick={
        (value) => {
          dispatch(clearButton(value))
          navigate("/main");
        }
      }>Главная</Button>
      </Link>
       <Button icon={<HeartTwoTone twoToneColor="#eb2f96" style={{
       "fontSize" : "1.2rem"}}/>}
       style={{
        "marginLeft" : 30
       }}
       onClick={() => {
               dispatch(setButton(true));
               navigate("/favorites");
             }}
       >Избранное</Button>

    </Layout.Header>
  );
}
