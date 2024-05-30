<template>
  <div class="max-w-main xl:px-4 mx-auto">
    <div class="relative pt-6">
      <slot name="lines">
        <div class="absolute top-0 right-0 flex justify-end h-6 w-full">
          <div class="h-full bg-yellow-dark w-2/3"></div>
          <div class="h-full bg-purple-dark w-1/5"></div>
        </div>
      </slot>
      <div class="py-12 px-10 xl:py-24 xl:px-20 bg-lavender">
        <div class="flex flex-col md:flex-row gap-y-6 -m-7">
          <div v-for="(article, index) in articles" :key="index" class="md:flex-2 md:p-7">
            <strong class="inline-block font-title text-black-23 text-base uppercase mb-6">
              {{ article.subtitle }}
            </strong>
            <slot :name="`title${index}`" :title="article.title">
              <h2 class="title text-black-23 text-2xl mb-4">
                {{ article.title }}
              </h2>
            </slot>
            <p class="text-gray-medium text-base mb-4">
              {{ article.text }}
            </p>
            <slot :name="`more${index}`"> </slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Article {
  title: string
  subtitle: string
  text: string
}

defineProps<{ articles: Article[] }>()
</script>

<style scoped></style>
