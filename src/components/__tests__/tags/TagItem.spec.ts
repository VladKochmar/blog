import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import TagItem from '@/components/tags/TagItem.vue'

describe('TagItem', () => {
  it('renders properly', () => {
    const wrapper = mount(TagItem, { props: { title: 'Business' } })
    expect(wrapper.find('div').text()).toBe('Business')
  })
})
