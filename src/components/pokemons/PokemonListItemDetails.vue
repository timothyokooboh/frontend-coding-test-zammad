<template>
  <div class="shadow-md rounded-sm py-2 px-10">
    <section class="mb-4">
      <RouterLink
        v-bind:to="{ name: 'PokemonList' }"
        class="w-fit flex items-center text-gray-800 font-bold"
      >
        <span class="text-2xl mr-2">&larr;</span>
        <div class="text-[14px]">Back To Pokemons</div>
      </RouterLink>
    </section>

    <section class="flex flex-col items-center gap-y-4">
      <h2 class="text-center text-2xl font-bold text-gray-800">
        {{ pokemonDetails.name }}
      </h2>

      <img
        v-bind:src="pokemonDetails.image"
        class="w-full max-w-[200px] h-[200px]"
      />

      <section class="w-full">
        <span class="font-bold uppercase text-[12px]">Weight: </span>
        <span> {{ pokemonDetails.weight }} </span>
      </section>

      <section class="w-full">
        <div class="mb-3 font-bold uppercase text-[12px]">Abilities</div>
        <div class="flex items-center flex-wrap gap-x-4 gap-y-2">
          <div
            v-for="ability in pokemonDetails.abilities"
            v-bind:key="ability"
            class="bg-gray-500 text-white px-3 py-1 rounded-md"
          >
            {{ ability }}
          </div>
        </div>
      </section>

      <section class="w-full">
        <div class="mb-3 font-bold uppercase text-[12px]">Stats</div>
        <PokemonStats v-bind:stats="pokemonDetails.stats" />
      </section>
    </section>
  </div>
</template>

<script setup lang="ts">
import type { PokemonDetails } from '../../types/pokemons'
import PokemonStats from './PokemonStats.vue'

defineProps<{
  pokemonDetails: PokemonDetails
}>()
</script>

<style scoped></style>
