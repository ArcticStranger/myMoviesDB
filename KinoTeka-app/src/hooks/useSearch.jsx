import { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../components/redux/partReducers/searchSlice";
import { useNavigate } from "react-router-dom";

export default function useSearch() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const onSearch = () => {
    const next = text.trim();
    if (!next) return;
    dispatch(setQuery(next));
    dispatch(clearButton());
    navigate("/search");
  };

  return {
    text, onChange: (e) => setText(e.target.value), onSearch
  };
}
