<template>
  <div
    class="md:bg-gray-medium flex flex-col items-center gap-x-6 gap-y-10 lg:flex-row lg:items-start lg:justify-between md:py-20 md:px-16"
  >
    <h2 class="title text-2xl md:text-4xl text-center lg:text-left lg:max-w-516">
      Subscribe to our news letter to get latest updates and news
    </h2>
    <div class="inline-flex flex-col md:flex-row md:items-center gap-y-5 gap-x-6">
      <input
        type="email"
        placeholder="Enter Your Email"
        class="border-2 border-gray-dark bg-transparent px-6 py-4 placeholder:text-gray-dark"
      />
      <button class="btn">Subscribe</button>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
