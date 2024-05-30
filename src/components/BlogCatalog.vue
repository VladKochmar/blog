<template>
  <div class="max-w-main mx-auto px-4">
    <h1 class="title text-5xl text-black-23 border-b-1 border-b-gray-medium pb-8 mb-16">
      All posts
    </h1>
    <div>
      <PostCard v-for="post in getPostsList" :key="post.id" :post="post" class="mb-16 last:mb-0" />
    </div>
  </div>
</template>

<script setup lang="ts">
import PostCard from './posts/PostCard.vue'

import { usePostsStore } from '@/stores/posts'
const { getPostsList } = usePostsStore()
</script>

<style scoped></style>
