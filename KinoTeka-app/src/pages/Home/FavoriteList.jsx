import AppContent from "../../components/Layout/Content/AppContent.jsx";
import useLocalStorage from "../../hooks/useLocalStorage.jsx";

// import { localStorage } from "../../services/localStorage"


export default function FavoriteList() {
  const favList = useLocalStorage();
  console.log("check FavorList component")
  return <AppContent favorList={favList}/>
}
