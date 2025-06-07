'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <Link href="/" className="font-medium dark:text-white text-lg md:text-xl">
          Prakoso Dwika
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500 md:text-lg"
          delay={0.5}
        >
          Full Stack Developer
        </TextEffect>
      </div>
      <img className="h-12 w-12 md:h-16 md:w-16 rounded-full" src="/profile.png" alt="Profile" />
    </header>
  )
}
