export const formEndpoint = "https://formspree.io/f/xbdadpqn";

export const socialLinks = {
    github: "https://github.com/shuraimlawz",
    linkedin: "https://www.linkedin.com/in/shuraim-issaka-091392360",
    facebook: "https://www.facebook.com/shuraim.issaka",
    instagram: "https://www.instagram.com/1_shuraimi?igsh=anRhMzZxNjV0MXJI",
    x: "https://x.com/1_shuraimi",
    email: "mailto:issakashuraim@gmail.com"
};

export const heroData = {
    greeting: "Hi, I'm",
    name: "Shuraim Issaka",
    aliases: ["Xekutor", "Lawz"],
    roles: ["Software Engineer", "Full Stack Developer", "AI Enthusiast", "Cybersecurity Enthusiast", "IT Support Enthusiast", "Computer Science Student @ Ghana Communication Technology University (GCTU)"],
    tagline: "Founder & Chief Executive Officer (CEO) of Minded Technologies and HostelGH",
    location: "Accra, Ghana",
    available: true,
};

export const statsData = [
    { value: "4+", label: "Years Coding" },
    { value: "15+", label: "Projects Built" },
    { value: "10+", label: "Technologies" },
    { value: "100%", label: "Passion" },
];

export const aboutData = {
    name: "Shuraim Issaka",
    title: "Full Stack Developer",
    nicknames: "Xekutor / Lawz",
    description: [
        "I'm a passionate Full Stack Developer with a knack for building beautiful, functional, and scalable web applications.",
        "With a strong foundation in both front-end and back-end technologies, I enjoy turning complex problems into simple, intuitive designs that users love.",
        "When I'm not coding, you'll find me exploring new tech, contributing to open source, or enjoying a good cup of coffee."
    ],
    resumeUrl: "#",
    profileImages: ["/image_3e07a984.jpg"],
};

export const skillsData = [
    {
        category: "Frontend",
        skills: [
            { name: "React", level: 90, image: "/skills/react.svg" },
            { name: "TypeScript", level: 85, image: "/skills/typescript.svg" },
            { name: "Next.js", level: 80, image: "/skills/nextjs.svg" },
            { name: "Tailwind CSS", level: 88, image: "/skills/tailwind.svg" },
            { name: "HTML/CSS", level: 95, image: "/skills/html-css.svg" },
        ],
    },
    {
        category: "Backend",
        skills: [
            { name: "Node.js", level: 88, image: "/skills/nodejs.svg" },
            { name: "Python", level: 75, image: "/skills/python.svg" },
            { name: "Express", level: 85, image: "/skills/express.svg" },
            { name: "REST APIs", level: 90, image: "/skills/rest-api.svg" },
            { name: "GraphQL", level: 70, image: "/skills/graphql.svg" },
        ],
    },
    {
        category: "Database & DevOps",
        skills: [
            { name: "PostgreSQL", level: 82, image: "/skills/postgresql.svg" },
            { name: "MySQL", level: 85, image: "/skills/mysql.svg" },
            { name: "MongoDB", level: 78, image: "/skills/mongodb.svg" },
            { name: "Docker", level: 72, image: "/skills/docker.svg" },
            { name: "AWS", level: 68, image: "/skills/aws.svg" },
        ],
    },
    {
        category: "Tools",
        skills: [
            { name: "Git", level: 92, image: "/skills/git.svg" },
            { name: "Figma", level: 75, image: "/skills/figma.svg" },
            { name: "VS Code", level: 95, image: "/skills/vscode.svg" },
            { name: "Linux", level: 80, image: "/skills/linux.svg" },
            { name: "CI/CD", level: 70, image: "/skills/cicd.svg" },
        ],
    },
];

export const experienceData = [
    {
        id: 1,
        role: "Full Stack Developer",
        company: "Freelance",
        period: "2023 — Present",
        description: "Building custom web applications for clients across Ghana and internationally — from booking platforms to e-commerce stores.",
        details: [
            "Collaborate with clients to refine requirements and deliver intuitive product experiences.",
            "Build responsive UIs and RESTful APIs using React, Node.js, and TypeScript.",
            "Design scalable MySQL schemas and optimize backend performance for production use."
        ],
        tags: ["React", "Node.js", "TypeScript", "MySQL"],
    },
    {
        id: 2,
        role: "Frontend Developer",
        company: "Personal Projects",
        period: "2021 — 2023",
        description: "Developed multiple full-stack side projects, honing skills in React, API design, and responsive UI development.",
        details: [
            "Built interactive interfaces with React and Tailwind CSS for a polished user experience.",
            "Integrated Firebase and third-party APIs to add real-time features and authentication.",
            "Iterated rapidly with user testing to improve usability and accessibility."
        ],
        tags: ["React", "Firebase", "Tailwind"],
    },
    {
        id: 3,
        role: "Computer Science Student",
        company: "University",
        period: "2020 — 2024",
        description: "Studied software engineering fundamentals, data structures, algorithms, and web development.",
        details: [
            "Completed coursework in algorithms, operating systems, and software design patterns.",
            "Worked on group projects to practice version control, testing, and collaborative development.",
            "Explored cybersecurity concepts and system architecture as part of academic studies."
        ],
        tags: ["Java", "Python", "SQL"],
    },
];

