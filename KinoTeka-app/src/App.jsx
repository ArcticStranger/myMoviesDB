import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/Home/home.jsx";
import SearchPage from "./pages/Home/search.jsx";
import MovieDescription from "./pages/Home/MovieDesc.jsx";
import FavoriteList from "./pages/Home/FavoriteList.jsx";
import AppHeader from "./components/Layout/Header/AppHeader";
import AppSider from "./components/Layout/Sidebar/AppSider";
import AppFooter from "./components/Layout/Footer/AppFooter";
import { Layout } from "antd";
import useSearch from "./hooks/useSearch";
import useFilter from "./hooks/useFilter.jsx";

import { contentStyle } from "./styles/contentStyles.jsx";
const layoutStyle = { borderRadius: 8, overflow: "hidden" };


function App() {
  const search = useSearch();
  const filter = useFilter();
  return (
    <Layout style={layoutStyle}>
      <AppHeader onSearch={search.onSearch} filterCheck={filter} />
      <Layout>
        <Layout.Content style={contentStyle}>
          <Routes>
          <Route path="/" element={<Navigate to="/main" replace />}/>
            <Route
              path="/main"
              element={<HomePage search={search} filterData={filter} />}
            />
             <Route
              path="/search"
              element={<SearchPage search={search} filterData={filter} />}
            />
            <Route
              path="/movie/:imdbID"
              element={<MovieDescription search={search} />}
            />
            <Route 
              path="/favorites"
              element={<FavoriteList />}
            />
          </Routes>
        </Layout.Content>
        <AppSider filterData={filter} />
      </Layout>
      <AppFooter />
    </Layout>
  );
}

export default App;
