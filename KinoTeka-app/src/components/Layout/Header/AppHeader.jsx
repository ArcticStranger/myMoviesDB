import { Layout, Button, Switch } from "antd";
import { HeartTwoTone } from "@ant-design/icons";
import { MenuOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { clearButton } from "../../redux/partReducers/buttonSlice";
import { clearQuery } from "../../redux/partReducers/searchSlice";
import { setButton } from "../../redux/partReducers/buttonSlice";

import SearchInput from "../../common/Input/SearchInput.jsx";

import { useDispatch } from "react-redux";

export default function AppHeader({
  isBurgerMode,
  onToggleBurgerMode,
  onOpenBurger,
  showBurgerControls,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const canOpenBurger = showBurgerControls && isBurgerMode;

  const goHome = () => {
    dispatch(clearButton());
    dispatch(clearQuery());
    navigate("/main");
  };

  const goFavorites = () => {
    dispatch(clearQuery());
    dispatch(setButton(true));
    navigate("/favorites");
  };

  return (
    <Layout.Header className="app-header">
      <div
        className="app-header__brand"
        onClick={goHome}
        role="button"
        aria-label="На главную"
      >
        <span className="app-header__brand--accent">KINO</span>
        <span>TEKA</span>
      </div>

      <SearchInput />

      <div className="app-header__divider" />

      <div
        className="app-header__burger-toggle"
        style={{ opacity: showBurgerControls ? 1 : 0.6 }}
      >
        <Switch
          checked={isBurgerMode}
          onChange={(checked) => onToggleBurgerMode(checked)}
          disabled={!showBurgerControls}
          size="small"
          aria-label="Режим бургер-меню"
        />
        <span className="app-header__burger-label">
          {isBurgerMode ? "Бургер вкл." : "Бургер выкл."}
        </span>
      </div>

      <Button
        className="app-header__btn"
        icon={<MenuOutlined />}
        disabled={!canOpenBurger}
        onClick={onOpenBurger}
      >
        Фильтры
      </Button>

      <Button
        className="app-header__btn app-header__btn--primary"
        onClick={goHome}
      >
        Главная
      </Button>

      <Button
        className="app-header__btn app-header__btn--fav"
        icon={<HeartTwoTone twoToneColor="#ec4899" />}
        onClick={goFavorites}
      >
        Избранное
      </Button>
    </Layout.Header>
  );
}
