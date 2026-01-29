export interface ProjectDetail {
  id: number;
  type: string;
  title: string;
  description: string;
  image: string;
  category: string;
  year: string;
  client?: string;
  role: string;
  challenge: string;
  solution: string;
  result: string;
  images: string[];
  tags: string[];
  nextProject?: number;
  prevProject?: number;
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: ProjectDetail[] = [
  {
    id: 1,
    type: "INTERNSHIP",
    title: "Event Management App [Bosch Global]",
    description: "Web Application with CMS & Chatbot Integration",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&h=500&fit=crop",
    category: "UX/UI Design & Development",
    year: "2025",
    client: "Bosch Global Software Vietnam",
    role: "Frontend Developer",
    challenge:
      "Bosch needed a comprehensive web application to manage events and news with an integrated chatbot for enhanced user interaction. The system required a CMS for administrators and a responsive user-facing website, all aligned with Bosch's strict design standards.",
    solution:
      "Decided on an optimal tech stack and designed a user interface following Bosch's design guidelines. Built a responsive web application using React and Tailwind CSS, implemented SSO authentication via Azure, and integrated chatbot functionality. Worked in an Agile environment using Jira for project management.",
    result:
      "Successfully delivered a fully functional event management system with seamless SSO integration, responsive design across all devices, and enhanced user engagement through chatbot features. Currently in production at Bosch Global Software Vietnam.",
    images: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=600&fit=crop",
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=600&fit=crop",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
    ],
    tags: ["React", "Tailwind CSS", "Azure SSO", "Agile", "Chatbot Integration"],
  },
  {
    id: 2,
    type: "PRODUCTION",
    title: "Viqium AI",
    description: "AI Chatbot Platform for E-commerce",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=500&h=500&fit=crop",
    category: "Web Development",
    year: "2024",
    client: "Viqium AI",
    role: "Frontend Developer",
    challenge:
      "E-commerce sellers needed an automated solution to handle customer inquiries, product recommendations, and order tracking across multiple platforms (websites, TikTok, Facebook). The challenge was creating a unified chatbot system that could seamlessly integrate into third-party websites.",
    solution:
      "Designed user-friendly interfaces in Figma optimized for sales automation. Developed the frontend from scratch using Next.js and Tailwind CSS with full responsiveness. Created a custom JavaScript embed code allowing easy chatbot integration into any third-party website.",
    result:
      "Successfully launched production platform at viqium.com. Enabled sellers to automate sales processes, reduce response time, and integrate chatbots across multiple channels. The embed code solution made integration seamless for non-technical users.",
    images: [
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=1200&h=600&fit=crop",
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=600&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop",
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "NextAuth", "Redux Toolkit"],
    liveUrl: "https://viqium.com",
  },
  {
    id: 3,
    type: "PRODUCTION",
    title: "Skye Education",
    description: "Tutor-Student Booking Platform",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=500&h=500&fit=crop",
    category: "Web Development",
    year: "2024",
    client: "Skye Education",
    role: "Frontend Developer",
    challenge:
      "Educational institutions needed a modern platform to connect tutors and students efficiently. The system required secure authentication, engaging animations, and automated CI/CD pipelines for reliable deployment.",
    solution:
      "Designed engaging UI in Figma and developed frontend with Next.js and Framer Motion for smooth animations. Implemented secure Google sign-in with NextAuth.js and state management with Redux Toolkit. Set up GitHub Actions for CI/CD, tested with SonarQube, and deployed using Docker containers on AWS ECS.",
    result:
      "Launched production platform at skyeeducation.com with seamless tutor-student booking functionality. Achieved automated deployment pipeline, ensuring code quality and reducing deployment time. Platform successfully connects educators and students with enhanced user experience.",
    images: [
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&h=600&fit=crop",
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=600&fit=crop",
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&h=600&fit=crop",
    ],
    tags: ["Next.js", "Framer Motion", "AWS", "Docker", "CI/CD", "NextAuth"],
    liveUrl: "https://skyeeducation.com",
  },
  {
    id: 4,
    type: "RESEARCH",
    title: "Smart Nutrition Management",
    description: "AI-Powered Food Analysis Mobile App",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=500&h=500&fit=crop",
    category: "Mobile Development & AI",
    year: "2024",
    client: "HCMC University of Education",
    role: "Frontend & AI Developer",
    challenge:
      "Users struggle to accurately track nutritional intake from meals. Existing solutions require manual input, which is time-consuming and prone to errors. The challenge was to develop an AI system that could analyze food images and automatically calculate nutritional content.",
    solution:
      "Developed a React Native mobile app with AI integration to analyze food images. Researched and implemented methods to estimate object mass from 2D images for accurate nutritional analysis. Created visualized charts to display nutritional data in an accessible format.",
    result:
      "Successfully published research in the Asian Journal of Research in Computer Science (DOI: 10.9734/ajrcos/2025/v18i5650). Won 2nd Prize at Faculty Level, Encouragement Prize at University Level, and 3rd Prize at Ministry Level Scientific Research Competition. Created a functional app that automates nutritional tracking.",
    images: [
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&h=600&fit=crop",
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=1200&h=600&fit=crop",
      "https://images.unsplash.com/photo-1547592180-85f173990554?w=1200&h=600&fit=crop",
    ],
    tags: ["React Native", "AI/ML", "Python", "Redux", "Computer Vision"],
    githubUrl: "https://github.com/TuananhDo0308/nutrition-app-mobile",
  },
  {
    id: 5,
    type: "CASE STUDY",
    title: "Real-Time Meeting Platform",
    description: "Video Conferencing & Chat Application",
    image: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=500&h=500&fit=crop",
    category: "Full-Stack Development",
    year: "2024",
    client: "Personal Project",
    role: "Full-Stack Developer",
    challenge:
      "Virtual collaboration tools needed better real-time communication with low latency. Existing solutions were either too complex or lacked essential features like simultaneous video calls and chat. Security and performance were critical requirements.",
    solution:
      "Developed full-stack application using Next.js frontend and Java Spring Boot backend. Implemented WebSocket connections with StompJS for real-time chat and PeerJS for peer-to-peer video calls. Designed responsive UI with Tailwind CSS and integrated Spring Security for authentication.",
    result:
      "Created a functional real-time meeting platform with low-latency video calls and chat functionality. Achieved secure authentication and robust performance through Spring Boot backend. Demonstrated full-stack development capabilities with modern technologies.",
    images: [
      "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=1200&h=600&fit=crop",
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=1200&h=600&fit=crop",
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1200&h=600&fit=crop",
    ],
    tags: ["Next.js", "Spring Boot", "WebSocket", "PeerJS", "Real-time"],
    githubUrl: "https://github.com/TuananhDo0308/videoCall",
  },
];

export function getProjectById(id: number): ProjectDetail | undefined {
  return projects.find((project) => project.id === id);
}

export function getAllProjectIds(): number[] {
  return projects.map((project) => project.id);
}

export function getProjectsByType(type: string): ProjectDetail[] {
  return projects.filter((project) => project.type === type);
}

export function getFeaturedProjects(): ProjectDetail[] {
  // Return production and internship projects as featured
  return projects.filter((project) => 
    project.type === "PRODUCTION" || project.type === "INTERNSHIP"
  );
}