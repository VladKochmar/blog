import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import ContactMainBlock from '../ContactMainBlock.vue'

describe('ContactMainBlock', () => {
  it('renders properly', () => {
    const wrapper = mount(ContactMainBlock)

    expect(wrapper.find('strong').text()).toBe('Contact us')
    expect(wrapper.find('h1').text()).toBe('Let’s Start a Conversation')
    expect(wrapper.find('p').text()).toBe(
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.'
    )
  })
})
