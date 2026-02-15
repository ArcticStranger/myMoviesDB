import { useState } from "react";

export default function useFilter() {
  const [genre, setGenre] = useState(false);
  const [year, setYear] = useState(false);
  const [keyword, setKeyword] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [keywordQuery, setKeywordQuery] = useState("");

  const onGenre = (checked) => {
    setGenre(checked);
    if (checked) {
      setYear(false);
      setKeyword(false);
    } else {
      setSelectedGenre(null);
    }
  };

  const onGenreChange = (value) => {
    setSelectedGenre(value);
  };

  const onKeywordChange = (value) => {
    setKeywordQuery(value);
  };

  const onYear = (checked) => {
    setYear(checked);
    if (checked) {
      setGenre(false);
      setKeyword(false);
      setSelectedGenre(null);
    }
  };

  const onKeyword = (checked) => {
    setKeyword(checked);
    if (checked) {
      setYear(false);
      setGenre(false);
      setSelectedGenre(null);
    }
  };

  return {
    onGenre,
    onGenreChange,
    onKeywordChange,
    onYear,
    onKeyword,
    genre,
    selectedGenre,
    year,
    keyword,
    keywordQuery,
  };
}
