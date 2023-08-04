const source = String.raw`\data\ghibli\ghibli.json`;

export async function getFilms(){
  const response = await fetch(source);
  const data = await response.json();
  const allFilms = Object.values(data.films).map((item)=> item);
  return allFilms;
}

export const releaseOrder = (data, order) =>{
  if(order === "firstReleased"){
    data.sort((a,b) => {
      if (a.release_date < b.release_date){
        return -1
      }
    })
  }else{
    data.sort((a,b) => {
      if (a.release_date > b.release_date){
        return -1;
      }
    })
  }
  return data;
}
export const alphabeticalOrder = (data, order) => {
  if(order === "alphabeticalAsc") {
      data.sort((a,b) => {
        if(a.title > b.title){
          return 1;
        }
        if(a.title < b.title){
          return -1;
        }
        return 0
      });
  }else{
    data.sort((a,b) => {
      if(a.title > b.title){
        return -1;
      }
      if(a.title < b.title){
        return 1;
      }
      return 0
    });
  }
  return data;
}
export const scoreOrder = (data) => {
    data.sort((a,b) => {
      if (a.rt_score > b.rt_score){
        return -1
      }
    })
  return data;
}