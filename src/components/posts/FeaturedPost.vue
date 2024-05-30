<template>
  <div v-if="post" class="p-4 sm:p-8 border-gray-medium border-1">
    <div class="relative pt-50 mb-8">
      <img
        :src="post.imgSrc"
        class="absolute top-0 left-0 w-full h-full object-cover object-center"
      />
    </div>
    <div class="text-gray-dark text-sm leading-snug mb-4">
      By <span class="text-purple-dark mb-2">{{ author?.name }}</span> | {{ post.date }}
    </div>
    <h3 class="title text-xl sm:text-2xl mb-4">{{ post.title }}</h3>
    <p class="text-gray-medium leading-relaxed mb-8">{{ post.subtitle }}</p>
    <router-link :to="{ name: 'post', params: { id: post.id } }" class="btn"
      >Read More ></router-link
    >
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import type { Post } from '@/types/Post'
import type { Author } from '@/types/Author'

const id = defineModel<string | number>('id')

import { usePostsStore } from '@/stores/posts'
const { getPostById } = usePostsStore()

import { useAuthorsStore } from '@/stores/authors'
const { getAuhtorById } = useAuthorsStore()

const post = ref<Post>()
const author = ref<Author | null>()

watch(id, loadData)

onMounted(() => {
  loadData()
})

function loadData() {
  if (id.value) post.value = getPostById(id.value)
  if (post.value?.authorId) author.value = getAuhtorById(post.value?.authorId)
}
</script>

<style scoped></style>
