import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import SplitTitleAndText from '@/components/aboutMainBlock/SplitTitleAndText.vue'

describe('SplitTitleAndText', () => {
  it('renders properly', () => {
    const wrapper = mount(SplitTitleAndText)

    expect(wrapper.find('p.font-medium').text()).toBe('ABOUT US')
    expect(wrapper.find('h1').text()).toBe(
      'We are a team of content writers who share their learnings'
    )
    expect(wrapper.find('p.text-gray-dark').text()).toBe(
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    )
  })
})
