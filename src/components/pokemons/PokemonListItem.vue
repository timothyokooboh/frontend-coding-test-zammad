<template>
  <div
    class="border-[1px] border-gray-300 text-center py-3 rounded-sm hover:translate-y-[-5px] duration-300"
  >
    {{ pokemon.name }}
  </div>
</template>

<script setup lang="ts">
import type { Pokemon } from '../../types/pokemons'

defineProps<{
  pokemon: Pokemon
}>()
</script>

<style scoped></style>
