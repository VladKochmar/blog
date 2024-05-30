import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'

import TestimonialsSection from '@/components/testimonials/TestimonialsSection.vue'
import TestimonialsSlider from '@/components/testimonials/TestimonialsSlider.vue'

describe('TestimonialsSection', () => {
  it('renders properly', () => {
    const wrapper = mount(TestimonialsSection)

    const strongTag = wrapper.find('strong')
    const title = wrapper.find('h2.title')
    const paragraph = wrapper.find('p')

    expect(strongTag.exists()).toBe(true)
    expect(strongTag.text()).toBe('TESTIMONIALs')

    expect(title.exists()).toBe(true)
    expect(title.text()).toBe('What people say about our blog')

    expect(paragraph.exists()).toBe(true)
    expect(paragraph.text()).toBe(
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
    )
  })

  it('renders the TestimonialsSlider component', () => {
    const wrapper = mount(TestimonialsSection, {
      global: {
        stubs: {
          TestimonialsSlider: true
        }
      }
    })
    const slider = wrapper.findComponent(TestimonialsSlider)
    expect(slider.exists()).toBe(true)
  })
})
