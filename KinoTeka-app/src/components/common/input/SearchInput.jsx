import { Input } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setQuery } from "../../redux/partReducers/searchSlice";
import { clearButton } from "../../redux/partReducers/buttonSlice";

const { Search } = Input;

export default function SearchInput() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <Search
      placeholder="Введите название фильма"
      style={{ maxWidth: "30vh", marginRight: "3rem" }}
      onSearch={(value) => {
        dispatch(clearButton());
        dispatch(setQuery(value));
        navigate("/search");
      }}
      size="large"
      enterButton
    />
  );
}
