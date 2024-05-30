<template>
  <div class="max-w-main px-4 mx-auto">
    <div class="bg-yellow-light md:flex md:justify-between py-10 px-6 md:py-20 md:px-16 lg:px-28">
      <div
        class="text-black-23 border-b pb-8 mb-8 md:flex-2 md:max-w-446 md:border-b-0 md:border-r border-gray-medium md:mb-0"
      >
        <div class="max-w-370 pr-5">
          <strong class="inline-block font-title text-base uppercase mb-3">TESTIMONIALs</strong>
          <h2 class="title text-3xl mb-4">What people say about our blog</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
        </div>
      </div>
      <TestimonialsSlider class="md:flex-2 md:min-w-0 md:pl-5" />
    </div>
  </div>
</template>

<script setup lang="ts">
import TestimonialsSlider from './TestimonialsSlider.vue'
</script>

<style scoped></style>
