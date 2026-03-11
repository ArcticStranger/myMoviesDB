export const OMDB_URL = import.meta.env.VITE_FILMDATA_SRC;
export const OMDB_KEY = import.meta.env.VITE_API_KEY;

export const makeOmdbUrl = (params) =>
  `${OMDB_URL}?${new URLSearchParams({ apikey: OMDB_KEY, ...params }).toString()}`;
