<template>
  <div class="w-[90%] max-w-[800px] mx-auto text-left pb-10 pt-5">
    <section class="bg-blue-500 py-2 px-4 rounded-md mb-6">
      <h2 class="mb-6 text-white text-2xl font-bold uppercase">Pokemons</h2>

      <div class="flex items-center flex-wrap gap-y-5 mb-6">
        <div v-if="showSearchInput" class="relative flex-grow">
          <span
            class="material-symbols-outlined text-gray-500 absolute top-[5px] left-[8px] text-xl"
            >search</span
          >
          <BaseInput
            v-model="keyword"
            placeholder="Search for pokemons"
            class="pl-10"
          />
        </div>

        <PokemonSort v-model:sorting-order="sortingOrder" />
      </div>
    </section>

    <PokemonPagination
      v-if="showPagination"
      v-bind:show-previous="!!previousPageUrl"
      v-bind:show-next="!!nextPageUrl"
      class="mb-6"
      v-on:handle:next="getNextPage"
      v-on:handle:previous="getPreviousPage"
    />

    <Transition name="fade" mode="out-in" appear>
      <div v-if="isLoading" class="flex justify-center items-center">
        <BaseLoader class="mt-[100px]" />
      </div>

      <section v-else>
        <PokemonList v-bind:pokemons="filteredPokemons" />

        <Transition name="fade" mode="out-in">
          <div
            v-if="keyword.length > 0 && filteredPokemons.length === 0"
            class="text-center"
          >
            No result found for "{{ keyword }}"
          </div>
        </Transition>
      </section>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, watch } from 'vue'
import { useListPokemons } from '../composables/useListPokemons'
import { useSortPokemons } from '../composables/useSortPokemons'
import PokemonList from '../components/pokemons/PokemonList.vue'
import BaseInput from '../components/BaseInput.vue'
import PokemonPagination from '../components/pokemons/PokemonPagination.vue'
import BaseLoader from '../components/BaseLoader.vue'
import PokemonSort from '../components/pokemons/PokemonSort.vue'

const { sortByName } = useSortPokemons()

const {
  isLoading,
  pokemons,
  getNextPage,
  getPreviousPage,
  nextPageUrl,
  previousPageUrl,
} = useListPokemons()

const keyword = ref('')
const sortingOrder = ref<'ascending' | 'descending'>('ascending')

const filteredPokemons = computed(() => {
  return pokemons.value.filter((item) =>
    item.name.toLowerCase().includes(keyword.value.toLowerCase()),
  )
})

const showSearchInput = computed(() => {
  return filteredPokemons.value.length > 0 || keyword.value.length > 0
})

const showPagination = computed(() => {
  return !isLoading.value && filteredPokemons.value.length > 0
})

watch([sortingOrder, pokemons], () => {
  sortByName(pokemons.value, sortingOrder.value)
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  transform: translateY(30px);
}
</style>
