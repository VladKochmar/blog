import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'

import FooterBottom from '@/components/footer/FooterBottom.vue'
import IconFacebook from '@/components/icons/IconFacebook.vue'
import IconInstagram from '@/components/icons/IconInstagram.vue'
import IconLinkedin from '@/components/icons/IconLinkedin.vue'
import IconTwitter from '@/components/icons/IconTwitter.vue'

const ICONS_COLOR = '#6D6E76'

describe('FooterBottom', () => {
  it('renders properly', () => {
    const wrapper = mount(FooterBottom)

    const address = wrapper.find('p')
    const emailLink = wrapper.find('a[href="mailto:support@gmail.com"]')
    const phoneLink = wrapper.find('a[href="tel:+380731234567"]')

    expect(address.exists()).toBe(true)
    expect(address.text()).toBe('Finstreet 118 2561 Fintown')

    expect(emailLink.exists()).toBe(true)
    expect(emailLink.text()).toBe('support@gmail.com')

    expect(phoneLink.exists()).toBe(true)
    expect(phoneLink.text()).toBe('+380 73 123 45 67')
  })

  it('renders the correct number of social media icons with correct props', () => {
    const wrapper = mount(FooterBottom)

    const facebookIcon = wrapper.findComponent(IconFacebook)
    const twitterIcon = wrapper.findComponent(IconTwitter)
    const instagramIcon = wrapper.findComponent(IconInstagram)
    const linkedinIcon = wrapper.findComponent(IconLinkedin)

    expect(facebookIcon.exists()).toBe(true)
    expect(facebookIcon.props('color')).toBe(ICONS_COLOR)

    expect(twitterIcon.exists()).toBe(true)
    expect(twitterIcon.props('color')).toBe(ICONS_COLOR)

    expect(instagramIcon.exists()).toBe(true)
    expect(instagramIcon.props('color')).toBe(ICONS_COLOR)

    expect(linkedinIcon.exists()).toBe(true)
    expect(linkedinIcon.props('color')).toBe(ICONS_COLOR)
  })
})
