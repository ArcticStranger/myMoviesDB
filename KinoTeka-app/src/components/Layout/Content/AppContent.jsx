import { Layout, Typography, Spin } from "antd";
import { useState } from "react";
import { contentStyle, filmsGrid } from "../../../styles/contentStyles";

import { FilmItem } from "../../../hooks/MovieInfo";
import SearchInput from "/src/components/common/Input/SearchInput.jsx";



export default function AppContent(searchData) {
  const defaultMovies = [
    "The King's Speech",
    "The Hateful Eight",
    "Jojo Rabbit",
    "District 9",
    "The Green Mile",
    "Jobs",
    "Chappie",
    "Pacific Rim",
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  const SearchEnter = (value) => {
    setSearchQuery(value);
    setHasSearched(true);
  }

  const checkTrigger = SearchInput();

  return (
    checkTrigger.trigger.hasSearched ?  <Layout.Content style={contentStyle}>
      <div style={filmsGrid}>
       <FilmItem filmName={checkTrigger.onSearch} />
      </div>
    </Layout.Content>
    :
    <Layout.Content style={contentStyle}>
      <div style={filmsGrid}>
        {defaultMovies.map((film) => (
          <FilmItem key={film} filmName={film} />
        ))}
      </div>
    </Layout.Content>
  );
}
