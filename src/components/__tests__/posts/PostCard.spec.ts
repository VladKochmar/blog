import { mount, RouterLinkStub } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'

import PostCard from '@/components/posts/PostCard.vue'

const post = {
  id: '1',
  title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
  subtitle:
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  category: 'Business',
  authorId: '1',
  imgSrc:
    'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  content: `<h2 class="title text-4xl text-black-23 mb-4">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
</h2>
<p class="text-gray-medium leading-relaxed mb-12">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
  labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in
  aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis
  dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue
  quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.
</p>
<h2 class="title text-4xl text-black-23 mb-4">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
</h2>
<p class="text-gray-medium leading-relaxed mb-6">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
  labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in
  aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis
  dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue
  quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.
</p>
<p class="text-gray-medium leading-relaxed mb-6">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
  labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in
  aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis
  dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue
  quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.
</p>
<ul class="mb-6">
  <li
    class="text-black-23 text-2xl leading-tight flex gap-x-4 items-center before:w-1 before:h-1 before:rounded-full before:bg-black-23"
  >
    Lorem ipsum dolor sit amet
  </li>
  <li
    class="text-black-23 text-2xl leading-tight flex gap-x-4 items-center before:w-1 before:h-1 before:rounded-full before:bg-black-23"
  >
    Non blandit massa enim nec scelerisque
  </li>
  <li
    class="text-black-23 text-2xl leading-tight flex gap-x-4 items-center before:w-1 before:h-1 before:rounded-full before:bg-black-23"
  >
    Neque egestas congue quisque egestas
  </li>
</ul>
<p class="text-gray-medium leading-relaxed mb-12">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
  labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in
  aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis
  dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue
  quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.
</p>
<h2 class="title text-4xl text-black-23 mb-4">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
</h2>
<p class="text-gray-medium leading-relaxed">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
  labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in
  aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis
  dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue
  quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.
</p>`,
  date: 'May 23, 2024'
}

describe('PostCard', () => {
  it('renders properly', () => {
    const wrapper = mount(PostCard, {
      props: { post },
      global: { stubs: { RouterLink: RouterLinkStub } }
    })

    const category = wrapper.find('p.text-purple-dark')
    expect(category.exists()).toBe(true)
    expect(category.text()).toBe('Business')

    const title = wrapper.find('h3')
    expect(title.exists()).toBe(true)
    expect(title.text()).toBe(
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
    )

    const subtitle = wrapper.find('p.text-gray-medium')
    expect(subtitle.exists()).toBe(true)
    expect(subtitle.text()).toBe(
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
    )
  })

  it('sets up router links correctly', () => {
    const wrapper = mount(PostCard, {
      props: { post },
      global: { stubs: { RouterLink: RouterLinkStub } }
    })

    const routerLinks = wrapper.findAllComponents(RouterLinkStub)

    routerLinks.forEach((routerLink) => {
      expect(routerLink.props().to).toEqual({ name: 'post', params: { id: post.id } })
    })
  })
})
