<template>
  <div>
    <router-link :to="{ name: 'post', params: { id: post.id } }" class="block mb-8">
      <img
        :src="post.imgSrc"
        class="sm:h-320 object-cover object-center transition-all duration-300 hover:grayscale max-w-full"
      />
    </router-link>
    <div class="text-sm font-medium leading-normal text-gray-dark mb-4">
      By
      <router-link
        v-show="author"
        :to="{ name: 'author', params: { id: author?.id } }"
        class="text-purple-dark"
        >{{ author?.name }}</router-link
      >
      | {{ post.date }}
    </div>
    <router-link :to="{ name: 'post', params: { id: post.id } }">
      <h3 class="title text-black-23 text-2xl mb-4 transition duration-300 hover:text-purple-dark">
        {{ post.title }}
      </h3>
    </router-link>
    <p class="text-gray-medium leading-relaxed">{{ post.subtitle }}</p>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

import type { Post } from '@/types/Post'
import type { Author } from '@/types/Author'

const props = defineProps<{ post: Post }>()

import { useAuthorsStore } from '@/stores/authors'
const { getAuhtorById } = useAuthorsStore()

const author = ref<Author>()

onMounted(() => {
  author.value = getAuhtorById(props.post.authorId)
})
</script>

<style scoped></style>
