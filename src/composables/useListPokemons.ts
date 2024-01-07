import { ref } from 'vue'

import { GetNextPage, GetPreviousPage, ListPokemons } from '../models/pokemon'
import { Pokemon } from '../types/pokemons'
import { Notify } from '../helpers/toast'

// eslint-disable-next-line import/prefer-default-export
export const useListPokemons = () => {
  const pokemons = ref<Pokemon[]>([])
  const nextPageUrl = ref('/')
  const previousPageUrl = ref('')
  const isLoading = ref(false)

  const handleResponse = (response: {
    data: { results: Pokemon[]; next: string; previous: string }
  }) => {
    pokemons.value = response.data.results
    nextPageUrl.value = response.data.next
    previousPageUrl.value = response.data.previous
  }

  const fetchData = async () => {
    try {
      isLoading.value = true
      const response = await ListPokemons(nextPageUrl.value)
      handleResponse(response)
      Notify({ icon: 'success', title: 'Pokemons listed successfully' })
    } finally {
      isLoading.value = false
    }
  }

  const getNextPage = async () => {
    if (!nextPageUrl.value) return

    try {
      isLoading.value = true
      const response = await GetNextPage(nextPageUrl.value)
      handleResponse(response)
    } finally {
      isLoading.value = false
    }
  }

  const getPreviousPage = async () => {
    if (!previousPageUrl.value) return

    try {
      isLoading.value = true
      const response = await GetPreviousPage(previousPageUrl.value)
      handleResponse(response)
    } finally {
      isLoading.value = false
    }
  }

  return {
    fetchData,
    pokemons,
    isLoading,
    getNextPage,
    getPreviousPage,
    nextPageUrl,
    previousPageUrl,
  }
}
