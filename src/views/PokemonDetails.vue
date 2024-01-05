<template>
  <div
    class="w-[90%] max-w-[650px] mx-auto text-left px-5 py-4 sm:px-10 sm:py-8"
  >
    <div v-if="isLoading" class="flex justify-center items-center">
      <BaseLoader class="mt-[100px]" />
    </div>

    <PokemonListItemDetails v-else v-bind:pokemon-details="pokemonDetails" />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useViewPokemon } from '../composables/useViewPokemon'
import PokemonListItemDetails from '../components/pokemons/PokemonListItemDetails.vue'
import BaseLoader from '../components/BaseLoader.vue'

const route = useRoute()
const { isLoading, pokemonDetails } = useViewPokemon(
  route.params.name as string,
)
</script>

<style scoped></style>
