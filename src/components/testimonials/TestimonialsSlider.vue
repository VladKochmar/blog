<template>
  <div>
    <swiper :space-between="50" :navigation="{ prevEl: '.prev-btn', nextEl: '.next-btn' }">
      <swiper-slide v-for="comment in comments" :key="comment.id" class="text-black-23 slide">
        <p class="title text-lg mb-16 lg:text-2xl lg:mb-32">{{ comment.text }}</p>
        <div class="flex flex-col md:flex-row gap-y-6 md:items-center justify-between">
          <div class="inline-flex gap-x-3">
            <img :src="comment.imgSrc" class="h-12 w-12 rounded-full object-cover" />
            <div>
              <h3 class="title text-2xl">{{ comment.title }}</h3>
              <p class="text-gray-medium">{{ comment.location }}</p>
            </div>
          </div>
          <div class="inline-flex items-center gap-x-4 md:gap-x-6">
            <button
              class="prev-btn h-12 w-12 rounded-full inline-flex items-center justify-center bg-white transition hover:text-white hover:bg-black-23"
            >
              <IconElement title="arrow-left" />
            </button>
            <button
              class="next-btn h-12 w-12 rounded-full inline-flex items-center justify-center bg-white transition hover:text-white hover:bg-black-23"
            >
              <IconElement title="arrow-right" />
            </button>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup lang="ts">
import comments from '@/data/comments.json'

import IconElement from '../icons/IconElement.vue'

// Swiper
import { register } from 'swiper/element/bundle'
register()

import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
</script>

<style scoped></style>
