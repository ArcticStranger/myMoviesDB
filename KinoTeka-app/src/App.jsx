import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/home.jsx";
import MovieDescription from "./pages/Home/MovieDesc.jsx";
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
            <Route
              path="/"
              element={<HomePage search={search} filterData={filter} />}
            />
            <Route
              path="/movie/:imdbID"
              element={<MovieDescription search={search} />}
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
