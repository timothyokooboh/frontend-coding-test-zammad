<template>
  <div
    class="block sm:grid sm:grid-cols-2 sm:gap-y-4 sm:gap-x-3 md:grid-cols-3"
  >
    <PokemonListItem
      v-for="item in pokemons"
      v-bind:key="item.name"
      v-bind:pokemon="item"
      class="mb-5"
    />
  </div>
</template>

<script setup lang="ts">
import type { Pokemon } from '../../types/pokemons'
import PokemonListItem from './PokemonListItem.vue'

defineProps<{
  pokemons: Pokemon[]
}>()
</script>

<style scoped></style>
