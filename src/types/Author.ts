import type { Social } from './SocialMedia'

export interface Author {
  id: number | string
  name: string
  subtitle: string
  title: string
  description?: string
  imgSrc?: string
  posts?: string[]
  socialMedia?: { facebook?: Social; instagram?: Social; twitter?: Social; linkedin?: Social }
}
