<template>
  <div class="w-[90%] max-w-[650px] mx-auto text-left px-8 py-10">
    <h2 class="mb-5 text-gray-800 text-2xl font-bold uppercase">Pokemons</h2>

    <div v-if="showSearchInput" class="text-center mb-10">
      <BaseInput v-model="keyword" placeholder="Search for pokemons" />
    </div>

    <PokemonPagination
      v-if="showPagination"
      v-bind:show-previous="!!previousPageUrl"
      v-bind:show-next="!!nextPageUrl"
      class="mb-4"
      v-on:handle:next="handleNext"
      v-on:handle:previous="handlePrevious"
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
import { ref, computed } from 'vue'
import { useListPokemons } from '../composables/useListPokemons'
import PokemonList from '../components/pokemons/PokemonList.vue'
import BaseInput from '../components/BaseInput.vue'
import PokemonPagination from '../components/pokemons/PokemonPagination.vue'
import BaseLoader from '../components/BaseLoader.vue'

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

const showSearchInput = computed(() => {
  return filteredPokemons.value.length > 0 || keyword.value.length > 0
})

const showPagination = computed(() => {
  return !isLoading.value && filteredPokemons.value.length > 0
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
