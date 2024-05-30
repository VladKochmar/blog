<template>
  <div class="pt-40">
    <SplitTitleAndText class="mb-10 lg:-mb-16" />
    <StatisticsComponent />
    <SplitArticlesBlock :articles="splitArticles" class="md:-mt-6">
      <template #lines>
        <div class="absolute top-0 left-0 md:left-4 lg:left-28 flex h-6 w-full max-w-860">
          <div class="h-full bg-purple-dark w-1/3"></div>
          <div class="h-full bg-yellow-dark w-2/3"></div>
        </div>
      </template>
    </SplitArticlesBlock>
  </div>
</template>

<script setup lang="ts">
import SplitTitleAndText from '@/components/aboutMainBlock/SplitTitleAndText.vue'
import SplitArticlesBlock from '@/components/SplitArticlesBlock.vue'
import StatisticsComponent from './StatisticsComponent.vue'

const splitArticles = [
  {
    subtitle: 'Our mision',
    title: 'Creating valuable content for creatives all around the world',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.'
  },
  {
    subtitle: 'Our Vision',
    title: 'A platform that empowers individuals to improve',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.'
  }
]
</script>

<style scoped></style>
