<template>
  <div class="w-[90%] max-w-[650px] mx-auto text-left px-8 py-10">
    <h2 class="mb-5 text-gray-800 text-2xl font-bold uppercase">Pokemons</h2>
    <div v-if="isLoading">Loading...</div>

    <section v-else>
      <div class="text-center mb-10">
        <BaseInput v-model="keyword" placeholder="Search for pokemons" />
      </div>

      <PokemonPagination
        v-bind:show-previous="!!previousPageUrl"
        v-bind:show-next="!!nextPageUrl"
        class="mb-4"
        v-on:handle:next="handleNext"
        v-on:handle:previous="handlePrevious"
      />

      <PokemonList v-bind:pokemons="filteredPokemons" />

      <div v-if="keyword && filteredPokemons.length === 0" class="text-center">
        No result found for "{{ keyword }}"
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useListPokemons } from '../composables/useListPokemons'
import PokemonList from '../components/pokemons/PokemonList.vue'
import BaseInput from '../components/BaseInput.vue'
import PokemonPagination from '../components/pokemons/PokemonPagination.vue'

const {
  isLoading,
  pokemons,
  getNextPage,
  getPreviousPage,
  nextPageUrl,
  previousPageUrl,
} = useListPokemons()

const keyword = ref('')
const filteredPokemons = computed(() => {
  return pokemons.value.filter((item) =>
    item.name.toLowerCase().includes(keyword.value.toLowerCase()),
  )
})

const handleNext = () => {
  keyword.value = ''
  getNextPage()
}

const handlePrevious = () => {
  keyword.value = ''
  getPreviousPage()
}
</script>
