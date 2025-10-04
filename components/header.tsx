'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <Link
          href="/"
          className="text-lg font-medium md:text-xl dark:text-white"
        >
          Prakoso Dwika
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 md:text-lg dark:text-zinc-500"
          delay={0.5}
        >
          Full Stack Developer
        </TextEffect>
      </div>
      <img
        className="h-12 w-12 rounded-full md:h-16 md:w-16"
        src="/profile.png"
        alt="Profile"
      />
    </header>
  )
}
