<template>
  <footer class="bg-black-23 text-white py-14">
    <div class="max-w-main px-4 mx-auto">
      <FooterTop class="mb-14" />
      <SubscribeBlock class="mb-12" />
      <FooterBottom />
    </div>
  </footer>
</template>

<script setup lang="ts">
import FooterTop from './FooterTop.vue'
import FooterBottom from './FooterBottom.vue'
import SubscribeBlock from './SubscribeBlock.vue'
</script>

<style scoped></style>
