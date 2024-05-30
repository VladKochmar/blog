import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'

import TagsList from '@/components/tags/TagsList.vue'
import TagItem from '@/components/tags/TagItem.vue'

import tags from '@/data/tags.json'

describe('TagsList', () => {
  it('renders properly', () => {
    const wrapper = mount(TagsList)

    const tagsList = wrapper.findAllComponents(TagItem)
    expect(tagsList.length).toBe(tags.length)

    const tagItems = wrapper.findAllComponents(TagItem)
    tagItems.forEach((tagItem, index) => {
      expect(tagItem.props().title).toBe(tags[index].title)
    })
  })
})
