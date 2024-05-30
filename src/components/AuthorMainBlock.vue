<template>
  <div class="bg-lavender pt-20">
    <div class="max-w-medium mx-auto px-4">
      <div
        class="relative flex gap-6 flex-col items-center md:items-start md:flex-row py-16 md:py-32"
      >
        <div class="max-w-64">
          <img :src="author.imgSrc" class="max-w-full" />
        </div>
        <div>
          <h1 class="title text-black-23 text-3xl md:text-5xl mb-6 text-center md:text-left">
            {{ author.title }}
          </h1>
          <p class="text-gray-medium leading-relaxed mb-6 text-center md:text-left">
            {{ author.description }}
          </p>
          <ul class="flex gap-x-4 justify-center md:justify-start">
            <li v-if="author.socialMedia?.facebook">
              <a :href="author.socialMedia.facebook"><IconFacebook /></a>
            </li>
            <li v-if="author.socialMedia?.twitter">
              <a :href="author.socialMedia.twitter"><IconTwitter /></a>
            </li>
            <li v-if="author.socialMedia?.instagram">
              <a :href="author.socialMedia.instagram"><IconInstagram /></a>
            </li>
            <li v-if="author.socialMedia?.linkedin">
              <a :href="author.socialMedia.linkedin"><IconLinkedin /></a>
            </li>
          </ul>
        </div>
        <div class="absolute h-6 w-full bottom-0 left-0 flex">
          <div class="h-full w-3/4 bg-yellow-medium"></div>
          <div class="h-full w-1/4 bg-purple-dark"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconFacebook from './icons/IconFacebook.vue'
import IconInstagram from './icons/IconInstagram.vue'
import IconTwitter from './icons/IconTwitter.vue'
import IconLinkedin from './icons/IconLinkedin.vue'

import type { Author } from '@/types/Author'

defineProps<{ author: Author }>()
</script>

<style scoped></style>
