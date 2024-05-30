<template>
  <div class="relative py-24 sm:pt-32 sm:pb-48">
    <div
      class="grid text-center justify-items-center lg:text-start lg:block relative z-10 max-w-main px-4 mx-auto text-white"
    >
      <p class="inline-block font-title leading-tight uppercase mb-6">
        Posted on <strong>startup</strong>
      </p>
      <h1 class="title text-4xl sm:text-5xl md:text-6xl mb-6 max-w-800">
        Step-by-step guide to choosing great font pairs
      </h1>
      <p class="leading-relaxed mb-4">
        By <span class="text-yellow-medium">James West</span> | May 23, 2022
      </p>
      <p class="leading-relaxed max-w-600 mb-12">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident.
      </p>
      <router-link :to="{ name: 'blog' }" class="btn">Read More ></router-link>
    </div>
    <img
      src="@/assets/img/home/main-block/image.jpg"
      class="absolute top-0 left-0 w-full h-full object-cover object-center"
    />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
