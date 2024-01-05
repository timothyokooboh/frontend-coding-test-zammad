<template>
  <div class="shadow-md rounded-sm py-2 px-10">
    <section class="mb-4">
      <RouterLink
        data-testid="back-btn"
        v-bind:to="{ name: 'PokemonList' }"
        class="w-fit flex items-center text-gray-800 font-bold"
      >
        <span class="text-2xl mr-2">&larr;</span>
        <div class="text-[14px]">Back To Pokemons</div>
      </RouterLink>
    </section>

    <section class="flex flex-col items-center gap-y-4">
      <h2
        class="text-center text-2xl font-bold text-gray-800"
        data-testid="name"
      >
        {{ pokemonDetails.name }}
      </h2>

      <img
        v-bind:src="pokemonDetails.image"
        class="w-full max-w-[200px] h-[200px]"
        alt="pokeon image"
        data-testid="image"
      />

      <section class="w-full" data-testid="weight">
        <span class="font-bold uppercase text-[12px]">Weight: </span>
        <span> {{ pokemonDetails.weight }} </span>
      </section>

      <PokemonAbilities
        v-bind:abilities="pokemonDetails.abilities"
        data-testid="abilities"
      />

      <section class="w-full">
        <div
          class="mb-3 font-bold uppercase text-[12px]"
          data-testid="stats-title"
        >
          Stats
        </div>

        <PokemonStats
          v-bind:stats="pokemonDetails.stats"
          data-testid="stats-content"
        />
      </section>
    </section>
  </div>
</template>

<script setup lang="ts">
import type { PokemonDetails } from '../../types/pokemons'
import PokemonStats from './PokemonStats.vue'
import PokemonAbilities from './PokemonAbilities.vue'

defineProps<{
  pokemonDetails: PokemonDetails
}>()
</script>

<style scoped></style>
