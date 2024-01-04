<template>
  <div class="grid grid-cols-1 gap-y-4 gap-x-3 sm:grid-cols-2 md:grid-cols-3">
    <PokemonListItem
      v-for="item in pokemons"
      v-bind:key="item.name"
      v-bind:pokemon="item"
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
