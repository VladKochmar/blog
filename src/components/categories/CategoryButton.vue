<template>
  <router-link
    :to="{ name: 'category', params: { category: category.title } }"
    class="flex items-center gap-x-4 p-6 border-1 border-gray-medium transition duration-300 hover:bg-yellow-medium"
  >
    <div class="inline-block p-3 rounded-lg bg-yellow-light">
      <IconElement :title="category.icon" />
    </div>
    <h3 class="title text-black-23 text-2xl">{{ category.title }}</h3>
  </router-link>
</template>

<script setup lang="ts">
import IconElement from '../icons/IconElement.vue'
import type { Category } from '@/types/Category'

defineProps<{ category: Category }>()
</script>

<style scoped>
.router-link-active {
  background-color: #ffd050;
}
</style>
