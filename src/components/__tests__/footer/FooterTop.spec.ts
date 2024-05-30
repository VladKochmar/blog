import { mount, RouterLinkStub } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'

import FooterTop from '@/components/footer/FooterTop.vue'

describe('FooterTop', () => {
  it('renders the correct navigation links', () => {
    const wrapper = mount(FooterTop, { global: { stubs: { RouterLink: RouterLinkStub } } })

    const links = wrapper.findAll('li > a')
    const expectedLinks = ['Home', 'Blog', 'About us', 'Contact us', 'Privacy Policy']

    expect(links.length).toBe(expectedLinks.length)
    links.forEach((link, index) => {
      expect(link.text()).toBe(expectedLinks[index])
    })
  })

  it('renders each router-link with correct "to" attribute', () => {
    const wrapper = mount(FooterTop, { global: { stubs: { RouterLink: RouterLinkStub } } })

    const links = wrapper.findAllComponents(RouterLinkStub)
    const expectedRoutes = [
      { name: 'home' },
      { name: 'home' },
      { name: 'blog' },
      { name: 'about' },
      { name: 'contact' },
      { name: 'privacy' }
    ]

    expect(links.length).toBe(expectedRoutes.length)
    links.forEach((link, index) => {
      expect(link.props('to')).toEqual(expectedRoutes[index])
    })
  })
})
