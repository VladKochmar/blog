<script setup lang="ts">
import SplitArticlesBlock from '@/components/SplitArticlesBlock.vue'
import HomeMainBlock from '@/components/HomeMainBlock.vue'
import SponsorsList from '@/components/SponsorsList.vue'
import WhyWeStarted from '@/components/WhyWeStarted.vue'
import AuthorsList from '@/components/authors/AuthorsList.vue'
import CategoriesList from '@/components/categories/CategoriesList.vue'
import PostsSection from '@/components/posts/PostsSection.vue'
import TestimonialsSection from '@/components/testimonials/TestimonialsSection.vue'
import MainMasterPage from '@/masterpages/MainMasterPage.vue'

const splitArticles = [
  {
    subtitle: 'ABOUT US',
    title: 'We are a community of content writers who share their learnings',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    subtitle: 'Our mision',
    title: 'Creating valuable content for creatives all around the world',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  }
]
</script>

<template>
  <MainMasterPage>
    <HomeMainBlock />
    <PostsSection class="pt-32 pb-16" />
    <SplitArticlesBlock :articles="splitArticles" class="py-16">
      <template #title0="{ title }">
        <h2 class="font-title text-black-23 text-2xl xl:text-4xl mb-4">
          {{ title }}
        </h2>
      </template>
      <template #more0>
        <router-link :to="{ name: 'home' }" class="font-title font-bold text-lg text-purple-dark">
          Read More >
        </router-link>
      </template>
    </SplitArticlesBlock>
    <CategoriesList class="py-16" />
    <WhyWeStarted class="py-16" />
    <AuthorsList class="pt-16 pb-12" />
    <SponsorsList class="pt-12 pb-24" />
    <TestimonialsSection class="pb-16" />
  </MainMasterPage>
</template>
