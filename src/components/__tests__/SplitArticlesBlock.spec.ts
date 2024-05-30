import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import SplitArticlesBlock from '../SplitArticlesBlock.vue'

const articles = [
  {
    subtitle: 'ABOUT US',
    title: 'We are a community of content writers who share their learnings',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    subtitle: 'Our mision',
    title: 'Creating valuable content for creatives all around the world',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  }
]

describe('SplitArticlesBlock', () => {
  it('renders articles passed via props', () => {
    const wrapper = mount(SplitArticlesBlock, { props: { articles } })

    const titles = wrapper.findAll('.title')
    expect(titles.length).toBe(2)
    expect(titles[0].text()).toBe('We are a community of content writers who share their learnings')
    expect(titles[1].text()).toBe('Creating valuable content for creatives all around the world')
  })

  it('renders default slot content', () => {
    const wrapper = mount(SplitArticlesBlock, { props: { articles } })

    const lines = wrapper.find('.h-full.bg-yellow-dark')
    expect(lines.exists()).toBe(true)
  })

  it('overrides default slot content', () => {
    const wrapper = mount(SplitArticlesBlock, {
      props: { articles },
      slots: {
        lines:
          '<div class="absolute top-0 left-0 md:left-4 lg:left-28 flex h-6 w-full max-w-860"><div class="h-full bg-purple-dark w-1/3"></div><div class="h-full bg-yellow-dark w-2/3"></div></div>'
      }
    })

    const customLines = wrapper.find('.h-full.bg-purple-dark')
    expect(customLines.exists()).toBe(true)
  })

  it('renders named slots with article title and more', () => {
    const wrapper = mount(SplitArticlesBlock, {
      props: { articles },
      slots: {
        title0: '<h2 class="custom-title">Custom Title 0</h2>',
        more0: '<a href="/more0" class="custom-more">Read more 0</a>',
        title1: '<h2 class="custom-title">Custom Title 1</h2>',
        more1: '<a href="/more1" class="custom-more">Read more 1</a>'
      }
    })

    const customTitles = wrapper.findAll('.custom-title')
    const customReadMore = wrapper.findAll('.custom-more')

    expect(customTitles.length).toBe(2)
    expect(customTitles[0].text()).toBe('Custom Title 0')
    expect(customTitles[1].text()).toBe('Custom Title 1')

    expect(customReadMore.length).toBe(2)
    expect(customReadMore[0].text()).toBe('Read more 0')
    expect(customReadMore[1].text()).toBe('Read more 1')
  })
})
