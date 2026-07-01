import type { Achievement, Award, AwardReflection, Certificate, NavLink, PersonalInterest, Project, Stat } from '@/types/portfolio'

export const profile = {
  name: 'Micaela Ganas',
  shortName: 'Mika',
  role: 'Full Stack & ML Developer',
  tagline: 'Full-stack, machine learning, and cloud — from system architecture to interfaces users love.',
  email: 'mikaysabelbg14@gmail.com',
  available: true,
  photo: '/images/profile-mika-edited.png',
  degree: 'BS Computer Science',
  year: '2nd Year · Est. Grad 2027',
  resumeUrl: '/resume.pdf',
  socials: {
    github: 'https://github.com/MicaelaGanas',
    linkedin: 'https://www.linkedin.com/in/micaela-ysabel-ga%C3%B1as-989738248',
    twitter: 'https://twitter.com/YourHandle',
  },
}

export const typingRoles = [
  'building interfaces',
  'training ML models',
  'designing system architecture',
  'deploying on AWS',
  'shipping cloud apps',
  'leading projects',
]

export const techStack = [
  'HTML5', 'CSS3', 'JavaScript', 'React', 'TypeScript', 'Next.js',
  'Python', 'Java', 'C++',
  'AWS', 'DigitalOcean', 'Supabase',
  'Tailwind', 'Git', 'Figma',
]

export const heroTech = ['React', 'Python', 'TypeScript', 'AWS', 'ML']

export const aboutText = [
  'I build full-stack web apps with React, TypeScript, and modern tooling — fast, accessible, and polished. I also work in machine learning, from data pipelines to model integration, and design system architecture for products that need to scale.',
  'I develop in Python, Java, and C++, deploy on AWS and DigitalOcean, and lead teams as a project manager — balancing clean code, cloud infrastructure, and delivery timelines.',
]

export const beyondTechNote =
  'When I am not debugging or deploying, I am usually chasing good design, good stories, and good coffee.'

export const personalInterests: PersonalInterest[] = [
  { tag: 'Illustration', detail: 'Vintage poster art & bold graphic prints' },
  { tag: 'Anime & Film', detail: 'Character-driven stories and cinematic visuals' },
  { tag: 'Music', detail: 'Late-night playlists while sketching or reading' },
  { tag: 'Cafés', detail: 'Finding quiet spots to people-watch and reset' },
  { tag: 'Photography', detail: 'Street scenes, portraits, and accidental compositions' },
  { tag: 'Reading', detail: 'Essays, design zines, and anything with strong visuals' },
]

export const achievements: Achievement[] = [
  { icon: 'scholar', label: 'ET Yuchengco Scholar' },
  { icon: 'certificate', label: 'IT Specialist — Java' },
  { icon: 'star', label: "President's Lister — 1st Year 2nd Term" },
  { icon: 'star', label: "President's Lister — 2nd Year 2nd Term" },
  { icon: 'award', label: "Consistent Dean's Lister" },
]

export const awards: Award[] = [
  {
    id: 'best-ai-intelligent-systems',
    title: 'Best AI & Intelligent Systems Project',
    project: 'TBhon · Gañas, Mata & Argoncillo',
    event: 'CCIS Innovision 2026',
    image: '/awards/best-ai-intelligent-systems.png',
    year: 'Jun 2026',
  },
  {
    id: 'best-innovation-award',
    title: 'Best Innovation Award',
    project: 'TBhon · Gañas, Mata & Argoncillo',
    event: 'CCIS Innovision 2026',
    image: '/awards/best-innovation-award.png',
    year: 'Jun 2026',
  },
  {
    id: 'best-data-driven-innovation',
    title: 'Best Data-Driven Innovation',
    project: 'TBhon · Gañas, Mata & Argoncillo',
    event: 'CCIS Innovision 2026',
    image: '/awards/best-data-driven-innovation.png',
    year: 'Jun 2026',
  },
]

