import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'

import AuthorsList from '@/components/authors/AuthorsList.vue'
import AuthorItem from '@/components/authors/AuthorItem.vue'

import { useAuthorsStore } from '@/stores/authors'

vi.mock('@/stores/authors', () => ({
  useAuthorsStore: vi.fn()
}))

const authors = [
  {
    id: '1',
    name: 'Floyd Miles',
    subtitle: 'Content Writer @Company',
    title: 'Hey there, I’m Floyd Miles and welcome to my Blog',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.',
    imgSrc:
      'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    posts: ['1', '2'],
    socialMedia: { facebook: '#', instagram: '#', twitter: '#', linkedin: '#' }
  },
  {
    id: '2',
    name: 'Dianne Russell',
    subtitle: 'Content Writer @Company',
    title: 'Hey there, I’m Dianne Russell and welcome to my Blog',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.',
    imgSrc:
      'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    posts: ['6'],
    socialMedia: { facebook: '#', instagram: '#', twitter: '#', linkedin: '#' }
  }
]

describe('AuthorsList', () => {
  it('renders the title correctly', () => {
    ;(useAuthorsStore as any).mockReturnValue({ getAuthorsList: authors })

    const wrapper = mount(AuthorsList, {
      global: {
        stubs: {
          AuthorItem: true
        }
      }
    })

    const title = wrapper.find('h2')
    expect(title.text()).toBe('List of Authors')
  })

  it('renders a list of AuthorItem components', () => {
    ;(useAuthorsStore as any).mockReturnValue({ getAuthorsList: authors })

    const wrapper = mount(AuthorsList, {
      global: {
        stubs: {
          AuthorItem: true
        }
      }
    })

    const authorItems = wrapper.findAllComponents(AuthorItem)
    expect(authorItems.length).toBe(authors.length)

    authorItems.forEach((authorItem, index) => {
      expect(authorItem.props().author).toEqual(authors[index])
    })
  })
})
