import AppHeader from "./components/Layout/Header/AppHeader";
import SideBar from "./components/Layout/Sidebar/SideBar";
import AppFooter from "./components/Layout/Footer/AppFooter";
import MainLayout from "./components/Layout/MainLayout";
import MovieFilters from "./components/Layout/Sidebar/MovieFilters";
import { Layout } from "antd";
import { useBurgerMenu } from "./hooks/useBurgerMenu.js";
const layoutStyle = { borderRadius: 8, overflow: "hidden" };

function App() {
  const {
    burgerState,
    isBurgerOpenComputed,
    isBurgerMode,
    isMovieDescriptionRoute,
    setBurgerMenuState,
  } = useBurgerMenu();

  const shouldShowMovieFilters = !isMovieDescriptionRoute;

  return (
    <Layout style={layoutStyle}>
      <AppHeader
        isBurgerMode={isBurgerMode}
        onToggleBurgerMode={(enabled) =>
          setBurgerMenuState(enabled ? "enable" : "disable")
        }
        onOpenBurger={() => setBurgerMenuState("open")}
        showBurgerControls={!isMovieDescriptionRoute}
      />
      <MainLayout>
        {burgerState === null && shouldShowMovieFilters && <MovieFilters />}
      </MainLayout>
      <SideBar
        isOpen={isBurgerOpenComputed}
        onClose={() => setBurgerMenuState("close")}
        title="Фильтры"
      >
        {burgerState !== null && shouldShowMovieFilters && <MovieFilters />}
      </SideBar>
      <AppFooter />
    </Layout>
  );
}

export default App;
