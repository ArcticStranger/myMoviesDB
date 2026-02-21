import { useState } from "react";

export default function useFilter() {
  const [genre, setGenre] = useState(false);
  const [year, setYear] = useState(false);
  const [alphabet, setAlphabet] = useState(false);
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

  const onAlphabetSort = (checked) => {
    setAlphabet(checked);
    if (checked) {
      setYear(false);
    }
  };

  const onYear = (checked) => {
    setYear(checked);
    if (checked) {
      setAlphabet(false);
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
    onAlphabetSort,
    onYear,
    onKeyword,
    genre,
    selectedGenre,
    year,
    alphabet,
    keyword,
    keywordQuery,
  };
}
