import { useEffect, useState } from "react";
import { Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setQuery } from "../../redux/partReducers/searchSlice";
import { clearButton } from "../../redux/partReducers/buttonSlice";

const { Search } = Input;

export default function SearchInput() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const query = useSelector((state) => state.search.query);
  const [inputValue, setInputValue] = useState(query);

  useEffect(() => {
    setInputValue(query);
  }, [query]);

  return (
    <Search
      placeholder="Введите название фильма"
      style={{ maxWidth: "30vh", marginRight: "3rem" }}
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      onSearch={(value) => {
        const nextQuery = value.trim();
        dispatch(clearButton());
        dispatch(setQuery(nextQuery));
        setInputValue(nextQuery);
        navigate("/search");
      }}
      size="large"
      allowClear
      enterButton
    />
  );
}
