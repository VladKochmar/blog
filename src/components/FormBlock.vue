<template>
  <div class="max-w-768 mx-auto px-4">
    <input
      type="text"
      placeholder="Full Name"
      class="w-full p-6 border-gray-medium border-1 text-black-23 placeholder:text-black-23 mb-4 select-none"
    />
    <input
      type="email"
      placeholder="Your Email"
      class="w-full p-6 border-gray-medium border-1 text-black-23 placeholder:text-black-23 mb-4 select-none"
    />
    <CustomSelect
      v-model="selected"
      placeholder="Query Related"
      :options="['Suggestions and criticism', 'Support']"
    />
    <textarea
      placeholder="Message"
      rows="4"
      class="w-full p-6 border-gray-medium border-1 text-black-23 placeholder:text-black-23 resize-none mb-4 select-none"
    ></textarea>
    <button class="btn w-full select-none">Send Message</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import CustomSelect from './CustomSelect.vue'

const selected = ref<string>()
</script>

<style scoped></style>
