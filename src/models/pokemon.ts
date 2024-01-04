import http from '../services/axios'

export const ListPokemons = () => {
  return http.get('/')
}

export const ViewPokemon = (name: string) => {
  return http.get(`/${name}`)
}
