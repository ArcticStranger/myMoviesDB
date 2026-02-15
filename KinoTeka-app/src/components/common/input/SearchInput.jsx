import { Input } from "antd";
import { useDispatch } from "react-redux";
import { setQuery } from "../../redux/partReducers/searchSlice"

const { Search } = Input;


export default function SearchInput() {
  const dispatch = useDispatch();
  return (
    <Search
      placeholder="Введите название фильма"
      style={{ maxWidth: "30vh", marginRight: "3rem" }}
      onSearch={(value) => {
        dispatch(setQuery(value))
      }}
      size="large"

      enterButton
    />
  );
}
