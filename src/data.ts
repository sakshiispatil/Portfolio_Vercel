/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { NavLink, AboutCard, ServiceCard, FeatureCard, ProcessStep, ProjectItem, TestimonialItem } from "./types";

export const PERSONAL_DETAILS = {
  firstName: "Sakshi",
  lastName: "Patil",
  fullName: "Sakshi",
  logoText: "Sakshi",
  tagline: "Web Developer | Problem Solver | Tech Enthusiast",
  heroSubtitle: "Hello, I'm",
  heroDescription: "I have previous experience in IT-Tech Domain, have worked in corporate sector and live projects with strong academic knowledge. I build modern, secure, fast and responsive websites that help businesses grow online.",
  linkedinUrl: "https://www.linkedin.com/in/sakshi-patil-9a3823245",
  githubUrl: "https://github.com/sakshipatil-developer", // Standard fallback GitHub derived from name
  email: "sakshi.sp613@gmail.com",
  phone: "+91 9172123838",
  whatsappUrl: "https://wa.me/919172123838",
  profileImagePath: "/src/assets/images/Sakshi_Profile.jpeg",
};

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Features", href: "#features" },
  { label: "Contact", href: "#contact" },
];

export const ABOUT_CARDS: AboutCard[] = [
  {
    id: "exp",
    title: "Experience",
    iconName: "Briefcase",
    description: "IT-Tech Professional with corporate and live project experience.",
  },
  {
    id: "edu",
    title: "Education",
    iconName: "GraduationCap",
    description: "BE Graduate with strong academic knowledge in the IT Domain.",
  },
  {
    id: "skills",
    title: "Skills",
    iconName: "Code2",
    description: "Node.js, HTML, CSS, JavaScript, DBMS, Bootstrap, Responsive Design, Git, GitHub.",
  },
  {
    id: "passion",
    title: "Passion",
    iconName: "Heart",
    description: "Building secure, fast and user-friendly websites.",
  },
];

export const SERVICE_CARDS: ServiceCard[] = [
  {
    id: "static",
    title: "Static Website Building",
    description: "Clean, responsive and fast static websites using modern technologies.",
    iconName: "Monitor",
  },
  {
    id: "dynamic",
    title: "Dynamic Website Building",
    description: "Full-stack dynamic websites with database integration and scalable architecture.",
    iconName: "FileCode",
  },
  {
    id: "hosting",
    title: "Hosting & Deployment",
    description: "Domain setup, hosting, deployment, SSL configuration and ongoing maintenance.",
    iconName: "CloudLightning",
  },
];

export const FEATURE_CARDS: FeatureCard[] = [
  {
    id: "seo",
    title: "SEO Optimized Websites",
    description: "Build websites following modern SEO best practices for improved visibility and ranking.",
    iconName: "TrendingUp",
  },
  {
    id: "ssl",
    title: "SSL Security & Secure Development",
    description: "Implement SSL certificates, HTTPS configuration and secure coding standards.",
    iconName: "ShieldCheck",
  },
  {
    id: "domain",
    title: "Domain Hosting & Deployment",
    description: "Complete deployment setup including domain connection and hosting configuration.",
    iconName: "Globe",
  },
  {
    id: "perf",
    title: "Optimized Performance",
    description: "Fast-loading websites with optimized assets and excellent responsiveness.",
    iconName: "Cpu",
  },
  {
    id: "anim",
    title: "Modern Animations & User Experience",
    description: "Interactive animations, smooth transitions and engaging user experiences using Framer Motion.",
    iconName: "Sparkles",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: 1,
    title: "Understand Requirements",
    description: "Understanding your requirements in detail to frame the perfect solution.",
    iconName: "Lightbulb",
  },
  {
    stepNumber: 2,
    title: "Plan Strategy",
    description: "Planning and outlining the technical layout and roadmap for execution.",
    iconName: "FileText",
  },
  {
    stepNumber: 3,
    title: "Develop Solution",
    description: "Coding your website with clean, secure, responsive, and reusable standards.",
    iconName: "Terminal",
  },
  {
    stepNumber: 4,
    title: "Deploy Website",
    description: "Thorough testing before server setup, domain linkage, and secure SSL deployment.",
    iconName: "Rocket",
  },
  {
    stepNumber: 5,
    title: "Support & Maintenance",
    description: "Ongoing updates, patches, performance audits, and absolute uptime monitoring.",
    iconName: "LifeBuoy",
  },
];

// Production-ready portfolio projects showcasing web development credentials
export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "proj1",
    title: "Corporate HR & Payroll ERP",
    category: "Dynamic Web App",
    description: "A secure corporate staff portal dealing with database interaction, leave schedules, and dynamic report generation built with Node.js and modern DBMS assets.",
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
    tags: ["Node.js", "Express", "DBMS", "Bootstrap", "Responsive Design"],
  },
  {
    id: "proj2",
    title: "Secure Business Gateway Profile",
    category: "Corporate Site",
    description: "High-performance, beautifully animated single-page product pipeline with localized SEO optimizations, custom contact handling, and SSL enforcement.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
    tags: ["HTML", "Tailwind CSS", "Framer Motion", "SEO Optimization"],
  },
  {
    id: "proj3",
    title: "Academic Portal & Resource Hub",
    category: "Full-Stack Web App",
    description: "A digital syllabus archive and live questionnaire database supporting real-time index searches and highly protected files upload storage.",
    imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80",
    tags: ["Node.js", "JavaScript", "SQL", "Git", "Deployments"],
  },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "test1",
    name: "Rajesh Kumar",
    role: "Managing Director",
    company: "Vivid IT Solutions",
    content: "Sakshi is exceptional. She delivered our dynamic corporate website ahead of schedule. Her attention to secure code, SSL setup, and optimal loading speed helped us acquire 40% more online queries within a month.",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
  },
  {
    id: "test2",
    name: "Emma Watson",
    role: "Product Owner",
    company: "EduTech Systems",
    content: "I recommend Sakshi for web projects. She has solid academic IT credentials and knows exactly how to configure hosting and databases. The custom responsive layouts look fantastic across both desktop and mobile devices.",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
  },
];
