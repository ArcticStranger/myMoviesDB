import { useDispatch } from "react-redux";

const initialSearch = {
  query: "",
  hasSearched: false,
}

const initialState = {
  counter: 0,
}

export default function searchReducer(searchState = initialSearch, action) {
    switch (action.type) {
      case 'HAS_INPUT':
        return { ...searchState, query: action.query, hasSearched: true};
      default:
        return searchState;
    }
}

export function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, counter: state.counter + 1 };
    case 'DECREMENT':
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
}