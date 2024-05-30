import { describe, it, expect } from 'vitest'
import { createRouter, createWebHistory } from 'vue-router'

import { mount } from '@vue/test-utils'
import HeaderComponent from '../HeaderComponent.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: import('@/views/HomeView.vue')
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('@/views/BlogView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue')
    },
    {
      path: '/contact-us',
      name: 'contact',
      component: () => import('@/views/ContactView.vue')
    }
  ]
})

describe('HeaderComponent', () => {
  it('renders the header and its elements correctly', () => {
    const wrapper = mount(HeaderComponent)

    const header = wrapper.find('header')
    const logo = wrapper.find('img[alt="Blog logo"]')
    const menuButton = wrapper.find('button')
    const navLinks = wrapper.findAll('ul li')

    expect(header.exists()).toBe(true)
    expect(logo.exists()).toBe(true)
    expect(menuButton.exists()).toBe(true)
    expect(navLinks.length).toBe(4)
  })

  it('toggles burger menu correctly', async () => {
    const wrapper = mount(HeaderComponent)

    const menuButton = wrapper.find('button.relative')
    const menu = wrapper.find('.fixed.top-0.left-0.w-full.h-full.bg-black-23')

    expect((wrapper.vm as any).isOpen).toBe(false)
    expect(menu.classes()).not.toContain('translate-y-0')

    await menuButton.trigger('click')

    expect((wrapper.vm as any).isOpen).toBe(true)
    expect(menu.classes()).toContain('translate-y-0')

    await menuButton.trigger('click')

    expect((wrapper.vm as any).isOpen).toBe(false)
    expect(menu.classes()).not.toContain('translate-y-0')
  })

  it('sets up router links correctly', () => {
    const wrapper = mount(HeaderComponent, { global: { plugins: [router] } })

    const navLinks = wrapper.findAllComponents({ name: 'RouterLink' })

    expect(navLinks[0].props().to).toEqual({ name: 'home' })
    expect(navLinks[1].props().to).toEqual({ name: 'home' })
    expect(navLinks[2].props().to).toEqual({ name: 'blog' })
    expect(navLinks[3].props().to).toEqual({ name: 'about' })
    expect(navLinks[4].props().to).toEqual({ name: 'contact' })
  })
})
