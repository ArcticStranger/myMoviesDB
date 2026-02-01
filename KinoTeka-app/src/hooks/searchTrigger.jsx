import { useState } from 'react'

export function SearchTrigger(check, value) {
  const [searchQuery, setSearchQuery] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (value) => {
    setSearchQuery(value);
    setHasSearched(true);
  };

  check ? handleSearch(value) : null;

  return searchQuery;
}

// const { Search } = Input;

// export default function AppContent() {
//   const defaultMovies = [
//     "The King's Speech",
//     "The Hateful Eight",
//     "Jojo Rabbit",
//     "District 9",
//     "The Green Mile",
//     "Jobs",
//     "Chappie",
//     "Pacific Rim",
//   ];
//   const [searchQuery, setSearchQuery] = useState("");
//   const [hasSearched, setHasSearched] = useState(false);

//   const handleSearch = (value) => {
//     setSearchQuery(value);
//     setHasSearched(true);
//   };

//   return (
//     <Layout.Content style={contentStyle}>
//       <Search
//         placeholder="Search for a movie"
//         style={{ maxWidth: "400px", marginBottom: "24px" }}
//         onSearch={handleSearch}
//         size="large"
//         enterButton
//         allowClear
//       />
//       <div style={filmsGrid}>
//         {!hasSearched || !searchQuery ? (
//           defaultMovies.map((film) => (
//             <FilmItem key={film} filmName={film} />
//           ))
//         ) : (
//           <FilmItem filmName={searchQuery} />
//         )}
//       </div>
//     </Layout.Content>
//   );
// }