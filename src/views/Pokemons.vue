<template>
  <div class="w-[90%] max-w-[800px] mx-auto text-left px-8 py-10">
    <h2 class="mb-5 text-gray-800 text-2xl font-bold uppercase">Pokemons</h2>
    <div v-if="isLoading">Loading...</div>

    <section v-else>
      <div class="text-center mb-10">
        <SearchInput v-model="keyword" placeholder="Search for pokemons" />
      </div>

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
import SearchInput from '../components/SearchInput.vue'

const { isLoading, pokemons } = useListPokemons()

const keyword = ref('')
const filteredPokemons = computed(() => {
  return pokemons.value.filter((item) =>
    item.name.toLowerCase().includes(keyword.value.toLowerCase()),
  )
})
</script>
