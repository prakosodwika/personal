import { WorkExperience, WorkExperienceDetails } from "../types/work";
import { getTechStackIn } from "./techData";

export const workExperience: WorkExperience[] = [{
    id: '1',
    title: 'Full-stack Developer',
    company: 'Tri Wangsa Digital',
    location: 'Bali',
    start: 'Nov 2024',
    end: null,
    type: 'Full-time',
},{
    id: '2',
    title: 'Front-end Developer',
    company: 'PLN Icon Plus',
    location: 'Jakarta',
    start: 'Sep 2024',
    end: 'Nov-2024',
    type: 'Full-time',
},{
    id: '3',
    title: 'Web Developer',
    company: 'Travel Umroh dan Haji',
    location: 'Remote',
    start: 'Apr 2024',
    end: 'Oct 2024',
    type: 'Freelance',
},{
    id: '4',
    title: 'Back-end Developer',
    company: 'PT. Halobelanja.com',
    location: 'Bali',
    start: 'Jun 2023',
    end: 'Sep 2024',
    type: 'Full-time',
  },
  {
    id: '5',
    title: 'Back-end Developer',
    company: 'DoorToId, Alpha Sigma Synergy',
    location: 'Remote',
    start: 'Oct 2022',
    end: 'Jan 2023',
    type: 'Part-time',
  },
  {
    id: '6',
    title: 'Back-end Developer',
    company: 'Fishku Indonesia',
    location: 'Remote',
    start: 'Jul 2022',
    end: 'Feb 2023',
    type: 'Full-time',
  }]

export const workExperienceDetails: WorkExperienceDetails[] = [{
    id: '1',
    work_experience: workExperience[0],
    reflection: 'As a fullstack developer, I focus on building scalable and maintainable systems. I prioritize creating clean, flexible database designs and modular code to improve software quality and ease future development.',
    responsibilities: [
        'Designed scalable and maintainable system architecture using MVC principles.',
        'Developed modular and reusable code for better maintainability.',
        'Created clean and flexible database schemas to support evolving requirements.',
        'Collaborated with the team to deliver efficient software solutions.',
    ],
    key_achievements: [
        'Delivered projects with flexible database structures that adapt to changing needs.',
        'Improved code modularity, reducing development time and simplifying maintenance.',
    ],
    projects: [
        { name: 'Event Equipment Rental Point of Sale', link: 'https://balisewasewa.com'},
        { name: 'Football Academy Management System', link: 'https://papuafootballacademy.com'},
        { name: 'Sport Tournament Management System', link: 'https://unileague.id'},
        { name: 'Voucher Point of Sale', link: 'https://mankokumi.com/'},
        { name: 'Pharmacy Management System', link: null},
        { name: 'Medical Record System', link: null},
    ],
    tach_stack: getTechStackIn([1, 2, 3, 4, 5, 6]),
},{
    id: '2',
    work_experience: workExperience[1],
    reflection: 'Worked as a frontend developer focused on refactoring and improving an internal application for PLN Enjenering. Learned to enhance code quality and user experience by applying modular and responsive design principles using Vue.js and Tailwind CSS.',
    responsibilities: [
        'Conducted a major refactor of the internal system’s frontend using Vue.js and Tailwind CSS.',
        'Ensured application performance and maintainability through modularization and responsive design.',
    ],
    key_achievements: [
        'Simplified 30% of previously complex code structure, resulting in a more efficient team workflow.'
    ],
    projects: [
        { name: 'Office Management System', link: null }
    ],
    tach_stack: getTechStackIn([1, 3, 7]),
},{
    id: '3',
    work_experience: workExperience[2],
    reflection: 'Worked remotely as a freelance web developer, collaborating directly with clients to deliver tailored website solutions. Focused on creating user-friendly designs and ensuring smooth deployment using WordPress and Hostinger.',
    responsibilities: [
        'Created a digital brand guideline and implemented it in a WordPress-based landing page design.',
        'Integrated visual elements and copy to improve visitor conversion rates.',
            'Managed website deployment and hosting setup using Hostinger.',
            'Maintained and updated the website based on client feedback to improve performance and usability.',
    ],
    key_achievements: [
        'Landing page design doubled the average visitor dwell time.',
        'The website was perceived as more professional and credible, contributing to increased lead generation.',
        'Successfully launched and maintained client websites with reliable uptime and fast loading times on Hostinger hosting.'
    ],
    projects: [
        { name: 'Design and Development of a Landing Page for a Digital Brand', link: 'https://ptuh-landing.vercel.app/haramain' }
    ],
    tach_stack: getTechStackIn([8, 15]),
},{
    id: '4',
    work_experience: workExperience[3],
    reflection: 'Learned to manage digital wallet systems and build a booking system. Focused on creating clean and flexible data. Got first experience with deployment and basic troubleshooting on GCP.',
    responsibilities: [
        'Developed a booking system for attraction rides using RESTful API architecture.',
        'Managed digital wallet features and transaction data on the backend.',
        'Designed clean and scalable database structures.',
        'Collaborated with the frontend team to ensure API and data consistency.',
        'Assisted with deployment and basic issue handling on GCP.',
    ],
    key_achievements: [
        'Successfully launched a working booking system used in real-world scenarios.',
        'Improved backend data structure, making it easier to maintain and expand.',
        'Contributed to deployment and basic production support on GCP.',
    ],
    projects: [
        { name:'Digital Wallet APIs', link: 'https://instagram.com/halobelanja.com_official' },
        { name:'Booking System for Attraction Rides APIs', link: 'https://instagram.com/bigs_indonesia' },
    ],
    tach_stack: getTechStackIn([9, 10, 14, 11, 12, 4]),
},{
    id: '5',
    work_experience: workExperience[4],
    reflection: 'Worked on building a visa application backend system handling sensitive user data and real-world scenarios. Gained experience in cloud development by using Firebase Cloud Functions to automate processes and improve system scalability.',
    responsibilities: [
        'Developed APIs for a visa application platform using Express.js and Firebase.',
        'Designed database structure and implemented user authentication with Firestore and Firebase Auth.',
        'Collaborated with the frontend team to align API requirements and data schemas.',
        'Utilized Firebase Cloud Functions to automate backend logic and improve performance.'
    ],
    key_achievements: [
        'Successfully delivered a secure and scalable backend system for visa applications.',
        'Enhanced system automation and scalability by integrating Cloud Functions.',
        'Improved API reliability and alignment with frontend requirements, speeding up the development process.',
    ],
    projects: [
        { name: 'Visa Application Platform APIs', link: 'https://instagram.com/doortoid', }
    ],
    tach_stack: getTechStackIn([1, 9, 10, 13]),
},{
    id: '6',
    work_experience: workExperience[5],
    reflection: 'Learned how to develop and optimize backend APIs tailored for an e-commerce platform serving fishermen. Gained experience improving system performance and ensuring reliability in a real-world environment.',
    responsibilities: [
        'Refactored and redeployed an e-commerce API to Google Cloud Platform.',
        'Collaborated directly with the product team to improve the user checkout flow.',
    ],
    key_achievements: [
        'Reduced API response time by up to 50% after refactoring.',
        'Maintained 99.9% application uptime for 3 months post-deployment.'
    ],
    projects: [
        { name: 'E-commerce APIs', link: 'https://instagram.com/fishku.id' },
        { name: 'Merchant APIs' , link: null},
    ],
    tach_stack: getTechStackIn([1, 9, 10, 11, 4]),
},]