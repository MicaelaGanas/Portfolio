import type { Achievement, Award, AwardReflection, Certificate, NavLink, Project, Stat } from '@/types/portfolio'

export const profile = {
  name: 'Micaela Ganas',
  shortName: 'Mika',
  role: 'Full Stack Developer',
  tagline: 'I build accessible, animated, and high-performance web experiences that users love.',
  email: 'mikaysabelbg14@gmail.com',
  available: true,
  photo: '/images/profile - Edited-800x800.png',
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
  'animating interactions',
  'optimizing performance',
  'leading projects',
  'improving accessibility',
]

export const techStack = [
  'HTML5', 'CSS3', 'JavaScript', 'React', 'TypeScript',
  'Java', 'C++', 'Supabase', 'Tailwind', 'Git', 'Figma',
]

export const heroTech = ['HTML', 'CSS', 'JavaScript', 'React', 'Java']

export const aboutText = [
  'I specialize in front-end development — building fast, accessible, and animated interfaces. I focus on clean HTML structure, modern CSS for layout and motion, and well-tested JavaScript for smooth interactions.',
  'Beyond front-end work, I also develop full desktop applications using Java, C++, and object-oriented design principles. As a project manager, I lead teams, handle task delegation, and maintain timelines.',
]

export const achievements: Achievement[] = [
  { icon: '🏆', label: "Consistent Dean's Lister" },
  { icon: '🎓', label: 'ET Yuchengco Scholar' },
  { icon: '⭐', label: "President's Lister — 1st Year 2nd Term" },
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
    'Strong HCI is not only about polished screens, but about designing for real users in real health settings.',
  paragraphs: [
    'Receiving three awards at CCIS Innovision 2026 was one of the most meaningful moments of our HCI journey with TBhon. Presenting a staff-operated TB screening system—combining symptom checklists, cough audio, sputum imaging, and IoT capture—put everything we learned about HCI into practice.',
    'Judges valued how we balanced technical depth with honest scope: TBhon supports triage, not diagnosis, and keeps staff in control through review steps and clear disclaimers. Preparing for the showcase also pushed us to explain complex multimodal fusion in simple, human terms.',
    'The experience reinforced that empathy, usability testing, and responsible design matter as much as model accuracy. We left Innovision more confident that thoughtful interaction design can help bridge the gap between innovation and community health impact.',
  ],
  event: 'CCIS Innovision 2026',
  project: 'TBhon',
  awardCount: 3,
  tags: ['HCI', 'Triage UX', 'Multimodal ML', 'Community Health'],
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
