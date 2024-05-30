import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'

import SplitContent from '../SplitContent.vue'

const article = {
  title: 'Test title',
  subtitle: 'Test subtitle',
  text: 'Test text',
  imgSrc: '../../assets/img/about-us/image01.jpg'
}

describe('SplitContent', () => {
  it('renders properly', () => {
    const wrapper = mount(SplitContent, { props: { contentData: article } })

    const title = wrapper.find('h2')
    expect(title.exists()).toBe(true)
    expect(title.text()).toBe('Test title')

    const subtitle = wrapper.find('p.text-2xl')
    expect(subtitle.exists()).toBe(true)
    expect(subtitle.text()).toBe('Test subtitle')

    const text = wrapper.find('p.leading-relaxed')
    expect(text.exists()).toBe(true)
    expect(text.text()).toBe('Test text')
  })

  it('renders columns in reverse order', () => {
    const wrapper = mount(SplitContent, { props: { contentData: article, isReverse: true } })
    expect(wrapper.find('.lg\\:flex-row-reverse').exists()).toBe(true)
  })
})
