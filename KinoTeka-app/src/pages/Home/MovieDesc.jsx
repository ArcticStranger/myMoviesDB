
import { Layout } from "antd";
import { SearchInput } from "../../components/common/Input/SearchInput"
const layoutStyle = {
  borderRadius: 8,
  overflow: "hidden",
};

export default function MovieDescription() {
  const data = SearchInput.onSearch;
  return (
    <>
          <Layout.Content style={contentStyle}>
            <div style={filmsGrid}>  
                <FilmItem key={data} filmName={data} />
            </div>
          </Layout.Content>
    </>
  ) 
}

{/* <FilmItem key={film} filmName={film} /> */}