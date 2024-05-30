import { defineStore } from 'pinia'

import { ref, computed } from 'vue'
import type { Post } from '@/types/Post'

export const usePostsStore = defineStore('posts', () => {
  const postsList = ref<Post[]>([
    {
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
    },
    {
      id: '2',
      title: '8 Figma design systems that you can download for free today.',
      subtitle:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
      category: 'Startup',
      authorId: '1',
      imgSrc:
        'https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
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
      date: 'Aug 22, 2023'
    },
    {
      id: '3',
      title: 'Design tips for designers that cover everything you need',
      subtitle:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
      category: 'Startup',
      authorId: '3',
      imgSrc:
        'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
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
    },
    {
      id: '4',
      title: 'How to build rapport with your web design clients',
      subtitle:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
      category: 'Economy',
      authorId: '5',
      imgSrc:
        'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
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
      date: 'May 10, 2024'
    },
    {
      id: '5',
      title: 'Logo design trends to avoid in 2024',
      subtitle:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
      category: 'Business',
      authorId: '4',
      imgSrc:
        'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
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
      date: 'May 3, 2024'
    },
    {
      id: '6',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
      subtitle:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
      category: 'Business',
      authorId: '2',
      imgSrc:
        'https://images.pexels.com/photos/3184395/pexels-photo-3184395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
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
      date: 'May 17, 2024'
    },
    {
      id: '7',
      title: '8 Figma design systems that you can download for free today.',
      subtitle:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
      category: 'Economy',
      authorId: '8',
      imgSrc:
        'https://images.pexels.com/photos/326502/pexels-photo-326502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
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
      date: 'May 1, 2024'
    },
    {
      id: '8',
      title: 'Font sizes in UI design: The complete guide to follow',
      subtitle:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
      category: 'Technology',
      authorId: '7',
      imgSrc:
        'https://images.pexels.com/photos/54257/pexels-photo-54257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
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
      date: 'May 27, 2024'
    },
    {
      id: '9',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
      subtitle:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
      category: 'Business',
      authorId: '6',
      imgSrc:
        'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
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
      date: 'May 28, 2024'
    },
    {
      id: '10',
      title: '8 Figma design systems that you can download for free today.',
      subtitle:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
      category: 'Startup',
      authorId: '5',
      imgSrc:
        'https://images.pexels.com/photos/392018/pexels-photo-392018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
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
      date: 'May 13, 2024'
    },
    {
      id: '11',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
      subtitle:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
      category: 'Technology',
      authorId: '8',
      imgSrc:
        'https://images.pexels.com/photos/1015568/pexels-photo-1015568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
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
      date: 'Aug 12, 2023'
    },
    {
      id: '12',
      title: 'Font sizes in UI design: The complete guide to follow',
      subtitle:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
      category: 'Startup',
      authorId: '4',
      imgSrc:
        'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
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
      date: 'Aug 18, 2023'
    }
  ])

  const filteredList = ref<Post[]>()

  const getPostsList = computed(() => postsList.value)

  const getFilteredList = computed(() => filteredList.value)

  function getPostById(postId: string | number) {
    return postsList.value.find((post) => post.id === postId)
  }

  function filterPostsByCategory(category: string) {
    filteredList.value = postsList.value.filter((post) => post.category === category)
  }

  return { getPostsList, getFilteredList, getPostById, filterPostsByCategory }
})
