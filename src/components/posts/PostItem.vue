<template>
  <div
    class="cursor-pointer px-8 pt-8 pb-6 transition duration-300 hover:bg-yellow-light"
    :class="{ 'bg-yellow-light': isSelected }"
    @click="selectNewPost(post.id)"
  >
    <div class="text-gray-dark text-sm leading-snug mb-2">
      By <span class="text-purple-dark mb-2">{{ author?.name }}</span> | {{ post.date }}
    </div>
    <h3 class="title text-xl sm:text-2xl max-w-370">{{ post.title }}</h3>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

import type { Author } from '@/types/Author'
import type { Post } from '@/types/Post'
const props = defineProps<{ post: Post; selectedId: string | number }>()

import { useAuthorsStore } from '@/stores/authors'
const { getAuhtorById } = useAuthorsStore()

const author = ref<Author | null>()

onMounted(() => {
  author.value = getAuhtorById(props.post.authorId)
})

const isSelected = computed(() => {
  return props.post.id === props.selectedId
})

const emit = defineEmits<{ (e: 'update', id: number | string): void }>()

function selectNewPost(newId: string | number) {
  emit('update', newId)
}
</script>

<style scoped></style>
