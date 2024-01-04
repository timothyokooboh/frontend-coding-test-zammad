export interface Pokemon {
  name: string
  url: string
}

export interface PokemonDetails {
  name: string
  image: string
  weight: number
  abilities: string[]
  stats: { base_stat: number; name: string }[]
}
