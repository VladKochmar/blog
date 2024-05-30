import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'

import CategoriesList from '@/components/categories/CategoriesList.vue'
import CategoryItem from '@/components/categories/CategoryItem.vue'

import categories from '@/data/categories.json'

describe('CategoriesList', () => {
  it('renders title correctly', () => {
    const wrapper = mount(CategoriesList, {
      props: {
        title: 'Test Title'
      }
    })

    const titleElement = wrapper.find('h2.title')
    expect(titleElement.exists()).toBe(true)
    expect(titleElement.text()).toBe('Test Title')
  })

  it('renders categories correctly', () => {
    const wrapper = mount(CategoriesList)

    const categoryItems = wrapper.findAllComponents(CategoryItem)
    expect(categoryItems.length).toBe(categories.length)

    categories.forEach((category, index) => {
      expect(categoryItems[index].props('category')).toEqual(category)
    })
  })
})
