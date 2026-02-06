import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/home.jsx";
import MovieDescription from "./pages/Home/MovieDesc.jsx";
import AppHeader from "./components/Layout/Header/AppHeader";
import AppSider from "./components/Layout/Sidebar/AppSider";
import AppFooter from "./components/Layout/Footer/AppFooter";
import { Layout } from "antd";
import useSearch from "./hooks/useSearch";

const layoutStyle = { borderRadius: 8, overflow: "hidden" };

function App() {
const search = useSearch();


  return (
        <Layout style={layoutStyle}>
      <AppHeader onSearch={search.onSearch} />
      <Layout>
    <Routes>
      <Route path="/" element={<HomePage onSearch={search.onSearch}/>} />
      <Route path="/movie/:imdbID" element={<MovieDescription search={search}/>} />
    </Routes>
        <AppSider />
      </Layout>
      <AppFooter />
    </Layout>
    

  );
}

export default App;
