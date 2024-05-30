<template>
  <div class="inline-flex flex-col sm:flex-row items-center gap-8">
    <router-link :to="{ name: 'post', params: { id: post.id } }" class="sm:flex-490">
      <img
        :src="post.imgSrc"
        class="sm:h-320 object-cover object-center transition-all duration-300 hover:grayscale"
      />
    </router-link>
    <div class="sm:flex-624">
      <p class="text-purple-dark font-semibold leading-tight tracking-wider mb-5">
        {{ post.category }}
      </p>
      <router-link :to="{ name: 'post', params: { id: post.id } }">
        <slot :title="post.title">
          <h3
            class="title text-black-23 text-2xl md:text-4xl mb-4 transition duration-300 hover:text-purple-dark"
          >
            {{ post.title }}
          </h3>
        </slot>
      </router-link>
      <p class="text-gray-medium leading-relaxed">{{ post.subtitle }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Post } from '@/types/Post'

defineProps<{ post: Post }>()
</script>

<style scoped></style>
