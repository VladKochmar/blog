import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import FormBlock from '../FormBlock.vue'
import CustomSelect from '../CustomSelect.vue'

describe('FormBlock', () => {
  it('renders form inputs correctly', () => {
    const wrapper = mount(FormBlock)

    const nameInput = wrapper.find('input[type="text"]')
    expect(nameInput.exists()).toBe(true)
    expect(nameInput.attributes('placeholder')).toBe('Full Name')

    const emailInput = wrapper.find('input[type="email"]')
    expect(emailInput.exists()).toBe(true)
    expect(emailInput.attributes('placeholder')).toBe('Your Email')

    const messageTextarea = wrapper.find('textarea')
    expect(messageTextarea.exists()).toBe(true)
    expect(messageTextarea.attributes('placeholder')).toBe('Message')

    const sendButton = wrapper.find('button')
    expect(sendButton.exists()).toBe(true)
    expect(sendButton.text()).toBe('Send Message')
  })

  it('renders CustomSelect component correctly', () => {
    const wrapper = mount(FormBlock, {
      global: {
        components: { CustomSelect }
      }
    })

    const customSelect = wrapper.findComponent(CustomSelect)
    expect(customSelect.exists()).toBe(true)
    expect(customSelect.props('placeholder')).toBe('Query Related')
    expect(customSelect.props('options')).toEqual(['Suggestions and criticism', 'Support'])
  })

  it('handles input and textarea changes', async () => {
    const wrapper = mount(FormBlock)

    const nameInput = wrapper.find('input[type="text"]')
    await nameInput.setValue('John Doe')
    expect((nameInput.element as HTMLInputElement).value).toBe('John Doe')

    const emailInput = wrapper.find('input[type="email"]')
    await emailInput.setValue('john.doe@example.com')
    expect((emailInput.element as HTMLInputElement).value).toBe('john.doe@example.com')

    const messageTextarea = wrapper.find('textarea')
    await messageTextarea.setValue('This is a test message.')
    expect(messageTextarea.element.value).toBe('This is a test message.')
  })

  it('renders CustomSelect component correctly', () => {
    const wrapper = mount(FormBlock, {
      global: {
        components: { CustomSelect }
      }
    })

    const customSelect = wrapper.findComponent(CustomSelect)
    customSelect.setValue('Support')
    expect((wrapper.vm as any).selected).toBe('Support')
  })
})
