<template>
  <RouterLink
    v-bind:to="{ name: 'PokemonDetails', params: { name: pokemon.name } }"
    class="border-[1px] border-gray-300 text-center py-3 rounded-sm hover:translate-y-[-3px] duration-300"
    data-testid="pokemon-name"
  >
    {{ pokemon.name }}
  </RouterLink>
</template>

<script setup lang="ts">
import type { Pokemon } from '../../types/pokemons'

defineProps<{
  pokemon: Pokemon
}>()
</script>

<style scoped></style>
