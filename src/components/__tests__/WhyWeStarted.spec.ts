import { describe, it, expect } from 'vitest'
import { createRouter, createWebHistory } from 'vue-router'

import { mount } from '@vue/test-utils'
import WhyWeStarted from '../WhyWeStarted.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue')
    }
  ]
})

describe('WhyWeStarted', () => {
  it('renders properly', () => {
    const wrapper = mount(WhyWeStarted, { global: { plugins: [router] } })

    expect(wrapper.find('strong').text()).toBe('Why we started')
    expect(wrapper.find('h2').text()).toBe(
      'It started out as a simple idea and evolved into our passion'
    )
    expect(wrapper.find('p').text()).toBe(
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.'
    )

    const link = wrapper.findComponent({ name: 'RouterLink' })
    expect(link.props().to).toEqual({ name: 'about' })
  })
})
