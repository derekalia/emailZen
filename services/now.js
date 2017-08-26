// write a function to retrueve a blob of json
//do a fetch req

///rallycoding.herokuapp.com/api/music_albums

// function fetchAlbums (){
//     fetch('http://rallycoding.herokuapp.com/api/music_albums')
//     .then(res=>{
//         res.json();
//     })
//     .then(data => console.log(data))
// }

const fetchAlbums = async () => {
  const res = await fetch('http://rallycoding.herokuapp.com/api/music_albums');
  const json = await res.json();
  console.log(json);
}

fetchAlbums();