export const projectsData = [
    {
        id: 0,
        title: "HostelGH",
        description: "A fully functional hostel booking platform for students in Ghana with search, filters, and secure booking flow.",
        tags: ["React", "Node.js", "MySQL", "TypeScript", "Tailwind"],
        image: "/projects/hostelgh.svg",
        liveUrl: "#",
        codeUrl: "#",
        featured: true,
    },
    {
        id: 1,
        title: "E-Commerce Platform",
        description: "A fully functional online store with cart, checkout, and payment integration.",
        tags: ["React", "Node.js", "MongoDB", "Stripe"],
        image: "/projects/ecommerce.svg",
        liveUrl: "#",
        codeUrl: "#",
        featured: true,
    },
    {
        id: 2,
        title: "Task Management App",
        description: "A collaborative task manager with real-time updates and team features.",
        tags: ["Next.js", "Firebase", "Tailwind"],
        image: "/projects/task-app.svg",
        liveUrl: "#",
        codeUrl: "#",
        featured: true,
    },
    {
        id: 3,
        title: "Weather Dashboard",
        description: "Global weather tracking app with detailed forecasts and interactive maps.",
        tags: ["JavaScript", "API", "CSS3"],
        image: "/projects/weather.svg",
        liveUrl: "#",
        codeUrl: "#",
        featured: false,
    },
];

export const blogData = [
    {
        id: 1,
        title: "Building HostelGH: Lessons from a Real Booking Platform",
        excerpt: "How I designed and shipped a hostel booking app for Ghanaian students — from database schema to payment flows.",
        image: "/blog/hostelgh-card.jpg",
        url: "#",
        date: "Jun 12, 2025",
        readTime: "6 min read",
        category: "Case Study",
        tags: ["React", "Node.js", "MySQL"],
        content: "HostelGH started as a simple idea: make finding student accommodation in Ghana less stressful. I began with user interviews, mapped the booking journey, and designed a schema that handled listings, availability, and reservations without overcomplicating the MVP.\n\nThe frontend uses React with TypeScript for type safety across forms and API responses. Tailwind CSS helped me ship a clean, mobile-first UI quickly. On the backend, Express handles REST endpoints with MySQL for relational data — perfect for bookings with strict consistency requirements.\n\nThe biggest lesson? Start with the core flow (search → view → book) and iterate. Everything else — reviews, favorites, admin dashboards — came after launch.",
    },
    {
        id: 2,
        title: "Why I Switched to TypeScript for Side Projects",
        excerpt: "TypeScript caught bugs before runtime and made refactoring fearless. Here's what changed in my workflow.",
        image: "/blog/typescript-card.jpg",
        url: "#",
        date: "May 3, 2025",
        readTime: "4 min read",
        category: "Development",
        tags: ["TypeScript", "React"],
        content: "I used to reach for plain JavaScript on side projects because setup felt faster. TypeScript changed that once I embraced strict mode and shared types between frontend and API layers.\n\nThe immediate win was fewer undefined errors in production. Autocomplete across components and hooks made me move faster, not slower. For portfolio projects like HostelGH, typing API responses meant the UI always matched what the server returned.\n\nMy advice: enable strict mode from day one, define interfaces for your data models early, and don't fight the compiler — it's usually right.",
    },
    {
        id: 3,
        title: "Deploying Full-Stack Apps on a Budget",
        excerpt: "Free tiers, Docker basics, and a simple CI/CD pipeline that works for solo developers.",
        image: "/blog/deploying-card.jpg",
        url: "#",
        date: "Mar 18, 2025",
        readTime: "5 min read",
        category: "DevOps",
        tags: ["Docker", "AWS", "CI/CD"],
        content: "You don't need expensive infrastructure to ship real projects. I run most side apps with a frontend on Vercel or Netlify, a Node API on Railway or Render, and managed PostgreSQL or MySQL where needed.\n\nDocker helps keep environments consistent — what works locally works in production. A basic GitHub Actions workflow (lint → test → build → deploy) catches issues before users do.\n\nStart simple: one service, one database, one deployment target. Scale when you have users, not before.",
    },
    {
        id: 4,
        title: "Improving App Performance with Modern Web Practices",
        excerpt: "A practical guide to optimizing load times, reducing bundle size, and delivering smoother user experiences.",
        image: "/blog/performance-card.jpg",
        url: "#",
        date: "Jul 22, 2025",
        readTime: "5 min read",
        category: "Performance",
        tags: ["Web Performance", "React", "Optimization"],
        content: "Performance is not a one-time fix — it's part of every feature decision. I focus on lazy loading, code splitting, and efficient data fetching to make apps feel faster on slower networks.\n\nFor React projects, I use memoization, selective re-rendering, and static generation where possible. For CSS and assets, I prioritize critical styles and compress images to reduce payload size.\n\nThe result is a smoother experience for users, especially on mobile. When performance is built in from the beginning, it becomes a competitive advantage, not an afterthought."
    },
];

export const navLinks = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "blog", label: "Blog" },
    { id: "contact", label: "Contact" },
];
