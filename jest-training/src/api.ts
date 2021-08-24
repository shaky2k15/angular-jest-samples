import fetch from 'node-fetch';  // yarn add  node-fetch  @types/node-fetch  @types/node

const BASE_URL = 'http://swapi.co/api/'

export async function getPerson(id: number) {
  const response = await fetch(BASE_URL + `people/${id}/`);
  const data = await response.json();
  console.log(data);  
  return data;
}
