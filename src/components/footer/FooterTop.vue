<template>
  <div class="flex flex-col items-center justify-between sm:flex-row gap-y-5">
    <router-link :to="{ name: 'home' }" class="max-w-32">
      <img src="@/assets/img/logo.svg" alt="Blog icon" class="w-full" />
    </router-link>
    <ul class="inline-flex flex-wrap sm:flex-nowrap gap-x-6 gap-y-8">
      <li class="whitespace-nowrap">
        <router-link :to="{ name: 'home' }">Home</router-link>
      </li>
      <li class="whitespace-nowrap">
        <router-link :to="{ name: 'blog' }">Blog</router-link>
      </li>
      <li class="whitespace-nowrap">
        <router-link :to="{ name: 'about' }">About us</router-link>
      </li>
      <li class="whitespace-nowrap">
        <router-link :to="{ name: 'contact' }">Contact us</router-link>
      </li>
      <li class="whitespace-nowrap">
        <router-link :to="{ name: 'privacy' }">Privacy Policy</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
