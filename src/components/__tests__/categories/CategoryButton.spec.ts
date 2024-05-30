import { describe, it, expect } from 'vitest'

import { RouterLinkStub, mount } from '@vue/test-utils'
import CategoryButton from '@/components/categories/CategoryButton.vue'
import IconElement from '@/components/icons/IconElement.vue'

const category = {
  title: 'Business',
  icon: 'business'
}

describe('CategoryButton', () => {
  it('renders properly', () => {
    const wrapper = mount(CategoryButton, {
      props: { category },
      global: { stubs: { RouterLink: RouterLinkStub } }
    })

    expect(wrapper.find('h3').text()).toBe(category.title)

    const iconElement = wrapper.findComponent(IconElement)
    expect(iconElement.exists()).toBe(true)
    expect(iconElement.props().title).toBe('business')
  })

  it('sets up router link correctly', () => {
    const wrapper = mount(CategoryButton, {
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
