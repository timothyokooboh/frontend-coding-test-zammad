<template>
  <input
    class="border-[1px] border-gray-300 w-[90%] max-w-[300px] px-4 py-2 rounded-sm"
    v-on:input="handleInput"
  />
</template>

<script setup lang="ts">
defineProps<{
  modelValue?: string
}>()

const emit = defineEmits(['update:modelValue'])

const handleInput = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}
</script>

<style scoped></style>
