<template>
  <div class="max-w-main px-4 mx-auto">
    <h2 class="title text-4xl text-black-23 text-center mb-12">List of Authors</h2>
    <div class="flex sm:flex-row flex-col flex-wrap gap-y-4 sm:-mx-2 md:-mx-4 md:gap-y-8">
      <div
        v-for="author in getAuthorsList"
        :key="author.id"
        class="sm:flex-2 lg:flex-4 sm:px-2 md:px-4"
      >
        <AuthorItem :author="author" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AuthorItem from './AuthorItem.vue'

import { useAuthorsStore } from '@/stores/authors'
const { getAuthorsList } = useAuthorsStore()
</script>

<style scoped></style>
