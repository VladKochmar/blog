import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import JoinTeam from '../JoinTeam.vue'

describe('JoinTeam', () => {
  it('renders properly', () => {
    const wrapper = mount(JoinTeam)

    expect(wrapper.find('.title').text()).toBe('Join our team to be a part of our story')
    expect(wrapper.find('.text-gray-medium.mb-8').text()).toBe(
      'Embark on a journey with us and become a vital chapter in our narrative by joining our team today.'
    )
    expect(wrapper.find('.btn').text()).toBe('Join Now')
  })
})
