import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'

import StatisticsComponent from '@/components/aboutMainBlock/StatisticsComponent.vue'

describe('StatisticsComponent', () => {
  it('renders statistics correctly', () => {
    const wrapper = mount(StatisticsComponent)

    const items = wrapper.findAll('.text-black-23')
    expect(items.length).toBe(3)

    const statistics = [
      { id: 1, title: '12+', text: 'Blogs Published' },
      { id: 2, title: '18K+', text: 'Views on Finsweet' },
      { id: 3, title: '30K+', text: 'Total active Users' }
    ]

    items.forEach((item, index) => {
      const stat = statistics[index]
      const title = item.find('.font-title')
      const text = item.find('p')

      expect(title.exists()).toBe(true)
      expect(title.text()).toBe(stat.title)

      expect(text.exists()).toBe(true)
      expect(text.text()).toBe(stat.text)
    })
  })
})
