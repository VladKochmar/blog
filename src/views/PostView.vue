<template>
  <MainMasterPage>
    <div v-if="currentPost">
      <PostMainBlock
        :title="currentPost.title"
        :author-id="currentPost.authorId"
        :category="currentPost.category"
        :date="currentPost.date"
        class="pt-32 sm:pt-52 pb-16"
      />
    </div>
    <div class="max-w-main mx-auto px-4">
      <img :src="currentPost?.imgSrc" class="max-w-full" />
    </div>
    <div class="max-w-768 mx-auto py-16 px-4" v-html="currentPost?.content"></div>
    <ItemsList class="py-16" />
  </MainMasterPage>
</template>

<script setup lang="ts">
import { onMounted, ref, watchEffect } from 'vue'
import type { Post } from '@/types/Post'

import MainMasterPage from '@/masterpages/MainMasterPage.vue'

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

import { useRouter } from 'vue-router'
const router = useRouter()

import PostMainBlock from '@/components/PostMainBlock.vue'
import ItemsList from '@/components/posts/readNext/ItemsList.vue'

import { usePostsStore } from '@/stores/posts'
const { getPostById } = usePostsStore()

const currentPost = ref<Post>()

function findPost() {
  if (props.id) {
    currentPost.value = getPostById(props.id)
    if (!currentPost.value) router.push({ name: 'notFound' })
  } else router.push({ name: 'notFound' })
}

watchEffect(() => findPost())

onMounted(() => {
  findPost()
})
</script>

<style scoped></style>
