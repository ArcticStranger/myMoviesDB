import { useEffect, useState } from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import HomePage from "./pages/Home/home.jsx";
import SearchPage from "./pages/Home/search.jsx";
import MovieDescription from "./pages/Home/MovieDesc.jsx";
import FavoriteList from "./pages/Home/FavoriteList.jsx";
import AppHeader from "./components/Layout/Header/AppHeader";
import AppSider from "./components/Layout/Sidebar/AppSider";
import AppFooter from "./components/Layout/Footer/AppFooter";
import { Layout, Drawer } from "antd";
import { contentStyle } from "./styles/contentStyles.jsx";
const layoutStyle = { borderRadius: 8, overflow: "hidden" };

function App() {
  const location = useLocation();
  const isMovieDescriptionRoute = location.pathname.startsWith("/movie/");
  const [isBurgerMode, setIsBurgerMode] = useState(false);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  useEffect(() => {
    if (isMovieDescriptionRoute) {
      setIsBurgerOpen(false);
    }
  }, [isMovieDescriptionRoute]);

  const handleSetSiderMode = (isBurger) => {
    setIsBurgerMode(isBurger);
    setIsBurgerOpen(false);
  };

  const handleOpenBurger = () => {
    if (!isMovieDescriptionRoute && isBurgerMode) {
      setIsBurgerOpen(true);
    }
  };

  return (
    <Layout style={layoutStyle}>
      <AppHeader
        isBurgerMode={isBurgerMode}
        onSetSiderMode={handleSetSiderMode}
        onOpenBurger={handleOpenBurger}
        canUseSider={!isMovieDescriptionRoute}
      />
      <Layout style={{ marginTop: 64 }}>
        <Layout.Content style={contentStyle}>
          <Routes>
            <Route path="/" element={<Navigate to="/main" replace />} />
            <Route path="/main" element={<HomePage />} />

            <Route path="/search" element={<SearchPage />} />

            <Route path="/movie/:imdbID" element={<MovieDescription />} />

            <Route path="/favorites" element={<FavoriteList />} />
          </Routes>
        </Layout.Content>
        {!isMovieDescriptionRoute && !isBurgerMode && <AppSider />}
      </Layout>
      <Drawer
        title="Фильтры"
        placement="right"
        width={480}
        open={!isMovieDescriptionRoute && isBurgerMode && isBurgerOpen}
        onClose={() => setIsBurgerOpen(false)}
        maskStyle={{
          background: "rgba(0, 0, 0, 0.16)",
          backdropFilter: "none",
          WebkitBackdropFilter: "none",
        }}
        styles={{
          body: {
            display: "flex",
            justifyContent: "center",
          },
        }}
      >
        <AppSider asPanel />
      </Drawer>
      <AppFooter />
    </Layout>
  );
}

export default App;
