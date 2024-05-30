import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import TestimonialsSlider from '@/components/testimonials/TestimonialsSlider.vue'
import IconElement from '@/components/icons/IconElement.vue'

import comments from '@/data/comments.json'

describe('TestimonialsSlider', () => {
  it('renders the correct number of comments', () => {
    const wrapper = mount(TestimonialsSlider, {
      global: {
        stubs: {
          swiper: { template: '<div><slot /></div>' },
          'swiper-slide': { template: '<div><slot /></div>' }
        }
      }
    })
    const slides = wrapper.findAll('.slide')
    expect(slides.length).toBe(comments.length)
  })

  it('renders each comment correctly', () => {
    const wrapper = mount(TestimonialsSlider, {
      global: {
        stubs: {
          swiper: { template: '<div><slot /></div>' },
          'swiper-slide': { template: '<div><slot /></div>' },
          IconElement: IconElement
        }
      }
    })

    const slides = wrapper.findAll('.slide')
    expect(slides.length).toBe(comments.length)

    slides.forEach((slide, index) => {
      const comment = comments[index]

      const title = slide.find('p.title')
      expect(title.exists()).toBe(true)
      expect(title.text()).toBe(comment.text)

      const img = slide.find('img')
      expect(img.exists()).toBe(true)
      expect(img.attributes('src')).toBe(comment.imgSrc)

      const commentTitle = slide.find('h3.title')
      expect(commentTitle.exists()).toBe(true)
      expect(commentTitle.text()).toBe(comment.title)

      const location = slide.find('p.text-gray-medium')
      expect(location.exists()).toBe(true)
      expect(location.text()).toBe(comment.location)
    })
  })

  it('renders navigation icons correctly', () => {
    const wrapper = mount(TestimonialsSlider, {
      global: {
        stubs: {
          swiper: { template: '<div><slot /></div>' },
          'swiper-slide': { template: '<div><slot /></div>' },
          IconElement: IconElement
        }
      }
    })

    const prevButton = wrapper.find('.prev-btn')
    const nextButton = wrapper.find('.next-btn')

    expect(prevButton.findComponent(IconElement).exists()).toBe(true)
    expect(prevButton.findComponent(IconElement).props('title')).toBe('arrow-left')
    expect(nextButton.findComponent(IconElement).exists()).toBe(true)
    expect(nextButton.findComponent(IconElement).props('title')).toBe('arrow-right')
  })
})
