type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string|null
  type: string
  link: string
  id: string
}

type techStack = {
  name: string
  icon: string
}

type WorkExperienceDetails = {
  id: string
  workExperience: WorkExperience
  description: string
  tachStack: techStack[]
}

type BlogPost = {
  id: number
  slug: string
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  // {
  //   name: 'Motion Primitives Pro',
  //   description:
  //     'Advanced components and templates to craft beautiful websites.',
  //   link: 'https://pro.motion-primitives.com/',
  //   video:
  //     'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
  //   id: 'project1',
  // },
  // {
  //   name: 'Motion Primitives',
  //   description: 'UI kit to make beautiful, animated interfaces.',
  //   link: 'https://motion-primitives.com/',
  //   video:
  //     'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
  //   id: 'project2',
  // },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Tri Wangsa Digital | Bali',
    title: 'Full-stack Developer',
    start: 'Nov 2024',
    end: 'Nov-2024',
    type: 'Full-time',
    link: 'https://ibelick.com',
    id: '1',
  },
  // {
  //   company: 'PLN Icon Plus | Jakarta Selatan',
  //   title: 'Front-end Developer',
  //   start: 'Sep 2024',
  //   end: 'Nov-2024',
  //   type: 'Full-time',
  //   link: 'https://ibelick.com',
  //   id: '2',
  // },
  // {
  //   company: 'Travel Umroh dan Haji | Remote',
  //   title: 'Web Developer',
  //   start: 'Apr 2024',
  //   end: 'Oct 2024',
  //   type: 'Freelance',
  //   link: 'https://ibelick.com',
  //   id: '3',
  // },
  // {
  //   company: 'PT. Halobelanja.com | Bali',
  //   title: 'Back-end Developer',
  //   start: 'Jun 2023',
  //   end: 'Sep 2024',
  //   type: 'Full-time',
  //   link: 'https://ibelick.com',
  //   id: '4',
  // },
  // {
  //   // company: 'DoorToId, Alpha Sigma Synergy | Remote',
  //   company: 'DoorToId, Alpha Sigma Syner...',
  //   title: 'Back-end Developer',
  //   start: 'Oct 2022',
  //   end: 'Jan 2023',
  //   type: 'Part-time',
  //   link: 'https://ibelick.com',
  //   id: '5',
  // },
  // {
  //   company: 'Fishku Indonesia | Remote',
  //   title: 'Back-end Developer',
  //   start: 'Jul 2022',
  //   end: 'Feb 2023',
  //   type: 'Full-time',
  //   link: 'https://ibelick.com',
  //   id: '6',
  // },
]

export const WORK_EXPERIENCE_DETAILS: WorkExperienceDetails[] = [
  {
    id: "1",
    workExperience: WORK_EXPERIENCE[0],
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.',
    tachStack: [
      {
        name: 'HTML',
        icon: 'https://ibelick.com',
      },
      {
        name: 'CSS',
        icon: 'https://ibelick.com',
      },
      {
        name: 'JavaScript',
        icon: 'https://ibelick.com',
      },
    ],
  }
]

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    slug: 'exploring-the-intersection-of-design-ai-and-design-engineering',
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    id: 2,
    slug: 'why-i-left-my-job-to-start-my-own-company',
    title: 'Why I left my job to start my own company',
    description: 'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/why-i-left-my-job-to-start-my-own-company',
    uid: 'blog-2',
  },
  {
    id: 3,
    slug: 'what-i-learned-from-my-first-year-of-freelancing',
    title: 'What I learned from my first year of freelancing',
    description: 'A look back at my first year of freelancing and what I learned',
    link: '/blog/what-i-learned-from-my-first-year-of-freelancing',
    uid: 'blog-3',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/prakosodwika',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/prakosodwika',
  },
]

export const EMAIL = 'prakosodwika4@gmail.com'
