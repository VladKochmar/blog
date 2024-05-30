<template>
  <div class="max-w-main px-4 mx-auto">
    <h2 class="title text-black-23 text-4xl mb-12" :class="{ 'text-center': isCentered }">
      {{ title }}
    </h2>
    <div class="flex justify-center flex-wrap gap-y-4 sm:-mx-2 md:-mx-4 md:gap-y-8">
      <div
        v-for="category in categories"
        :key="category.id"
        class="sm:flex-2 lg:flex-4 sm:px-2 md:px-4"
      >
        <CategoryItem :category="category" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CategoryItem from './CategoryItem.vue'
import categories from '@/data/categories.json'

defineProps({
  title: {
    type: String,
    default: 'Choose A Category'
  },
  isCentered: {
    type: Boolean,
    default: true
  }
})
</script>

<style scoped></style>
