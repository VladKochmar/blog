import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'

import SubscribeBlock from '@/components/footer/SubscribeBlock.vue'

describe('SubscribeBlock', () => {
  it('renders properly', () => {
    const wrapper = mount(SubscribeBlock)

    const title = wrapper.find('h2.title')
    expect(title.exists()).toBe(true)
    expect(title.text()).toBe('Subscribe to our news letter to get latest updates and news')

    const emailInput = wrapper.find('input[type="email"]')
    expect(emailInput.exists()).toBe(true)
    expect(emailInput.attributes('placeholder')).toBe('Enter Your Email')

    const subscribeButton = wrapper.find('button.btn')
    expect(subscribeButton.exists()).toBe(true)
    expect(subscribeButton.text()).toBe('Subscribe')
  })
})
