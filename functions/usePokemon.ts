import axios from "axios";

const instance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon/',
  timeout: 5 * 1000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// id / name / unset
type Iid = number | string | undefined | null;

export default async function usePokemon(id : Iid = undefined) {
  if (id) {
    return await instance.get(`${id}`)
    .catch((error) => [null, error])
    .then((reponse: any) => [reponse.data, null]);
  } else {
    return await instance.get('?limit=1302')
    .catch((error) => [null, error])
    .then((reponse: any) => [reponse.data.results, null]);
  }
}