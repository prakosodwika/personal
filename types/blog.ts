export interface Blog {
  id: number
  image_link: string | null
  slug: string
  title: string
  description: string
  content: string
  keyword: string[]
  is_published: boolean
  created_at: string
}