export const awardReflection: AwardReflection = {
  quote:
    'Good HCI is not only about polished interfaces, but about trust, clarity, and responsible design for real health settings.',
  event: 'CCIS Innovision 2026',
  eventDetail:
    'Annual Academic Colloquium and Project Showcase · June 20, 2026 · RG Birrey Building, Davao City',
  paragraphs: [
    'Receiving three awards at CCIS Innovision 2026 was one of the most meaningful moments of my academic life. The defense event was both fun and memorable, and I was grateful to present TBhon to experts in the field.',
    'Our application and research were thoroughly evaluated, and the panel gave insightful and constructive feedback. They examined our data collection process, hybrid model development, system architecture, and machine learning code structure. Their recommendations, including improving data handling through collaboration or cloud tools, helped me understand our strengths and areas for improvement.',
    'I also learned that good HCI is not only about polished interfaces, but about trust, clarity, and responsible design for real health settings. This experience gave me valuable knowledge and confidence to refine our work and approach future development more effectively.',
  ],
  project: 'TBhon',
  awardCount: 3,
  tags: ['HCI', 'System Architecture', 'Multimodal ML', 'Panel Defense'],
  photos: [
    {
      src: '/awards/reflection/showcase-presentation.png',
      alt: 'TBhon team presenting the technology stack at CCIS Innovision 2026',
      caption: 'Showcase · Tech stack presentation',
    },
    {
      src: '/awards/reflection/team-event.png',
      alt: 'TBhon team with Data Science professor at CCIS Innovision 2026',
      caption: 'Innovision · With our Data Science professor',
    },
    {
      src: '/awards/reflection/team-lab.png',
      alt: 'TBhon team with App Development professor during project development',
      caption: 'Behind the scenes · With our App Dev professor',
    },
  ],
}

export const certificates: Certificate[] = [
  {
    id: 'coursera-ux-design',
    title: 'Introduction to User Experience Design',
    issuer: 'Georgia Institute of Technology · Coursera',
    image: '/certificates/coursera-ux-design.png',
    year: 'May 2026',
    credentialUrl: 'https://coursera.org/verify/WH0X8KGIHZW3',
  },
  {
    id: 'coursera-input-interaction',
    title: 'Input and Interaction',
    issuer: 'UC San Diego · Coursera',
    image: '/certificates/coursera-input-interaction.png',
    year: 'May 2026',
    credentialUrl: 'https://coursera.org/verify/3011D80SQ155',
  },
  {
    id: 'ccis-innovision-2026',
    title: 'CCIS Innovision 2026',
    issuer: 'College of Computer and Information Science · Mapúa-MCM',
    image: '/certificates/ccis-innovision-2026.png',
    year: 'Jun 2026',
  },
  {
    id: 'github-git-workshop',
    title: 'GitHub & Git Workshop',
    issuer: 'CODE · Mapúa Malayan Colleges Mindanao',
    image: '/certificates/github-git-workshop.png',
    year: 'May 2026',
  },
  {
    id: 'its-java',
    title: 'Information Technology Specialist — Java',
    issuer: 'Certiport · Pearson VUE',
    image: '/certificates/its-java.png',
    year: 'Nov 2025',
    credentialUrl: 'https://verify.certiport.com',
  },
  {
    id: 'cpp-lab-workshop',
    title: 'C++ Lab: Crafting Code in the Digital Age',
    issuer: 'Association of Programming Instructors · Mapúa-MCM',
    image: '/certificates/cpp-lab-workshop.png',
    year: 'Sep 2024',
  },
  {
    id: 'appverse-odyssey',
    title: 'AppVerse Odyssey: Android Studio',
    issuer: 'Google Developer Student Clubs · Mapúa-MCM',
    image: '/certificates/appverse-odyssey.png',
    year: 'Feb 2024',
  },
  {
    id: 'fwdp-community-day',
    title: 'FWDP Monthly Community Day',
    issuer: 'Filipino Web Development Peers',
    image: '/certificates/fwdp-community-day.png',
    year: 'Jul 2023',
  },
]

export const stats: Stat[] = [
  { label: 'Projects Shipped', value: 3, suffix: '+' },
  { label: 'Years Coding', value: 3, suffix: '+' },
  { label: 'Curiosity', value: null, display: '∞' },
  { label: 'Certificates', value: 8, suffix: '+' },
]

