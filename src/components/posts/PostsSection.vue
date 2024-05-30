<template>
  <div class="max-w-main px-4 mx-auto flex flex-col lg:flex-row gap-8">
    <div class="lg:flex-730">
      <h2 class="title text-4xl mb-8">Featured Post</h2>
      <FeaturedPost v-model:id="selectedId" />
    </div>
    <div class="lg:flex-520">
      <div class="flex justify-between gap-x-3 mb-8">
        <h2 class="title text-4xl">All Posts</h2>
        <router-link :to="{ name: 'blog' }" class="text-purple-dark leading-relaxed">
          View All
        </router-link>
      </div>
      <PostItem
        v-for="post in posts"
        :key="post.id"
        :post="post"
        :selected-id="selectedId"
        @update="updateSelectedId($event)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import PostItem from './PostItem.vue'

import { usePostsStore } from '@/stores/posts'
import FeaturedPost from './FeaturedPost.vue'
const { getPostsList } = usePostsStore()
const posts = getPostsList.slice(0, 4)

const selectedId = ref<string | number>(posts[0].id)

function updateSelectedId(newId: number | string) {
  selectedId.value = newId
}
</script>

<style scoped></style>
