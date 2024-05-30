<template>
  <div class="bg-lavender pt-40 pb-20">
    <div class="max-w-768 px-4 mx-auto">
      <div class="flex flex-col items-center text-black-23 text-center">
        <h1 class="title text-4xl md:text-5xl mb-4">{{ title }}</h1>
        <p class="leading-relaxed">{{ text }}</p>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ title: string; text: string }>()
</script>

<style scoped></style>
