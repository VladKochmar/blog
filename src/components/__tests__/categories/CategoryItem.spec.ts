import { describe, it, expect } from 'vitest'

import { RouterLinkStub, mount } from '@vue/test-utils'
import CategoryItem from '@/components/categories/CategoryItem.vue'
import IconElement from '@/components/icons/IconElement.vue'

const category = {
  title: 'Business',
  icon: 'business',
  text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
}

describe('CategoryItem', () => {
  it('renders properly', () => {
    const wrapper = mount(CategoryItem, {
      props: { category },
      global: { stubs: { RouterLink: RouterLinkStub } }
    })

    expect(wrapper.find('.title').text()).toBe('Business')

    const text = wrapper.find('p.text-gray-medium')
    expect(text.exists()).toBe(true)
    expect(text.text()).toBe('Lorem ipsum dolor sit amet, consectetuer adipiscing elit.')

    const iconElement = wrapper.findComponent(IconElement)
    expect(iconElement.exists()).toBe(true)
    expect(iconElement.props().title).toBe('business')
  })

  it('sets up router link correctly', () => {
    const wrapper = mount(CategoryItem, {
      props: { category },
      global: { stubs: { RouterLink: RouterLinkStub } }
    })

    const routerLink = wrapper.findComponent(RouterLinkStub)
    expect(routerLink.props().to).toEqual({
      name: 'category',
      params: { category: category.title }
    })
  })
})
