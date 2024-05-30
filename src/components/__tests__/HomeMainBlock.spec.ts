import { describe, it, expect } from 'vitest'
import { createRouter, createWebHistory } from 'vue-router'

import { mount } from '@vue/test-utils'
import HomeMainBlock from '../HomeMainBlock.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/blog',
      name: 'blog',
      component: () => import('@/views/BlogView.vue')
    }
  ]
})

describe('HomeMainBlock', () => {
  it('renders main block content correctly', () => {
    const wrapper = mount(HomeMainBlock, { global: { plugins: [router] } })

    expect(wrapper.text()).toContain('Posted on')
    expect(wrapper.text()).toContain('Step-by-step guide to choosing great font pairs')
    expect(wrapper.text()).toContain('By James West | May 23, 2022')
    expect(wrapper.text()).toContain(
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
    )

    const readMoreButton = wrapper.findComponent({ name: 'RouterLink' })
    expect(readMoreButton.exists()).toBe(true)
    expect(readMoreButton.props().to).toEqual({ name: 'blog' })
  })

  it('renders main block background image correctly', () => {
    const wrapper = mount(HomeMainBlock)

    const bgImage = wrapper.find('img')
    expect(bgImage.exists()).toBe(true)
  })
})
