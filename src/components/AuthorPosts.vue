<template>
  <div class="max-w-medium mx-auto px-4 py-16 md:py-32">
    <h2 class="title text-5xl text-black-23 mb-16">My Posts</h2>
    <PostCard
      v-show="postsList?.length"
      v-for="post in postsList"
      :key="post.id"
      :post="post"
      class="mb-16 last:mb-0"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

import type { Post } from '@/types/Post'

const props = defineProps<{ postsId: string[] }>()

const postsList = ref<Post[]>([])

import { usePostsStore } from '@/stores/posts'
import PostCard from './posts/PostCard.vue'
const { getPostById } = usePostsStore()

function fillPostsList() {
  for (let id of props.postsId) {
    const post = getPostById(id)
    if (post) postsList.value.push(post)
  }
}

onMounted(() => fillPostsList())
</script>

<style scoped></style>
