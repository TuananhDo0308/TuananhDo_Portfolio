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
    image: "/TuananhDo_Portfolio/images/Beacon.png",
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
    image: "/TuananhDo_Portfolio/images/Viqium.png",
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
    image: "/TuananhDo_Portfolio/images/Sky.png",
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
    image: "/TuananhDo_Portfolio/images/Nutri.png",
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
    id: 6,
    type: "UNIVERSITY PROJECT",
    title: "Flowlite - Task Management System",
    description: "Modern Task Management Platform for Teams",
    image: "/TuananhDo_Portfolio/images/Flowlite.png",
    category: "Full-Stack Development",
    year: "2024",
    client: "HCMC University of Education",
    role: "Frontend Developer",
    challenge:
      "Teams needed an intuitive task management platform that combined project organization, team collaboration, and progress tracking. The system required real-time updates, drag-and-drop functionality, and comprehensive analytics while maintaining a clean, responsive interface.",
    solution:
      "Built a modern web application using Next.js 16 and React 19 with TypeScript. Implemented Redux Toolkit for state management with redux-persist for data persistence. Created a Kanban board with drag-and-drop functionality using React DnD, integrated ApexCharts for analytics visualization, and designed a responsive UI with Tailwind CSS v4 and Framer Motion animations.",
    result:
      "Successfully delivered a full-featured task management system with Kanban boards, list views, real-time task updates, team collaboration features, and visual analytics dashboards. The application supports multiple projects, role-based access, commenting system, and dark/light mode themes. Built as part of Advanced Software Engineering course with a team of 5 developers.",
    images: [
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=600&fit=crop",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=600&fit=crop",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
    ],
    tags: ["Next.js", "React 19", "TypeScript", "Redux Toolkit", "Tailwind CSS", "Framer Motion", "React DnD"],
    githubUrl: "https://github.com/tquocan04/mini-management-project",
  },
  {
    id: 5,
    type: "CASE STUDY",
    title: "Real-Time Meeting Platform",
    description: "Video Conferencing & Chat Application",
    image: "/TuananhDo_Portfolio/images/Video.png",
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
 
  {
    id: 7,
    type: "CASE STUDY",
    title: "Water Bottle E-commerce Platform",
    description: "E-commerce Website with AI Recommendations",
    image: "/TuananhDo_Portfolio/images/Arc.png",
    category: "Web Development",
    year: "2024",
    client: "Arc Coffee",
    role: "Frontend Developer",
    challenge:
      "E-commerce businesses needed a modern platform with personalized product recommendations. The system required a user-facing store, admin dashboard for product management, secure checkout, and AI-driven recommendations to enhance shopping experience.",
    solution:
      "Developed frontend using Next.js with dynamic UI powered by Framer Motion animations. Implemented user-friendly cart and checkout system with Google sign-in via NextAuth. Integrated Gemini API for AI-powered personalized product recommendations. Created admin dashboard with Apexcharts for revenue analytics and product management.",
    result:
      "Successfully launched an e-commerce platform with seamless shopping experience, secure authentication, AI-driven product suggestions, and comprehensive admin tools for inventory and revenue management. The platform features responsive design and smooth animations throughout.",
    images: [
      "https://images.unsplash.com/photo-1523294587484-bae6cc870010?w=1200&h=600&fit=crop",
      "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=1200&h=600&fit=crop",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&h=600&fit=crop",
    ],
    tags: ["Next.js", "Framer Motion", "Tailwind CSS", "NextAuth", "Gemini API", "Redux Toolkit"],
    githubUrl: "https://github.com/TuananhDo0308/arccoffee",
  },
  {
    id: 9,
    type: "CASE STUDY",
    title: "Coffee Management System",
    description: "Desktop Application for Coffee Shop Operations",
    image: "/TuananhDo_Portfolio/images/Coffee.png",
    category: "Desktop Development",
    year: "2024",
    client: "Coffee Shop",
    role: "Full-Stack Developer",
    challenge:
      "Coffee shops needed an efficient management system to handle different operational roles including admin revenue tracking, employee order processing, and barista order viewing. The system required role-based access control and real-time data analytics.",
    solution:
      "Developed a full-stack desktop application using .NET Core and WPF. Created separate interfaces tailored for admin (revenue and employee management with chart analytics), employees (order processing), and baristas (order viewing). Integrated MS SQL Server for efficient data storage, retrieval, and chart-based analytics visualization.",
    result:
      "Successfully delivered a comprehensive coffee shop management system with role-specific interfaces, real-time order tracking, revenue analytics with visual charts, and employee management capabilities. The system streamlined operations across different user roles.",
    images: [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&h=600&fit=crop",
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1200&h=600&fit=crop",
      "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1200&h=600&fit=crop",
    ],
    tags: [".NET Core", "WPF", "MS SQL Server", "Desktop App"],
    githubUrl: "https://github.com/TuananhDo0308/CoffeeShop-Management-WPF",
  },
  {
    id: 10,
    type: "CASE STUDY",
    title: "Algorithm Visualization Tool",
    description: "Interactive Graph Algorithm Visualizer",
    image: "/TuananhDo_Portfolio/images/Graph.png",
    category: "Web Development & Education",
    year: "2024",
    client: "Educational Tool",
    role: "Frontend Developer",
    challenge:
      "Students learning graph algorithms struggle to understand complex concepts like Prim's and Ford-Bellman algorithms. The challenge was to create an intuitive tool that visualizes these algorithms step-by-step with interactive graph creation and manipulation.",
    solution:
      "Developed a web-based visualization tool using HTML/CSS, JavaScript, and D3.js library for interactive graph rendering. Implemented features for creating directed and undirected graphs with drag-and-drop nodes, step-by-step algorithm visualization, and graph import/export as text files for enhanced usability.",
    result:
      "Successfully created an educational tool that helps students understand graph algorithms through interactive visualization. The tool supports custom graph creation, real-time algorithm execution with step-by-step breakdown, and data persistence through file import/export.",
    images: [
      "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=1200&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop",
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=600&fit=crop",
    ],
    tags: ["JavaScript", "D3.js", "HTML/CSS", "Algorithm Visualization"],
    liveUrl: "https://graph-umber.vercel.app",
    githubUrl: "https://github.com/TuananhDo0308/GRAPH",
  },
  {
    id: 11,
    type: "GAME DEVELOPMENT",
    title: "2D Top-down Car Racing Game",
    description: "Unity-based Racing Game with Time Challenges",
    image: "/TuananhDo_Portfolio/images/Race.png",
    category: "Game Development",
    year: "2024",
    client: "Personal Project",
    role: "Game Developer",
    challenge:
      "Create an engaging 2D racing game with increasing difficulty levels that keeps players motivated to improve their performance. The game needed smooth car controls, diverse track designs, and a competitive element through time-based challenges.",
    solution:
      "Developed a complete 2D top-down racing game using Unity and C#. Designed 6 levels with increasing difficulty featuring diverse track layouts. Implemented smooth car physics and controls for responsive gameplay. Created a time-based challenge system with record-saving functionality to encourage replayability and competition.",
    result:
      "Successfully created an engaging racing game with intuitive controls, progressively challenging levels, and a competitive record-keeping system. Players can track their best times and continuously improve their performance across all levels.",
    images: [
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&h=600&fit=crop",
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&h=600&fit=crop",
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=1200&h=600&fit=crop",
    ],
    tags: ["Unity", "C#", "Game Development", "2D Game"],
    githubUrl: "https://github.com/TuananhDo0308/Car-Game-Unity",
  }
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