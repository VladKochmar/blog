<template>
  <div class="flex flex-wrap gap-4">
    <TagItem v-for="tag in tags" :key="tag.id" :title="tag.title" style="flex: 1 1 100px" />
  </div>
</template>

<script setup lang="ts">
import TagItem from './TagItem.vue'
import tags from '@/data/tags.json'
</script>

<style scoped></style>
