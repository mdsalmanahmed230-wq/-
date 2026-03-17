import { Project, Skill, Service, Testimonial } from './types';

export const PROFILE_IMAGE = 'https://i.postimg.cc/JznyvBZR/ama-ra-chaba.jpg'; // Updated with user's photo

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-stack modern e-commerce solution with real-time inventory and payment integration.',
    image: 'https://picsum.photos/seed/shop/800/600',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    category: 'Web Development',
    link: '#'
  },
  {
    id: '2',
    title: 'AI Content Generator',
    description: 'A SaaS platform that uses Gemini API to generate marketing copy and blog posts.',
    image: 'https://picsum.photos/seed/ai/800/600',
    tags: ['Next.js', 'Gemini API', 'Tailwind'],
    category: 'AI/ML',
    link: '#'
  },
  {
    id: '3',
    title: 'Fitness Tracker App',
    description: 'Mobile-first web app for tracking workouts and nutrition with interactive charts.',
    image: 'https://picsum.photos/seed/fitness/800/600',
    tags: ['React', 'Firebase', 'Recharts'],
    category: 'Web Development',
    link: '#'
  },
  {
    id: '4',
    title: 'Portfolio for Photographer',
    description: 'A minimalist, high-performance gallery for a professional photographer.',
    image: 'https://picsum.photos/seed/photo/800/600',
    tags: ['React', 'Framer Motion', 'Cloudinary'],
    category: 'Web Design',
    link: '#'
  }
];

export const SKILLS: Skill[] = [
  { name: 'React / Next.js', level: 95, category: 'Frontend' },
  { name: 'TypeScript', level: 90, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 98, category: 'Frontend' },
  { name: 'Node.js / Express', level: 85, category: 'Backend' },
  { name: 'PostgreSQL / MongoDB', level: 80, category: 'Backend' },
  { name: 'UI/UX Design', level: 75, category: 'Design' },
];

export const SERVICES: Service[] = [
  {
    title: 'Web Development',
    description: 'Building fast, responsive, and scalable web applications using modern technologies.',
    icon: 'Code2'
  },
  {
    title: 'UI/UX Design',
    description: 'Creating intuitive and beautiful user interfaces that provide exceptional experiences.',
    icon: 'Palette'
  },
  {
    title: 'Mobile Solutions',
    description: 'Developing mobile-friendly web apps and cross-platform mobile experiences.',
    icon: 'Smartphone'
  },
  {
    title: 'SEO Optimization',
    description: 'Improving your website visibility on search engines to drive organic traffic.',
    icon: 'Search'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'John Doe',
    role: 'CEO at TechFlow',
    content: 'Salman is an exceptional developer. He delivered our project ahead of schedule and the quality was top-notch.',
    avatar: 'https://i.pravatar.cc/150?u=john'
  },
  {
    name: 'Sarah Smith',
    role: 'Marketing Director',
    content: 'The attention to detail in the UI design was amazing. Our conversion rates increased by 40% after the redesign.',
    avatar: 'https://i.pravatar.cc/150?u=sarah'
  }
];
