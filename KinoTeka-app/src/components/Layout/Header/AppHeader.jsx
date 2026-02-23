import { Layout, Button } from "antd";
import { HeartTwoTone } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { clearButton } from "../../redux/partReducers/buttonSlice";
import { clearQuery } from "../../redux/partReducers/searchSlice";

import SearchInput from "../../common/input/SearchInput.jsx";

import { useDispatch } from "react-redux";
import { setButton } from "../../redux/partReducers/buttonSlice";

export default function AppHeader() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Layout.Header
      style={{
        display: "flex",
        alignItems: "center",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        width: "100%",
        zIndex: 1000,
      }}
    >
      <div className="demo-logo" />
      <SearchInput />
      <Button
        type="primary"
        onClick={() => {
          dispatch(clearButton());
          dispatch(clearQuery());
          navigate("/main");
        }}
      >
        Главная
      </Button>
      <Button
        icon={
          <HeartTwoTone twoToneColor="#eb2f96" style={{ fontSize: "1.2rem" }} />
        }
        style={{ marginLeft: 30 }}
        onClick={() => {
          dispatch(setButton(true));
          navigate("/favorites");
        }}
      >
        Избранное
      </Button>
    </Layout.Header>
  );
}
