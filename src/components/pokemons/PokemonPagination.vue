<template>
  <div class="flex items-center justify-end">
    <button
      v-if="showPrevious"
      class="mr-4 border-[1px] border-gray-800 rounded-sm py-2 px-4 hover:bg-gray-800 hover:text-white duration-200"
      data-testid="previous"
      v-on:click="$emit('handle:previous')"
    >
      Previous
    </button>

    <button
      v-if="showNext"
      class="border-[1px] border-gray-800 rounded-sm py-2 px-4 hover:bg-gray-800 hover:text-white duration-200"
      data-testid="next"
      v-on:click="$emit('handle:next')"
    >
      Next
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  showPrevious: boolean
  showNext: boolean
}>()
defineEmits(['handle:previous', 'handle:next'])
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
