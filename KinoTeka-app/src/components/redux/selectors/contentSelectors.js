import { createSelector } from "@reduxjs/toolkit";

const selectSearchState = (state) => state.search;
const selectFilterState = (state) => state.filter;
const selectButtonState = (state) => state.button;

export const selectAppContentState = createSelector(
  [selectSearchState, selectFilterState, selectButtonState],
  (search, filter, button) => {
    const searchQuery = search?.query ?? "";
    const selectedGenre = filter?.selectedGenre;
    const keyword = String(filter?.keywordQuery ?? "").trim().toLowerCase();

    return {
      searchQuery,
      hasSearched: Boolean(search?.hasSearched),
      buttonTriggered: Boolean(button?.hasButtonTapped),
      keywordForFilter: filter?.keyword ? keyword : "",
      genreActive: Boolean(filter?.genre && selectedGenre),
      selectedGenre,
      year: filter?.year,
      alphabetSort: filter?.alphabetSort,
      radioFilter: filter?.radioFilter,
      normalizedQuery: searchQuery.trim().toLowerCase(),
    };
  }
);
