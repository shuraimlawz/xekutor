export const formEndpoint = "https://formspree.io/f/xbdadpqn"; // Get this from https://formspree.io/

export const socialLinks = {
    github: "https://github.com/shuraimlawz",
    linkedin: "www.linkedin.com/in/shuraim-issaka-091392360",
    facebook: "https://www.facebook.com/shuraim.issaka",
    instagram: "https://www.instagram.com/1_shuraimi?igsh=anRhMzZxNjV0MXJI",
    x: "https://x.com/1_shuraimi",
    email: "mailto:issakashuraim@gmail.com"
};



export const aboutData = {
    name: "Shuraim Issaka",
    title: "Full Stack Developer",
    nicknames: "Xekutor / Lawz",
    description: [
        "I am a passionate Full Stack Developer with a knack for building beautiful, functional, and scalable web applications.",
        "With a strong foundation in both front-end and back-end technologies, I enjoy turning complex problems into simple, beautiful, and intuitive designs.",
        "When I'm not coding, you can find me exploring new technologies, contributing to open source, or enjoying a good cup of coffee."
    ],
    resumeUrl: "#", // Update this with your actual resume URL (e.g. from Google Drive or local file in public/ folder)
    profileImages: [
        "/1.jpg", "/2.jpg", "/3.jpg", "/5.jpg",
        // TO UPDATE PROFILE PIC:
        // 1. Add your photo to the "public" folder (e.g., public/me.jpg)
        // 2. Change "default-avatar" above to "/me.jpg"
        // 3. Add more strings to this array for a slider: ["/me1.jpg", "/me2.jpg"]
    ]
};

export const projectsData = [
    // TO ADD PROJECT SCREENSHOTS:
    // 1. Place your image in the "public" folder (e.g., public/hostel.jpg)
    // 2. Set the "image" field to the path (e.g., "/hostel.jpg")
    // 3. If no image, you can use the gradient placeholders: 'project-1', 'project-2', etc.
    {
        id: 0,
        title: 'HostelGH',
        description: 'A fully functional hostel booking platform for students in Ghana.',
        tags: ['React', 'Node.js', 'MySQL', 'TypeScript', 'Tailwind'],
        image: 'project-1',
        liveUrl: '#',
        codeUrl: '#'
    },

    {
        id: 1,
        title: 'E-Commerce Platform',
        description: 'A fully functional online store with cart, checkout, and payment integration.',
        tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        image: 'project-2',
        liveUrl: '#',
        codeUrl: '#'
    },
    {
        id: 2,
        title: 'Task Management App',
        description: 'A collaborative task manager with real-time updates and team features.',
        tags: ['Next.js', 'Firebase', 'Tailwind'],
        image: 'project-3',
        liveUrl: '#',
        codeUrl: '#'
    },
    {
        id: 3,
        title: 'Weather Dashboard',
        description: 'Global weather tracking app with detailed forecasts and interactive maps.',
        tags: ['JavaScript', 'API', 'CSS3'],
        image: 'project-4',
        liveUrl: '#',
        codeUrl: '#'
    }
];
