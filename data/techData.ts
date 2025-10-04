import { TechStack } from '../types/tach'

export const techStack: TechStack[] = [
  {
    id: 1,
    name: 'JavaScript',
    icon: '/programming/javascript.svg',
  },
  {
    id: 2,
    name: 'Laravel',
    icon: '/programming/laravel.svg',
  },
  {
    id: 3,
    name: 'Tailwind CSS',
    icon: '/programming/tailwind.svg',
  },
  {
    id: 4,
    name: 'MySQL',
    icon: '/programming/mysql.svg',
  },
  {
    id: 5,
    name: 'PostgreSQL',
    icon: '/programming/postgresql.svg',
  },
  {
    id: 6,
    name: 'Eloquent',
    icon: '/programming/orm.svg',
  },
  {
    id: 7,
    name: 'Vue.js',
    icon: '/programming/vue.svg',
  },
  {
    id: 8,
    name: 'Wordpress',
    icon: '/programming/wordpress.svg',
  },
  {
    id: 9,
    name: 'Node.js',
    icon: '/programming/nodejs.svg',
  },
  {
    id: 10,
    name: 'Express.js',
    icon: '/programming/expressjs.svg',
  },
  {
    id: 11,
    name: 'Google Cloud Platform',
    icon: '/programming/google-cloud.svg',
  },
  {
    id: 12,
    name: 'Linux',
    icon: '/programming/linux.svg',
  },
  {
    id: 13,
    name: 'Firebase',
    icon: '/programming/firebase.svg',
  },
  {
    id: 14,
    name: 'Sequelize.js',
    icon: '/programming/sequelize.svg',
  },
  {
    id: 15,
    name: 'Hostinger',
    icon: '/programming/hostinger.svg',
  },
  {
    id: 16,
    name: 'Keras',
    icon: '/programming/Keras.svg',
  },
  {
    id: 17,
    name: 'TensorFlow',
    icon: '/programming/tensorflow.svg',
  },
]

export const getTechStackIn = (ids: number[]): TechStack[] => {
  return techStack.filter((tech) => ids.includes(tech.id))
}
