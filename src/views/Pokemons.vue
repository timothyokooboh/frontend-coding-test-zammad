<template>
  <div class="w-[90%] max-w-[800px] mx-auto text-left px-8 py-10">
    <h2 class="mb-5 text-gray-800 text-2xl font-bold uppercase">Pokemons</h2>
    <div v-if="isLoading">Loading...</div>
    <PokemonList v-else v-bind:pokemons="pokemons" />
  </div>
</template>

<script lang="ts" setup>
import { useListPokemons } from '../composables/useListPokemons'
import PokemonList from '../components/pokemons/PokemonList.vue'

const { isLoading, pokemons } = useListPokemons()
</script>
