<template>
  <SimpleMasterPage>
    <div class="max-w-768 mx-auto pt-36 pb-24 px-4 flex flex-col items-center text-center">
      <strong class="title text-8xl text-black-23">404</strong>
      <h1 class="title text-5xl text-black-23 mb-8">Page Not Found :(</h1>
      <router-link :to="{ name: 'home' }" class="btn">Back to home</router-link>
    </div>
  </SimpleMasterPage>
</template>

<script setup lang="ts">
import SimpleMasterPage from '@/masterpages/SimpleMasterPage.vue'
</script>

<style scoped></style>
