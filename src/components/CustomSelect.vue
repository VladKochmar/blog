<template>
  <div class="relative mb-4">
    <div
      class="flex justify-between items-center border-1 cursor-pointer border-gray-medium w-full p-6"
      @click="toggleDropdown"
    >
      <span class="text-black-23 select-none">{{ selected ? selected : placeholder }}</span>
      <IconElement
        title="arrow-down"
        class="transition-transform duration-300"
        :class="{ 'rotate-180': isOpen }"
      />
    </div>
    <transition name="fade">
      <ul
        v-if="isOpen"
        class="absolute top-full left-0 z-50 border-1 border-gray-medium w-full max-h-48 overflow-auto bg-white opacity-100 translate-y-0 transition-all duration-300"
      >
        <li
          v-for="option in options"
          :key="option"
          @click="selectOption(option)"
          class="select-none p-6 cursor-pointer hover:bg-gray-light transition duration-300"
          :class="{ 'bg-gray-light': option === selected }"
        >
          {{ option }}
        </li>
      </ul>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import IconElement from './icons/IconElement.vue'

defineProps<{ options: string[]; placeholder: string }>()

const selected = defineModel<string>()
const isOpen = ref<boolean>(false)

function toggleDropdown() {
  isOpen.value = !isOpen.value
}

function selectOption(option: string) {
  selected.value = option
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.3s,
    transform 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
