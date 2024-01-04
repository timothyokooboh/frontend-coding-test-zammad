import { ref } from 'vue'
import { ListPokemons } from '../models/pokemon'
import { Pokemon } from '../types/pokemons'

// eslint-disable-next-line import/prefer-default-export
export const useListPokemons = () => {
  const pokemons = ref<Pokemon[]>([])
  const isLoading = ref(false)

  const fetchData = async () => {
    try {
      isLoading.value = true
      const response = await ListPokemons()
      pokemons.value = response.data.results
    } finally {
      isLoading.value = false
    }
  }

  fetchData()

  return {
    pokemons,
    isLoading,
  }
}
