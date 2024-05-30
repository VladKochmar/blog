<template>
  <router-link
    :to="{ name: 'author', params: { id: author.id } }"
    class="flex flex-col items-center bg-gray-light px-7 py-10 hover:bg-yellow-light transition duration-300"
  >
    <img :src="author.imgSrc" class="w-32 h-32 rounded-full mb-5 object-cover" />
    <h3 class="title text-black-23 text-2xl text-center">{{ author.name }}</h3>
    <p class="text-gray-medium text-sm text-center mb-5">{{ author.subtitle }}</p>
    <div class="inline-flex gap-x-4">
      <a v-if="author.socialMedia?.facebook" :href="author.socialMedia.facebook"
        ><IconFacebook
      /></a>
      <a v-if="author.socialMedia?.twitter" :href="author.socialMedia.twitter"><IconTwitter /></a>
      <a v-if="author.socialMedia?.instagram" :href="author.socialMedia.instagram"
        ><IconInstagram
      /></a>
      <a v-if="author.socialMedia?.linkedin" :href="author.socialMedia.linkedin"
        ><IconLinkedin
      /></a>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import IconFacebook from '../icons/IconFacebook.vue'
import IconTwitter from '../icons/IconTwitter.vue'
import IconInstagram from '../icons/IconInstagram.vue'
import IconLinkedin from '../icons/IconLinkedin.vue'

import type { Author } from '@/types/Author'
defineProps<{ author: Author }>()
</script>

<style scoped></style>
