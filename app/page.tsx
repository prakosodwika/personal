'use client'

import { motion } from 'motion/react'
import AboutSection from './home/AboutSection'
import ProjectSection from './home/ProjectSection'
import ConnectSection from './home/ConnectSection'
import CareerSection from './home/CareerSection'
import BlogSection from './home/BlogSection'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

function ComingSoon() {
  return (
    <span className="inline-flex items-center rounded-full bg-zinc-300 dark:bg-zinc-800 ms-3 px-4 py-1 text-zinc-300 ring-1 ring-zinc-500/10 ring-inset text-xs md:text-sm">
      Comming Soon !!!
    </span>
  )
}

export default function Personal() {
  return (
    <motion.main
      className="space-y-24"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <AboutSection />
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <ProjectSection/>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <CareerSection />
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <BlogSection />
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <ConnectSection />
      </motion.section>
    </motion.main>
  )
}