export const featuredProjects: Project[] = [
  {
    id: 'medical-supply',
    title: 'Medical Supply Inventory System',
    description: 'Card-based interface with dynamic item management, image support, and clean, responsive layout.',
    image: '/images/image1.png',
    tags: ['HTML', 'CSS', 'JS'],
    sourceUrl: 'https://github.com/MicaelaGanas/Medical-Supply-Inventory',
  },
  {
    id: 'kelsey-homestay',
    title: 'Kelsey Homestay Booking Platform',
    description: 'React + Supabase app for seamless listing, booking, and real-time availability management.',
    image: '/images/image2.png',
    tags: ['React', 'Supabase'],
    liveUrl: 'https://oop-dev.vercel.app/',
    sourceUrl: 'https://github.com/code-mmcm/oop-dev',
  },
  {
    id: 'naveona',
    title: 'Naveona Tourist App',
    description: 'Single-page application optimized for load time and accessibility.',
    image: '/images/image5.png',
    tags: ['HTML', 'CSS', 'JS'],
  },
]

export const courseProjects: Project[] = [
  {
    id: 'healthqueue',
    title: 'HealthQueue',
    description: 'Queue management system for health services.',
    image: '/images/healthQueue.png',
    tags: ['Web App', 'Queue'],
    liveUrl: 'https://healthqueue-ph.vercel.app/',
    sourceUrl: 'https://github.com/MicaelaGanas/Healthqueue-PH',
  },
  {
    id: 'greensense',
    title: 'GreenSense',
    description: 'Eco-conscious web experience with clean design and responsive layout.',
    image: '/images/greensense.png',
    tags: ['HTML', 'CSS', 'JS'],
    liveUrl: 'https://micaelaganas.github.io/GreenSense/',
    sourceUrl: 'https://github.com/MicaelaGanas/GreenSense',
  },
  {
    id: 'js-mps',
    title: 'JavaScript MPs',
    description: 'Collection of JavaScript machine problems demonstrating core language features.',
    image: '/images/picture1.png',
    tags: ['JavaScript', 'DOM'],
    liveUrl: 'https://micaelaganas.github.io/IT03_Micaela/',
    sourceUrl: 'https://github.com/MicaelaGanas/IT03_Micaela',
  },
  {
    id: 'tailwind-demo',
    title: 'How to Use Tailwind CSS',
    description: 'Demo and tutorial project for getting started with Tailwind CSS utility framework.',
    image: '/images/TW.png',
    tags: ['Tailwind', 'CSS'],
    liveUrl: 'https://ganas-webapp-demo1.vercel.app/',
    sourceUrl: 'https://github.com/MicaelaGanas/ganas-webapp-demo1',
  },
  {
    id: 'nyaareads',
    title: 'NyaaReads',
    description: 'Manga reader web app powered by the MangaDex API — browse, search, and read manga chapters in the browser.',
    image: '/images/Nyaa.png',
    tags: ['React', 'MangaDex API'],
    liveUrl: 'https://nyaareads.vercel.app/',
    sourceUrl: 'https://github.com/MicaelaGanas/nyaaa-reads',
  },
  {
    id: 'pokedex',
    title: 'POKEDEX',
    description:
      'Interactive Pokédex with search, filters, Chart.js stats, comparisons, favorites, and a quiz — 151 Pokémon via Next.js App Router.',
    image: '/images/pokedex.png',
    tags: ['Next.js', 'Tailwind', 'Chart.js'],
    liveUrl: 'https://restapi-pokedemo-ganas.vercel.app/',
    sourceUrl: 'https://github.com/MicaelaGanas/restapi-pokedemo-ganas',
  },
]

export const navLinks: NavLink[] = [
  { href: '#home', label: 'Home' },
  { href: '#tbhon', label: 'TBhon' },
  { href: '#projects', label: 'Projects' },
  { href: '#about', label: 'About' },
  { href: '#works', label: 'Works' },
  { href: '#contact', label: 'Contact' },
]
