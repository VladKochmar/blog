<template>
  <MainMasterPage>
    <AboutMainBlock />
    <SplitContent :content-data="content1">
      <div
        class="absolute top-0 left-0 bg-yellow-medium w-24 h-28 rounded-ss-3xl -translate-x-1/4 xl:-translate-x-1/2 translate-y-full"
      ></div>
    </SplitContent>
    <SplitContent :content-data="content2" :is-reverse="true">
      <div
        class="absolute bottom-0 left-0 bg-purple-dark w-20 h-20 rounded-full translate-x-full translate-y-1/2"
      ></div>
    </SplitContent>
    <AuthorsList class="py-16" />
  </MainMasterPage>
</template>

<script setup lang="ts">
import AboutMainBlock from '@/components/aboutMainBlock/AboutMainBlock.vue'
import SplitContent from '@/components/SplitContent.vue'
import AuthorsList from '@/components/authors/AuthorsList.vue'
import MainMasterPage from '@/masterpages/MainMasterPage.vue'

const content1 = {
  title: 'Our team of creatives',
  subtitle:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.',
  imgSrc: 'image01.jpg'
}

const content2 = {
  title: 'Why we started this Blog',
  subtitle:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.',
  imgSrc: 'image02.jpg'
}
</script>

<style scoped></style>
