import { Pokemon } from '../types/pokemons'

// eslint-disable-next-line import/prefer-default-export
export const useSortPokemons = () => {
  const sortByName = (
    pokemons: Pokemon[],
    order: 'ascending' | 'descending',
  ) => {
    pokemons.sort((a, b) => {
      const nameA = a.name.toLowerCase()
      const nameB = b.name.toLowerCase()

      if (order === 'ascending') {
        if (nameA < nameB) {
          return -1
        }

        if (nameA > nameB) {
          return 1
        }

        return 0
      }

      if (nameA < nameB) {
        return 1
      }

      if (nameA > nameB) {
        return -1
      }

      return 0
    })
  }

  return {
    sortByName,
  }
}
