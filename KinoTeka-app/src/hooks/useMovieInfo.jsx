import { useMovieDetails } from "./useMovieDetails";
import { useMovieSearch } from "./useMovieSearch";
import { useMovieDefaults } from "./useMovieDefaults";
import { useMovieById } from "./useMovieById";

export function useGetFilmInfoBySearch(filmName) {
  const searchData = useMovieSearch(filmName);
  const detailedSearch = useMovieDetails(searchData?.Search);

  // Combine search data with detailed results
  const data =
    detailedSearch && searchData?.Search
      ? { ...searchData, Search: detailedSearch }
      : searchData;

  return data;
}

export const useGetFilmInfoDefaults = useMovieDefaults;
export const useGetFilmInfoById = useMovieById;
