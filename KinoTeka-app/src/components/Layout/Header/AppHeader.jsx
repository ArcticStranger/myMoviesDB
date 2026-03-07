import { Layout, Button, Switch } from "antd";
import { HeartTwoTone } from "@ant-design/icons";
import { MenuOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { clearButton } from "../../redux/partReducers/buttonSlice";
import { clearQuery } from "../../redux/partReducers/searchSlice";

import SearchInput from "../../common/input/SearchInput.jsx";

import { useDispatch } from "react-redux";
import { setButton } from "../../redux/partReducers/buttonSlice";

export default function AppHeader({
  isBurgerMode,
  onToggleBurgerMode,
  onOpenBurger,
  showBurgerControls,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const canOpenBurger = showBurgerControls && isBurgerMode;

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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          marginRight: 12,
          opacity: showBurgerControls ? 1 : 0.7,
        }}
      >
        <Switch
          checked={isBurgerMode}
          onChange={(checked) => onToggleBurgerMode(checked)}
          disabled={!showBurgerControls}
        />
        <span style={{ color: "#fff", whiteSpace: "nowrap", fontSize: 14 }}>
          {isBurgerMode ? "Бургер-режим вкл." : "Бургер-режим откл."}
        </span>
      </div>
      <Button
        icon={<MenuOutlined />}
        style={{
          marginRight: 12,
          background: canOpenBurger ? "#fff" : "#f2f2f2",
          borderColor: canOpenBurger ? undefined : "#d9d9d9",
          color: canOpenBurger ? undefined : "#777",
          opacity: canOpenBurger ? 1 : 0.9,
          cursor: canOpenBurger ? "pointer" : "not-allowed",
        }}
        onClick={() => {
          if (canOpenBurger) onOpenBurger();
        }}
        aria-disabled={!canOpenBurger}
      >
        Фильтры
      </Button>
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
          dispatch(clearQuery());
          dispatch(setButton(true));
          navigate("/favorites");
        }}
      >
        Избранное
      </Button>
    </Layout.Header>
  );
}
