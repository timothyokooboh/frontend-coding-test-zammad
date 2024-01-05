import http from '../services/axios'

export const ListPokemons = (url: string) => {
  return http.get(url)
}

export const GetNextPage = (url: string) => {
  return http.get(url)
}

export const GetPreviousPage = (url: string) => {
  return http.get(url)
}

export const ViewPokemon = (name: string) => {
  return http.get(`/${name}`)
}
