const filterInitial = {
  genreTapped: false,
  genreName: "",
  yearSorted: false,
  keywordSorted: false,
  keywordQuery: "",
}

export default function filterReducer(filterState = filterInitial, action) {
  switch (action.type) {
    case "genreTapped":
      return {
        ...filterState, 
        genreTapped: true,
        genreName: action.query,
        yearSorted: false,
        keywordSorted: false,
        keywordQuery: "",
      }
    case "yearSorted":
      return {
        ...filterState,

      }
    default:
      return filterState;
  }
}