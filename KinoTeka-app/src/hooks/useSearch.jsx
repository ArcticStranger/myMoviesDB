import { useState } from "react";

export default function useSearch() {
  const [query, setQuery] = useState("");
  const [hasSearched, setHasSearched] = useState(false);


  const onSearch = (value) => {
    setQuery(value);
    setHasSearched(true);
  };

  return {
    query,
    hasSearched,
    onSearch,
  };
  
}
