import { defineStore } from 'pinia'
import type { Author } from '@/types/Author'

import { computed, ref } from 'vue'

export const useAuthorsStore = defineStore('authors', () => {
  const authorsList = ref<Author[]>([
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
    },
    {
      id: '3',
      name: 'Luella Watkins',
      subtitle: 'Content Writer @Company',
      title: 'Hey there, I’m Luella Watkins and welcome to my Blog',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.',
      imgSrc:
        'https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      posts: ['3'],
      socialMedia: { facebook: '#', instagram: '#', twitter: '#', linkedin: '#' }
    },
    {
      id: '4',
      name: 'Lara Gonzalez',
      subtitle: 'Content Writer @Company',
      title: 'Hey there, I’m Lara Gonzalez and welcome to my Blog',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.',
      imgSrc:
        'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      posts: ['5', '12'],
      socialMedia: { facebook: '#', instagram: '#', twitter: '#', linkedin: '#' }
    },
    {
      id: '5',
      name: 'Adriana Newton',
      subtitle: 'Content Writer @Company',
      title: 'Hey there, I’m Adriana Newton and welcome to my Blog',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.',
      imgSrc:
        'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      posts: ['4', '10'],
      socialMedia: { facebook: '#', instagram: '#', twitter: '#', linkedin: '#' }
    },
    {
      id: '6',
      name: 'Oscar Orr',
      subtitle: 'Content Writer @Company',
      title: 'Hey there, I’m Oscar Orr and welcome to my Blog',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.',
      imgSrc:
        'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      posts: ['9'],
      socialMedia: { facebook: '#', instagram: '#', twitter: '#', linkedin: '#' }
    },
    {
      id: '7',
      name: 'Jamie Esparza',
      subtitle: 'Content Writer @Company',
      title: 'Hey there, I’m Jamie Esparza and welcome to my Blog',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.',
      imgSrc:
        'https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      posts: ['8'],
      socialMedia: { facebook: '#', instagram: '#', twitter: '#', linkedin: '#' }
    },
    {
      id: '8',
      name: 'Molly Brandt',
      subtitle: 'Content Writer @Company',
      title: 'Hey there, I’m Molly Brandt and welcome to my Blog',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.',
      imgSrc:
        'https://images.pexels.com/photos/785667/pexels-photo-785667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      posts: ['7', '11'],
      socialMedia: { facebook: '#', instagram: '#', twitter: '#', linkedin: '#' }
    }
  ])

  const getAuthorsList = computed(() => authorsList.value)

  function getAuhtorById(authorId: number | string) {
    return authorsList.value.find((author) => author.id === authorId)
  }

  return { getAuthorsList, getAuhtorById }
})
