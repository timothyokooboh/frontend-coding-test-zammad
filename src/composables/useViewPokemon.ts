import { ref } from 'vue'
import { ViewPokemon } from '../models/pokemon'
import type { PokemonDetails } from '../types/pokemons'

// eslint-disable-next-line import/prefer-default-export
export const useViewPokemon = (name: string) => {
  const isLoading = ref(false)
  const pokemonDetails = ref<PokemonDetails>({
    name: '',
    image: '',
    weight: 0,
    abilities: [],
    stats: [{ base_stat: 0, name: '' }],
  })

  const fetchData = async () => {
    try {
      isLoading.value = true

      const { data } = await ViewPokemon(name)
      pokemonDetails.value = {
        name: data.name,
        weight: data.weight,
        image: data.sprites.other.dream_world.front_default,
        abilities: data.abilities.map(
          (item: { ability: { name: string } }) => item.ability.name,
        ),
        stats: data.stats.map(
          (item: { base_stat: number; stat: { name: string } }) => ({
            base_stat: item.base_stat,
            name: item.stat.name,
          }),
        ),
      }
    } finally {
      isLoading.value = false
    }
  }

  fetchData()
  return {
    isLoading,
    pokemonDetails,
  }

  fetchData()
}
