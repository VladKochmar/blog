import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'

import BlogMainBlock from '../BlogMainBlock.vue'

describe('BlogMainBlock', () => {
  it('renders the blog section correctly', () => {
    const wrapper = mount(BlogMainBlock)

    const featuredText = wrapper.find('p.leading-tight.tracking-wider.text-black-23')
    const title = wrapper.find('h2.title.text-black-23')
    const description = wrapper.find('p.text-gray-medium')

    expect(featuredText.text()).toBe('Featured Post')
    expect(title.text()).toBe('Step-by-step guide to choosing great font pairs')
    expect(description.text()).toBe(
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
    )

    const button = wrapper.find('button.btn')
    expect(button.exists()).toBe(true)
    expect(button.text()).toBe('Read More >')
  })
})
