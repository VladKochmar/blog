<template>
  <div
    class="flex justify-between gap-x-5 gap-y-8 flex-col items-center text-center sm:text-start sm:items-start sm:flex-row"
  >
    <div>
      <p>Finstreet 118 2561 Fintown</p>
      <div class="flex flex-col sm:block">
        <a href="mailto:support@gmail.com" class="whitespace-nowrap">support@gmail.com </a>
        <a href="tel:+380731234567" class="whitespace-nowrap">+380 73 123 45 67</a>
      </div>
    </div>
    <ul class="inline-flex gap-x-6">
      <li>
        <a href="#"><IconFacebook :color="ICONS_COLOR" /></a>
      </li>
      <li>
        <a href="#"><IconTwitter :color="ICONS_COLOR" /></a>
      </li>
      <li>
        <a href="#"><IconInstagram :color="ICONS_COLOR" /></a>
      </li>
      <li>
        <a href="#"><IconLinkedin :color="ICONS_COLOR" /></a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import IconFacebook from '../icons/IconFacebook.vue'
import IconInstagram from '../icons/IconInstagram.vue'
import IconLinkedin from '../icons/IconLinkedin.vue'
import IconTwitter from '../icons/IconTwitter.vue'

const ICONS_COLOR = '#6D6E76'
</script>

<style scoped></style>
