import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import CustomSelect from '../CustomSelect.vue'

describe('CustomSelect', () => {
  it('renders with placeholder text', () => {
    const wrapper = mount(CustomSelect, {
      props: { options: ['Option 1', 'Option 2'], placeholder: 'Select an option' }
    })

    const placeholderText = wrapper.find('span')
    expect(placeholderText.text()).toBe('Select an option')
  })

  it('toggles dropdown on click', async () => {
    const wrapper = mount(CustomSelect)

    const button = wrapper.find('.border-1.cursor-pointer')
    expect((wrapper.vm as any).isOpen).toBe(false)

    await button.trigger('click')
    expect((wrapper.vm as any).isOpen).toBe(true)

    await button.trigger('click')
    expect((wrapper.vm as any).isOpen).toBe(false)
  })

  it('renders options when dropdown is open', async () => {
    const wrapper = mount(CustomSelect, {
      props: { options: ['Option 1', 'Option 2'], placeholder: 'Select an option' }
    })

    const button = wrapper.find('.border-1.cursor-pointer')
    await button.trigger('click')

    const options = wrapper.findAll('li')
    expect(options.length).toBe(2)
    expect(options[0].text()).toBe('Option 1')
    expect(options[1].text()).toBe('Option 2')
  })

  it('selects an option on click', async () => {
    const wrapper = mount(CustomSelect, {
      props: { options: ['Option 1', 'Option 2'], placeholder: 'Select an option', modelValue: '' }
    })

    const button = wrapper.find('.border-1.cursor-pointer')
    await button.trigger('click')

    const options = wrapper.findAll('li')
    await options[0].trigger('click')

    const emitted = wrapper.emitted('update:modelValue')
    expect(emitted).toBeTruthy()
    if (emitted) {
      expect(emitted[0]).toEqual(['Option 1'])
    }
  })
})
