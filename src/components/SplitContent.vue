<template>
  <div class="max-w-main px-4 py-16 mx-auto">
    <div
      class="flex flex-col lg:flex-row items-center justify-between gap-x-5 gap-y-9"
      :class="{ 'lg:flex-row-reverse': isReverse }"
    >
      <div class="text-black-23 lg:flex-520 text-center lg:text-left">
        <h2 class="title text-4xl mb-4">{{ contentData.title }}</h2>
        <p class="title text-2xl mb-4">{{ contentData.subtitle }}</p>
        <p class="leading-relaxed">{{ contentData.text }}</p>
      </div>
      <div class="relative lg:flex-624">
        <img :src="getImagePath(contentData.imgSrc)" class="max-w-full" />
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Content {
  title: string
  subtitle: string
  text: string
  imgSrc: string
}

defineProps<{ contentData: Content; isReverse?: boolean }>()

const getImagePath = (imgPath: string) =>
  new URL(`../assets/img/about-us/${imgPath}`, import.meta.url).href
</script>

<style scoped></style>
