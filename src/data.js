const source = String.raw`\data\ghibli\ghibli.json`;

export async function getAll(){
  const response = await fetch(source);
  const data = await response.json();
  return data;
}
