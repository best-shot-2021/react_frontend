export const getMovies = async () =>{
  try{
    let url= "https://swapi.dev/api/films"
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }catch(e){

  }
}