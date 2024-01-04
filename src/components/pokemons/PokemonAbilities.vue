<template>
  <section class="w-full">
    <div class="mb-3 font-bold uppercase text-[12px]">Abilities</div>
    <div class="flex items-center flex-wrap gap-x-4 gap-y-2">
      <div
        v-for="ability in abilities"
        v-bind:key="ability"
        class="bg-gray-500 text-white px-3 py-1 rounded-md"
      >
        {{ ability }}
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { PokemonDetails } from '../../types/pokemons'

defineProps<{
  abilities: PokemonDetails['abilities']
}>()
</script>

<style scoped></style>
