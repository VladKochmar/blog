<template>
  <div class="md:relative max-w-main px-4 mx-auto">
    <img src="@/assets/img/home/why-we-started/image.jpg" class="max-w-full" />
    <div class="pt-8 md:bg-white md:p-20 md:absolute md:bottom-0 md:right-0 md:max-w-710">
      <strong class="inline-block font-title text-black-23 text-base uppercase mb-6">
        Why we started
      </strong>
      <h2 class="title text-black-23 text-3xl md:text-5xl mb-4">
        It started out as a simple idea and evolved into our passion
      </h2>
      <p class="text-gray-medium mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip.
      </p>
      <router-link :to="{ name: 'about' }" class="btn">Discover our story ></router-link>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
