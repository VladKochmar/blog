<template>
  <header
    ref="header"
    class="fixed top-0 left-0 z-20 w-full transition-transform duration-300 bg-black-23 py-3"
    :class="{ '-translate-y-full': isHeaderHidden }"
  >
    <div class="max-w-main px-4 mx-auto flex items-center justify-between">
      <router-link :to="{ name: 'home' }" class="relative z-40 max-w-24">
        <img src="@/assets/img/logo.svg" alt="Blog logo" class="w-full" />
      </router-link>
      <div
        class="inline-flex flex-col gap-y-11 items-center fixed top-0 left-0 w-full h-screen bg-black-23 py-24 -translate-y-full transition-transform duration-300 overflow-auto md:translate-y-0 md:py-0 md:flex-row md:gap-x-8 md:static md:w-auto md:h-auto md:bg-transparent"
        :class="{ 'translate-y-0': isOpen }"
      >
        <ul
          class="inline-flex flex-col md:flex-row gap-6 text-center text-3xl md:text-base md:text-left"
        >
          <li>
            <router-link
              :to="{ name: 'home' }"
              class="text-white leading-relaxed transition duration-300 hover:text-gray-medium"
              >Home</router-link
            >
          </li>
          <li>
            <router-link
              :to="{ name: 'blog' }"
              class="text-white leading-relaxed transition duration-300 hover:text-gray-medium"
              >Blog</router-link
            >
          </li>
          <li>
            <router-link
              :to="{ name: 'about' }"
              class="text-white leading-relaxed transition duration-300 hover:text-gray-medium"
              >About Us</router-link
            >
          </li>
          <li>
            <router-link
              :to="{ name: 'contact' }"
              class="text-white leading-relaxed transition duration-300 hover:text-gray-medium"
              >Contact us</router-link
            >
          </li>
        </ul>
        <button
          class="inline-flex font-title font-bold text-lg leading-snug py-4 px-12 bg-white text-black-23 hover:bg-gray-medium transition duration-300"
        >
          Subscribe
        </button>
      </div>
      <button @click="handleMenuBurger" class="relative self-center z-40 w-7 h-4 md:hidden">
        <span
          class="absolute h-px w-full left-0 top-0 transition-all duration-300 bg-white"
          :class="{ 'top-1/2': isOpen, 'rotate-45': isOpen }"
        ></span>
        <span
          class="absolute h-px w-full left-0 top-1/2 -translate-y-1/2 transition-all duration-300 bg-white"
          :class="{ 'scale-0': isOpen }"
        ></span>
        <span
          class="absolute h-px w-full left-0 bottom-0 transition-all duration-300 bg-white"
          :class="{ 'bottom-1/2': isOpen, '-rotate-45': isOpen }"
        ></span>
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { onBeforeRouteLeave } from 'vue-router'

const header = ref<HTMLHeadElement | null>(null)

let lastScrollTop: number = 0
const isHeaderHidden = ref<boolean>(false)

document.addEventListener('scroll', (): void => {
  const scrollTop: number = document.documentElement.scrollTop

  if (header.value) {
    if (scrollTop > lastScrollTop) isHeaderHidden.value = true
    else isHeaderHidden.value = false
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop
})

// Burger Menu
const isOpen = ref<boolean>(false)

function handleMenuBurger(): void {
  isOpen.value = !isOpen.value
  document.body.classList.toggle('lock')
}

onBeforeRouteLeave(() => {
  isOpen.value = false
  document.body.classList.remove('lock')
})
</script>

<style scoped></style>
