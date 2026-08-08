import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setQuery } from "../components/redux/partReducers/searchSlice";
import { clearButton } from "../components/redux/partReducers/buttonSlice";

export default function triggerInput(value) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const nextQuery = value.trim();
  dispatch(setQuery(nextQuery));
  dispatch(clearButton());
  navigate("/search");
}
