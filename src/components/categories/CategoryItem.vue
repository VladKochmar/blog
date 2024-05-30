<template>
  <router-link
    :to="{ name: 'category', params: { category: category.title } }"
    class="inline-block p-8 border-1 border-gray-medium transition duration-300 hover:bg-yellow-medium"
  >
    <div class="inline-block p-3 mb-4 rounded-lg bg-yellow-light">
      <IconElement :title="category.icon" />
    </div>
    <h3 class="title text-black-23 text-2xl mb-1">{{ category.title }}</h3>
    <p v-if="category?.text" class="text-gray-medium">{{ category.text }}</p>
  </router-link>
</template>

<script setup lang="ts">
import IconElement from '../icons/IconElement.vue'
import type { Category } from '@/types/Category'

defineProps<{ category: Category }>()
</script>

<style scoped></style>
