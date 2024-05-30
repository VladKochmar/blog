<template>
  <div class="max-w-main mx-auto px-4">
    <h2 class="title text-black-23 text-4xl mb-16">What to read next</h2>
    <div class="flex flex-wrap gap-x-8">
      <ItemPost v-for="post in posts" :post="post" :key="post.id" class="flex-405 min-w-72" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ItemPost from './ItemPost.vue'

import { usePostsStore } from '@/stores/posts'
const { getPostsList } = usePostsStore()

const posts = getPostsList.slice(0, 3)
</script>

<style scoped></style>
