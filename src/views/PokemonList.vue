<template>
  <div></div>
</template>

<script lang="ts" setup>
import { useListPokemons } from '../composables/useListPokemons'

const { isPending, pokemons } = useListPokemons()
</script>
