import SectionTitle from '@/components/sectionTitle'
import { useEffect, useState } from 'react'
import { AnimatedBackground } from '@/components/ui/animated-background'
import Link from 'next/link'
import { getAllBlogs } from '@/services/blog'

export default function BlogSection() {
  const [articles, setArticles] = useState<any[]>([])
  useEffect(() => {
    getAllBlogs().then(setArticles)
  }, [])

  return (
    <section>
      <SectionTitle title="My Writings" comingSoon={articles.length === 0} />
      <div className="flex flex-col space-y-0">
        <AnimatedBackground
          enableHover
          className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
          transition={{
            type: 'spring',
            bounce: 0,
            duration: 0.2,
          }}
        >
          {articles.map((article) => (
            <Link
              key={article.id}
              className="-mx-3 rounded-xl px-3 py-3"
              href={'/blog/' + article.slug}
              data-id={article.id}
            >
              <div className="flex flex-col space-y-1">
                <h4 className="font-normal dark:text-zinc-100">
                  {article.title}
                </h4>
                <p className="text-zinc-500 dark:text-zinc-400">
                  {article.description}
                </p>
              </div>
            </Link>
          ))}
        </AnimatedBackground>
      </div>
    </section>
  )
}
