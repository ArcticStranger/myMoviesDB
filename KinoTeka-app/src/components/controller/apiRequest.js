export default function checkFilmInfo(filmName) {
  fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=ea46ba8f&s=${filmName}`)
    .then((data) => {
      return data.json();
    })
    .then((info) => {
      console.log(info);
    });
  // console.log(data);
}
