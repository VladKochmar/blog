<template>
  <div class="max-w-main px-4 mx-auto">
    <div class="relative">
      <div class="flex gap-y-5 flex-col sm:flex-row md:absolute md:left-0 lg:left-28 md:bottom-6">
        <div
          v-for="item in statistics"
          :key="item.id"
          class="text-center sm:text-left text-black-23 bg-yellow-dark py-8 px-8 lg:px-12"
        >
          <div class="font-title text-4xl lg:text-6xl leading-tight">{{ item.title }}</div>
          <p class="leading-relaxed">{{ item.text }}</p>
        </div>
      </div>
      <img src="@/assets/img/about-us/main-block/image.jpg" class="max-w-full" />
    </div>
  </div>
</template>

<script setup lang="ts">
const statistics = [
  { id: 1, title: '12+', text: 'Blogs Published' },
  { id: 2, title: '18K+', text: 'Views on Finsweet' },
  { id: 3, title: '30K+', text: 'Total active Users' }
]
</script>

<style scoped></style>
