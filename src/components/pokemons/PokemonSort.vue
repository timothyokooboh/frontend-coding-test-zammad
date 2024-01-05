<template>
  <div class="flex items-center">
    <label for="sort" class="mr-3 text-white font-bold">Sort</label>
    <select id="sort" class="py-[5px] px-4" v-on:change="handleChange">
      <option value="ascending">Ascending</option>
      <option value="descending">Descending</option>
    </select>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  sortingOrder: 'ascending' | 'descending'
}>()

const emit = defineEmits(['update:sortingOrder'])

const handleChange = (event: Event) => {
  emit('update:sortingOrder', (event.target as HTMLSelectElement).value)
}
</script>

<style scoped></style>
