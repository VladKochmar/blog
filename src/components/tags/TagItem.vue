<template>
  <div
    class="flex justify-center items-center text-gray-medium text-sm leading-loose py-2 px-7 border-gray-medium border-2 rounded-full"
  >
    {{ title }}
  </div>
</template>

<script setup lang="ts">
defineProps<{ title: string }>()
</script>

<style scoped></style>
