export interface ProjectDetail {
  id: number;
  slug: string;
  type: string;
  title: string;
  link?: {
    type: string;
    url: string;
  };
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
  nextProject?: string;
  prevProject?: string;
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: ProjectDetail[] = [
  {
    id: 1,
    slug: "event-management-app-bosch-global",
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
      "https://res.cloudinary.com/dbwocyqha/image/upload/v1779815598/image_1_hvnf1c.png",
      "https://res.cloudinary.com/dbwocyqha/image/upload/v1779815598/image_3_rf8xgd.png",
      "https://res.cloudinary.com/dbwocyqha/image/upload/v1779815599/image_20_hd6wa5.png",
      "https://res.cloudinary.com/dbwocyqha/image/upload/v1779815599/image_10_gjjfw1.png ",

    ],
    tags: ["React", "Tailwind CSS", "Azure SSO", "Agile", "Chatbot Integration"],
  },
  {
    id: 2,
    slug: "viqium-ai",
    type: "PRODUCTION",
    title: "Viqium AI",
    link: {
      type: "Product",
      url: "https://viqiumproduction.vercel.app/",
    },
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
      "https://res.cloudinary.com/dbwocyqha/image/upload/v1779869307/Screenshot_2026-05-27_at_15.05.44_ry0ojo.png",
      "https://res.cloudinary.com/dbwocyqha/image/upload/v1779869418/Product_1_i5v0c2.webp",
      "https://res.cloudinary.com/dbwocyqha/image/upload/v1779869418/Voucher_1_pdciv2.webp",
      "https://res.cloudinary.com/dbwocyqha/image/upload/v1779869417/Product_3_pl79cz.webp",
      "https://res.cloudinary.com/dbwocyqha/image/upload/v1779869418/Information_from_Viqium_Production_bwcy6g.webp",
      "https://res.cloudinary.com/dbwocyqha/image/upload/v1779869417/AI_Image_zxvpzj.webp",
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "NextAuth", "Redux Toolkit"],
    liveUrl: "https://viqium.com",
  },
  {
    id: 3,
    slug: "skye-education",
    type: "PRODUCTION",
    title: "Skye Education",
    description: "Tutor-Student Booking Platform",
    image: "/TuananhDo_Portfolio/images/Sky.png",
    category: "Web Development",
    year: "2024",
    client: "Skye Education",
    role: "Frontend Developer",
    link: {
      type: "Product",
      url: "https://skyeeducation.com",
    },
    challenge:
      "Educational institutions needed a modern platform to connect tutors and students efficiently. The system required secure authentication, engaging animations, and automated CI/CD pipelines for reliable deployment.",
    solution:
      "Designed engaging UI in Figma and developed frontend with Next.js and Framer Motion for smooth animations. Implemented secure Google sign-in with NextAuth.js and state management with Redux Toolkit. Set up GitHub Actions for CI/CD, tested with SonarQube, and deployed using Docker containers on AWS ECS.",
    result:
      "Launched production platform at skyeeducation.com with seamless tutor-student booking functionality. Achieved automated deployment pipeline, ensuring code quality and reducing deployment time. Platform successfully connects educators and students with enhanced user experience.",
    images: [
      "https://res.cloudinary.com/dbwocyqha/image/upload/v1779816079/Screenshot_2026-05-27_at_00.19.55_owbxcx.png",
      "https://res.cloudinary.com/dbwocyqha/image/upload/v1779816085/Screenshot_2026-05-27_at_00.20.32_dxxbd6.png",
    ],
    tags: ["Next.js", "Framer Motion", "AWS", "Docker", "CI/CD", "NextAuth"],
    liveUrl: "https://skyeeducation.com",
  },
  {
    id: 4,
    slug: "smart-nutrition-management",
    type: "RESEARCH",
    title: "Smart Nutrition Management",
    description: "AI-Powered Food Analysis Mobile App",
    link: {
      type: "GitHub",
      url: "https://github.com/TuananhDo0308/nutrition-app-mobile.git",
    },
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
      "https://res.cloudinary.com/dbwocyqha/image/upload/v1779816839/Frame_3_from_Figma_fxmlcc.png",
      "https://res.cloudinary.com/dbwocyqha/image/upload/v1779816839/Frame_2_from_Figma_ndtfzq.png",
    ],
    tags: ["React Native", "AI/ML", "Python", "Redux", "Computer Vision"],
    githubUrl: "https://github.com/TuananhDo0308/nutrition-app-mobile",
  },
   {
    id: 6,
    slug: "flowlite-task-management-system",
    type: "UNIVERSITY PROJECT",
    title: "Flowlite - Task Management System",
    description: "Modern Task Management Platform for Teams",
    image: "/TuananhDo_Portfolio/images/Flowlite.png",
    link: {
      type: "GitHub",
      url: "https://github.com/tquocan04/mini-management-project.git",
    },
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
      "https://res.cloudinary.com/dbwocyqha/image/upload/v1779817140/Screenshot_2026-05-27_at_00.37.55_rzk3km.png",
      "https://res.cloudinary.com/dbwocyqha/image/upload/v1779817140/Screenshot_2026-05-27_at_00.37.51_htl7ip.png",
      "https://res.cloudinary.com/dbwocyqha/image/upload/v1779817141/Screenshot_2026-05-27_at_00.38.37_emz4nl.png",
    ],
    tags: ["Next.js", "React 19", "TypeScript", "Redux Toolkit", "Tailwind CSS", "Framer Motion", "React DnD"],
    githubUrl: "https://github.com/tquocan04/mini-management-project",
  },
  {
    id: 5,
    slug: "real-time-meeting-platform",
    type: "CASE STUDY",
    title: "Real-Time Meeting Platform",
    description: "Video Conferencing & Chat Application",
    image: "/TuananhDo_Portfolio/images/Video.png",
    category: "Full-Stack Development",
    link: {
      type: "GitHub",
      url: "https://github.com/TuananhDo0308/videoCall.git",
    },
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
      "https://github.com/TuananhDo0308/videoCall/raw/main/media/4.png",
      "https://github.com/TuananhDo0308/videoCall/raw/main/media/2.png",
      "https://github.com/TuananhDo0308/videoCall/raw/main/media/1.png",
    ],
    tags: ["Next.js", "Spring Boot", "WebSocket", "PeerJS", "Real-time"],
    githubUrl: "https://github.com/TuananhDo0308/videoCall",
  },
 
  {
    id: 7,
    slug: "water-bottle-ecommerce-platform",
    type: "CASE STUDY",
    title: "Water Bottle E-commerce Platform",
    description: "E-commerce Website with AI Recommendations",
    image: "/TuananhDo_Portfolio/images/Arc.png",
    link: {
      type: "GitHub",
      url: "https://github.com/TuananhDo0308/arccoffee.git",
    },
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
      "https://github.com/TuananhDo0308/arccoffee/raw/main/public/images/home.png",
      "https://github.com/TuananhDo0308/arccoffee/raw/main/public/images/product.png",
      "https://github.com/TuananhDo0308/arccoffee/raw/main/public/images/cart.png",
      "https://github.com/TuananhDo0308/arccoffee/raw/main/public/images/Ai1.png",
      "https://github.com/TuananhDo0308/arccoffee/raw/main/public/images/Ai2.png"
    ],
    tags: ["Next.js", "Framer Motion", "Tailwind CSS", "NextAuth", "Gemini API", "Redux Toolkit"],
    githubUrl: "https://github.com/TuananhDo0308/arccoffee",
  },
  {
    id: 9,
    slug: "coffee-management-system",
    type: "CASE STUDY",
    title: "Coffee Management System",
    link: {
      type: "GitHub",
      url: "https://github.com/TuananhDo0308/CoffeeShop-Management-WPF.git",
    },
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
      "https://github.com/TuananhDo0308/CoffeeShop-Management-WPF/raw/main/media/login.png",
      "https://github.com/TuananhDo0308/CoffeeShop-Management-WPF/raw/main/media/product.png",
      "https://github.com/TuananhDo0308/CoffeeShop-Management-WPF/raw/main/media/employee.png",
    ],
    tags: [".NET Core", "WPF", "MS SQL Server", "Desktop App"],
    githubUrl: "https://github.com/TuananhDo0308/CoffeeShop-Management-WPF",
  },
  {
    id: 10,
    slug: "algorithm-visualization-tool",
    type: "CASE STUDY",
    title: "Algorithm Visualization Tool",
    description: "Interactive Graph Algorithm Visualizer",
    image: "/TuananhDo_Portfolio/images/Graph.png",
    category: "Web Development & Education",
    link: {
      type: "Product",
      url: "https://tuananhdo0308.github.io/GRAPH/",
    },
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
      "https://res.cloudinary.com/dbwocyqha/image/upload/v1779817785/Screenshot_2026-05-27_at_00.49.21_oyw5vi.png",
      "https://res.cloudinary.com/dbwocyqha/image/upload/v1779817785/Screenshot_2026-05-27_at_00.48.34_ithp4s.png",
      "https://res.cloudinary.com/dbwocyqha/image/upload/v1779817785/Screenshot_2026-05-27_at_00.48.27_et6ic4.png",
    ],
    tags: ["JavaScript", "D3.js", "HTML/CSS", "Algorithm Visualization"],
    liveUrl: "https://graph-umber.vercel.app",
    githubUrl: "https://github.com/TuananhDo0308/GRAPH",
  },
  {
    id: 11,
    slug: "2d-top-down-car-racing-game",
    type: "GAME DEVELOPMENT",
    title: "2D Top-down Car Racing Game",
    description: "Unity-based Racing Game with Time Challenges",
    image: "/TuananhDo_Portfolio/images/Race.png",
    link: {
      type: "GitHub",
      url: "https://github.com/TuananhDo0308/Car-Game-Unity",
    },
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
      "https://github.com/TuananhDo0308/Car-Game-Unity/raw/new-branch/media/home.png",
      "https://github.com/TuananhDo0308/Car-Game-Unity/raw/new-branch/media/game.png",
      "https://github.com/TuananhDo0308/Car-Game-Unity/raw/new-branch/media/game2.png",
      "https://github.com/TuananhDo0308/Car-Game-Unity/raw/new-branch/media/winning.png"
    ],
    tags: ["Unity", "C#", "Game Development", "2D Game"],
    githubUrl: "https://github.com/TuananhDo0308/Car-Game-Unity",
  }
];

export function getProjectById(id: number): ProjectDetail | undefined {
  return projects.find((project) => project.id === id);
}

export function getProjectBySlug(slug: string): ProjectDetail | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectIds(): number[] {
  return projects.map((project) => project.id);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
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
