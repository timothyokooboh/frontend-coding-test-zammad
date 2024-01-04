import { useQuery } from '@tanstack/vue-query'
import { ListPokemons } from '../models/pokemon'
import { Pokemons } from '../types/exercise'

// eslint-disable-next-line import/prefer-default-export
export const useListPokemons = () => {
  const query = useQuery({
    queryKey: ['pokemonList'],
    queryFn: ListPokemons,
  })

  let pokemons: Pokemons = []

  if (query?.data) {
    pokemons = query.data.value?.data.results
  }

  return {
    pokemons,
    isPending: query.isPending,
  }
}
