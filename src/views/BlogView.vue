<template>
  <MainMasterPage>
    <BlogMainBlock />
    <BlogCatalog class="pt-16 pb-8" />
    <CategoriesList title="All Categories" :is-centered="false" class="pt-8 pb-16" />
  </MainMasterPage>
</template>

<script setup lang="ts">
import MainMasterPage from '@/masterpages/MainMasterPage.vue'
import BlogMainBlock from '@/components/BlogMainBlock.vue'
import BlogCatalog from '@/components/BlogCatalog.vue'
import CategoriesList from '@/components/categories/CategoriesList.vue'
</script>

<style scoped></style>
