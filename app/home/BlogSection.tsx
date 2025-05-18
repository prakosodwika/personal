import SectionTitle from "@/components/sectionTitle";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { BLOG_POSTS } from "../data";
import Link from "next/link";

export default function BlogSection() {
  const isComingSoon = BLOG_POSTS.length === 0;

  return (
    <section>
      <SectionTitle title="# My Writings" comingSoon={isComingSoon} />
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
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.uid}
              className="-mx-3 rounded-xl px-3 py-3"
              href={post.link}
              data-id={post.uid}
            >
              <div className="flex flex-col space-y-1">
                <h4 className="font-normal dark:text-zinc-100">
                  {post.title}
                </h4>
                <p className="text-zinc-500 dark:text-zinc-400">
                  {post.description}
                </p>
              </div>
            </Link>
          ))}
        </AnimatedBackground>
      </div>
    </section>
  )
}