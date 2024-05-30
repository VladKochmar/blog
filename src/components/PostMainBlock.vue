<template>
  <div class="max-w-768 mx-auto px-4">
    <div class="inline-flex items-center gap-x-4 mb-6">
      <img
        :src="currentAuthor?.imgSrc"
        :alt="currentAuthor?.name"
        class="w-12 h-12 rounded-full object-cover object-center"
      />
      <div>
        <router-link
          v-show="currentAuthor"
          :to="{ name: 'author', params: { id: currentAuthor?.id } }"
          class="block title text-purple-dark text-2xl leading-normal"
        >
          {{ currentAuthor?.name }}
        </router-link>
        <span class="text-gray-medium leading-relaxed">Posted on {{ $props?.date }}</span>
      </div>
    </div>
    <h1 class="title text-3xl sm:text-5xl text-black-23 mb-8">{{ title }}</h1>
    <div class="inline-flex items-center gap-x-2">
      <IconElement :title="icon" /> <span class="title text-black-23 text-2xl">{{ category }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watchEffect } from 'vue'
import type { Author } from '@/types/Author'

import IconElement from './icons/IconElement.vue'

const props = defineProps<{
  title?: string
  authorId?: string | number
  category?: string
  date?: string
}>()

const icon = computed(() => {
  let result = ''

  switch (props.category) {
    case 'Business':
      result = 'business'
      break
    case 'Startup':
      result = 'shuttle'
      break
    case 'Economy':
      result = 'economy'
      break
    case 'Technology':
      result = 'cyborg'
      break
  }

  return result
})

import { useAuthorsStore } from '@/stores/authors'
const { getAuhtorById } = useAuthorsStore()

const currentAuthor = ref<Author>()

watchEffect(() => {
  if (props.authorId) currentAuthor.value = getAuhtorById(props.authorId)
})

onMounted(() => {
  if (props.authorId) currentAuthor.value = getAuhtorById(props.authorId)
})
</script>

<style scoped></style>
