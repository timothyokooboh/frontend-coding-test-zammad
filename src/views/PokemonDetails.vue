<template>
  <div class="w-[90%] max-w-[800px] mx-auto text-left py-10">
    <Transition name="fade" mode="out-in" appear>
      <div v-if="isLoading" class="flex justify-center items-center">
        <BaseLoader class="mt-[100px]" />
      </div>

      <PokemonListItemDetails v-else v-bind:pokemon-details="pokemonDetails" />
    </Transition>
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
