import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import InfoBlock from '../InfoBlock.vue'

describe('InfoBlock', () => {
  it('renders properly', () => {
    const wrapper = mount(InfoBlock)

    const subtitles = wrapper.findAll('p.text-sm')

    expect(subtitles[0].text()).toBe('Working hours')
    expect(subtitles[1].text()).toBe('Contact Us')

    expect(wrapper.find('a[href="tel:+4802079932905"]').text()).toBe('020 7993 2905')
    expect(wrapper.find('a[href="mailto:hello@finsweet.com"]').text()).toBe('hello@finsweet.com')

    const info = wrapper.findAll('strong.block')

    expect(info[0].text()).toBe('Monday To Friday')
    expect(info[1].text()).toBe('9:00 AM to 8:00 PM')
  })
})
