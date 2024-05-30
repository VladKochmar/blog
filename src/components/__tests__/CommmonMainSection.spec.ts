import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'

import CommonMainSection from '../CommonMainSection.vue'

describe('CommonMainSection', () => {
  it('renders the title and text', () => {
    const wrapper = mount(CommonMainSection, {
      props: { title: 'Test Title', text: 'This is a test text.' }
    })

    const title = wrapper.find('h1')
    const text = wrapper.find('p')

    expect(title.text()).toBe('Test Title')
    expect(text.text()).toBe('This is a test text.')
  })

  it('renders default slot content', () => {
    const wrapper = mount(CommonMainSection, {
      props: {
        title: 'Test Title',
        text: 'This is a test text.'
      },
      slots: {
        default: '<div class="slot-content">Slot Content</div>'
      }
    })

    const slotContent = wrapper.find('.slot-content')

    expect(slotContent.exists()).toBe(true)
    expect(slotContent.text()).toBe('Slot Content')
  })
})
