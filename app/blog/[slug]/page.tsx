import Image from "next/image"
import { notFound } from "next/navigation"
import ReactMarkdown from "react-markdown"
import { getBlogBySlug } from "@/services/blog";

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getBlogBySlug(slug)

  if (!post) return notFound()

  const date = new Date(post.created_at).toLocaleString("id-ID", {
    weekday: "long", year: "numeric", month: "long", 
    day: "numeric", timeZone: "Asia/Jakarta", 
  })

  return (
    <article className="prose max-w-none dark:prose-invert">
      <h1>{post.title}</h1>
      <p className="text-sm text-zinc-500 dark:text-zinc-400">Prakoso Dwika and AI | {date}</p>
      <Image src={post.image_link || 'https://cdn.cosmos.so/affd4b79-e848-4dfd-bd42-5f2c4a847365?format=jpeg'} 
        alt={post.title} width={0} height={0} sizes="100vw" className="w-full h-auto" 
      />
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  )
}