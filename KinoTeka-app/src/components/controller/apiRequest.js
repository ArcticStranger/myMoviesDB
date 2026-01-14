// const newPost = {
//   "userID": 1321,
//   "id": 777777777,
//   "title": "COME TO ME COWARDES, I WAIT YOU IN MIRAFLORES",
//   "body": "delta force coming in",
// }

// const test = JSON.stringify(newPost);

// console.log(test); 

export default function checkFilmInfo(filmName) {
 fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=ea46ba8f&s=${filmName}`)
  .then((data) => {
    // console.log(data);
    return data.json()
  }).then((info) => {
    console.log (info)
    })
  // console.log(data);
} 
const data = 'Hateful Eight'

// checkFilmInfo(data)