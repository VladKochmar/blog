<template>
  <div class="flex flex-col min-h-screen overflow-clip font-basic">
    <HeaderComponent />
    <main class="flex-auto">
      <slot></slot>
    </main>
    <FooterComponent />
  </div>
</template>

<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/footer/FooterComponent.vue'
</script>

<style scoped></style>
