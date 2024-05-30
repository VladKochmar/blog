import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import AuthorMainBlock from '../AuthorMainBlock.vue'

const author = {
  id: '1',
  name: 'Floyd Miles',
  subtitle: 'Content Writer @Company',
  title: 'Hey there, I’m Floyd Miles and welcome to my Blog',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.',
  imgSrc:
    'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  posts: ['1', '2'],
  socialMedia: {
    facebook: 'https://facebook.com/johndoe',
    instagram: 'https://instagram.com/johndoe',
    twitter: 'https://twitter.com/johndoe',
    linkedin: 'https://linkedin.com/in/johndoe'
  }
}

describe('AuthorMainBlock', () => {
  it('renders author information', () => {
    const wrapper = mount(AuthorMainBlock, { props: { author } })

    const img = wrapper.find('img')
    const title = wrapper.find('h1')
    const description = wrapper.find('p')

    expect(img.attributes('src')).toBe(author.imgSrc)
    expect(title.text()).toBe(author.title)
    expect(description.text()).toBe(author.description)
  })

  it('renders social media links if they exist', () => {
    const wrapper = mount(AuthorMainBlock, { props: { author } })

    const facebookLink = wrapper.find('a[href="https://facebook.com/johndoe"]')
    const twitterLink = wrapper.find('a[href="https://twitter.com/johndoe"]')
    const instagramLink = wrapper.find('a[href="https://instagram.com/johndoe"]')
    const linkedinLink = wrapper.find('a[href="https://linkedin.com/in/johndoe"]')

    expect(facebookLink.exists()).toBe(true)
    expect(twitterLink.exists()).toBe(true)
    expect(instagramLink.exists()).toBe(true)
    expect(linkedinLink.exists()).toBe(true)
  })

  it('does not render social media links if they do not exist', () => {
    const authorWithoutSocialMedia = {
      ...author,
      socialMedia: {}
    }

    const wrapper = mount(AuthorMainBlock, {
      props: { author: authorWithoutSocialMedia }
    })

    const socialMediaLinks = wrapper.findAll('a')
    expect(socialMediaLinks.length).toBe(0)
  })
})
