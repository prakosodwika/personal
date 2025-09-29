'use client'

import { workExperience, workExperienceDetails } from '@/data/workData'
import { ArrowLeftFromLine, ArrowUpRight, ChevronLeft, XIcon } from 'lucide-react'
import { motion } from 'motion/react'
import { useRouter } from 'next/navigation'
import * as React from 'react'
import { use } from 'react';

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

export default function CareerDetail({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter()
  const id = use(params).id;
  const workDetail = workExperienceDetails.find((d) => d.id === id)
  const work = workDetail?.work_experience
  const tachStack = workDetail?.tach_stack

  return (
    <motion.main
      className='space-y-16 min-h-[60vh]'
      variants={VARIANTS_CONTAINER}
      initial='hidden'
      animate='visible'
    >
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className='flex items-center gap-2 mb-4'>
          <button
            onClick={() => router.back()}
            className="hover:bg-zinc-200 dark:hover:bg-zinc-800 transition"
            aria-label="Back"
            type="button"
          >
            <ChevronLeft className="text-zinc-600 dark:text-zinc-300" />
          </button>
          <h2 className='text-3xl'>{work?.title || 'Unknown'}</h2>
        </div>
        <div className='flex flex-wrap gap-4'>
          <span className="inline-block rounded-full bg-zinc-200 dark:bg-zinc-800 px-3 py-1 text-base font-medium text-zinc-600 dark:text-zinc-300">
            {work?.company || 'Unknown'}
          </span>
          <span className="inline-block rounded-full bg-zinc-200 dark:bg-zinc-800 px-3 py-1 text-base font-medium text-zinc-600 dark:text-zinc-300">
            {work?.type || 'Full-time'}
          </span>
          <span className="inline-block rounded-full bg-zinc-200 dark:bg-zinc-800 px-3 py-1 text-base font-medium text-zinc-600 dark:text-zinc-300">
            {work?.location || 'Indonesia'}
          </span>
          <span className="inline-block rounded-full bg-zinc-200 dark:bg-zinc-800 px-3 py-1 text-base font-medium text-zinc-600 dark:text-zinc-300">
            {work?.start || 'Unknown'} - {work?.end || 'Present'}
          </span>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        {workDetail?.reflection ? <h3 className='text-xl mb-3'>Reflection</h3> : ''}
        {workDetail?.reflection ? <p className='text-zinc-600 dark:text-zinc-400'>{workDetail?.reflection}</p> : ''}
      </motion.section>
      

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        {workDetail?.responsibilities?.length ? <h3 className='text-xl mb-3'>Responsibilities</h3> : ''}
          <ul className='list-disc list-inside'>
            {workDetail?.responsibilities?.map((r, i) => (
              <li key={`resp-${i}`} className='text-zinc-600 dark:text-zinc-400 mb-2'>{r}</li>
            ))}
          </ul>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        {workDetail?.key_achievements?.length ? <h3 className='text-xl mb-3'>Key Achievements</h3> : ''}
          <ul className='list-disc list-inside'>
            {workDetail?.key_achievements?.map((k, i) => (
              <li key={`resp-${i}`} className='text-zinc-600 dark:text-zinc-400 mb-2'>{k}</li>
            ))}
          </ul>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        {workDetail?.projects?.length ? <h3 className='text-xl mb-3'>Project Delivered</h3> : ''}
        <ul className='list-disc list-inside'>
          {workDetail?.projects?.map((d, i) => (
            <li key={`resp-${i}`} className='text-zinc-600 dark:text-zinc-400 mb-2'>
              {d.link ? <a href={d.link} target='_blank' className="underline">
                {d.name} 
                <ArrowUpRight className="inline-block h-4 w-4" />
              </a> : <span>{d.name}</span>}
              </li>
            ))}
        </ul>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        {tachStack?.length ? <h3 className='text-xl mb-4'>Skill & Tools</h3> : ''}
        <div className='flex flex-wrap gap-4'>
          {tachStack?.map((ts) => (
            <span key={ts.id} className="rounded-full bg-zinc-200 dark:bg-zinc-800 px-3 py-1 text-base font-medium text-zinc-600 dark:text-zinc-300 flex items-center gap-2">
              <img src={ts.icon} alt={ts.name} className="h-5 w-5"/>
              {ts.name}
            </span>
          ))}
        </div> 
      </motion.section>
    </motion.main>
  )
}