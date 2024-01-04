<template>
  <div class="w-full">
    <div
      v-for="item in stats"
      v-bind:key="item.name"
      class="grid grid-cols-[1fr_2fr] justify-between gap-x-10 mb-5"
    >
      <div>{{ item.name }}</div>
      <div class="flex-1 bg-gray-500 h-[20px] overflow-hidden rounded-[10px]">
        <div
          class="bg-white h-full flex flex-col items-center justify-center text-sm rounded-[10px]"
          v-bind:style="{ width: item.base_stat + '%' }"
        >
          <div>{{ item.base_stat }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PokemonDetails } from '../../types/pokemons'

defineProps<{
  stats: PokemonDetails['stats']
}>()
</script>

<style scoped></style>
