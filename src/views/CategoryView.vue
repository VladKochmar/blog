<template>
  <SimpleMasterPage>
    <CommonMainSection
      :title="category"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
    >
      <ul class="inline-flex items-center gap-x-1 mt-8">
        <li
          class="font-medium text-black-23 leading-tight tracking-wider uppercase transition duration-300 hover:text-gray-medium"
        >
          <router-link :to="{ name: 'blog' }">Blog</router-link>
        </li>
        <li class="font-medium text-black-23 leading-tight tracking-wider uppercase">></li>
        <li class="font-medium text-black-23 leading-tight tracking-wider uppercase">
          {{ category }}
        </li>
      </ul>
    </CommonMainSection>
    <div
      class="max-w-main mx-auto px-4 py-16 md:py-32 flex flex-col-reverse lg:flex-row gap-x-6 gap-y-10 justify-between"
    >
      <div class="flex-840">
        <div v-if="getFilteredList?.length">
          <PostCard
            v-for="post in getFilteredList"
            :key="post.id"
            :post="post"
            class="mb-16 last:mb-0"
            v-slot="slotProps"
          >
            <h3
              class="title text-black-23 text-2xl mb-4 transition duration-300 hover:text-purple-dark"
            >
              {{ slotProps.title }}
            </h3>
          </PostCard>
        </div>
        <div v-else>
          <h2 class="title text-4xl">It's empty</h2>
        </div>
      </div>
      <div class="flex-300">
        <div class="mb-12">
          <h2 class="title text-black-23 text-4xl mb-10">Categories</h2>
          <CategoryButton
            v-for="category in categories"
            :key="category.id"
            :category="category"
            class="mb-6 last:mb-0"
          />
        </div>
        <div>
          <h2 class="title text-black-23 text-4xl mb-6">All Tags</h2>
          <TagsList />
        </div>
      </div>
    </div>
  </SimpleMasterPage>
</template>

<script setup lang="ts">
import { onMounted, toRefs, watchEffect } from 'vue'

import CommonMainSection from '@/components/CommonMainSection.vue'
import SimpleMasterPage from '@/masterpages/SimpleMasterPage.vue'
import PostCard from '@/components/posts/PostCard.vue'
import CategoryButton from '@/components/categories/CategoryButton.vue'
import TagsList from '@/components/tags/TagsList.vue'

import categories from '@/data/categories.json'

const props = defineProps({
  category: {
    type: String,
    required: true
  }
})

import { usePostsStore } from '@/stores/posts'
const postsStore = usePostsStore()
const { getFilteredList } = toRefs(postsStore)
const { filterPostsByCategory } = postsStore

watchEffect(() => filterPostsByCategory(props.category))

onMounted(async () => {
  filterPostsByCategory(props.category)
})
</script>

<style scoped></style>
