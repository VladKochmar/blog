<template>
  <SimpleMasterPage>
    <div v-if="currentAuthor"><AuthorMainBlock :author="currentAuthor" /></div>
    <AuthorPosts v-if="currentAuthor?.posts" :posts-id="currentAuthor?.posts" />
    <h2 v-else class="title text-4xl text-black-23 text-center py-9">
      There are currently no posts :(
    </h2>
  </SimpleMasterPage>
</template>

<script setup lang="ts">
import { onMounted, ref, watchEffect } from 'vue'
import type { Author } from '@/types/Author'

import SimpleMasterPage from '@/masterpages/SimpleMasterPage.vue'
import AuthorPosts from '@/components/AuthorPosts.vue'

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

import { useRouter } from 'vue-router'
const router = useRouter()

import { useAuthorsStore } from '@/stores/authors'
import AuthorMainBlock from '@/components/AuthorMainBlock.vue'
const { getAuhtorById } = useAuthorsStore()

const currentAuthor = ref<Author>()

function findAuthor() {
  if (props.id) {
    currentAuthor.value = getAuhtorById(props.id)
    if (!currentAuthor.value) router.push({ name: 'notFound' })
  } else router.push({ name: 'notFound' })
}

watchEffect(() => findAuthor())

onMounted(() => findAuthor())
</script>

<style scoped></style>
