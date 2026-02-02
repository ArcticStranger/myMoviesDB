import AppHeader from "../../components/Layout/Header/AppHeader";
import AppContent from "../../components/Layout/Content/AppContent";
import AppSider from "../../components/Layout/Sidebar/AppSider";
import AppFooter from "../../components/Layout/Footer/AppFooter";
import { Layout } from "antd";
import useSearch from "../../hooks/useSearch.jsx"

const layoutStyle = {
  borderRadius: 8,
  overflow: "hidden",
};

export default function HomePage() {
  const search = useSearch();
  return (
    <Layout style={layoutStyle}>
      <AppHeader onSearch={search.onSearch}/>
      <Layout>
        <AppContent search={search} />
        <AppSider />
      </Layout>
      <AppFooter />
    </Layout>
  );
}

