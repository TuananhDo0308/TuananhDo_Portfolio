<div align="center">

# 🌐 Anh Do Tran Tuan — Developer Portfolio

**A modern, interactive personal portfolio showcasing full-stack and frontend engineering projects, 3D web experiences, and AI-driven applications.**

[![Next.js](https://img.shields.io/badge/Next.js-16.1.5-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.3-blue?style=flat&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![Three.js](https://img.shields.io/badge/Three.js-3D-black?style=flat&logo=three.js)](https://threejs.org/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-Animations-purple?style=flat&logo=framer)](https://www.framer.com/motion/)

<br />

[✨ Explore Projects](#-featured-projects) •
[🛠 Tech Stack](#-tech-stack) •
[🚀 Getting Started](#-getting-started) •
[📫 Contact](#-about--contact)

</div>

---

## 📖 Overview

This repository houses the source code for the personal portfolio of **Anh Do Tran Tuan (Tuấn Anh Đỗ)**. Built with a focus on fluid interactivity, modern typography, and clean dark-mode aesthetics, it demonstrates expertise in building production-ready web applications, smooth user experiences, and responsive interfaces.

### ✨ Highlights

- **Interactive 3D Avatar Experience**: Immersive WebGL 3D model viewer rendered using Three.js and `@react-three/fiber` / `@react-three/drei`.
- **Ultra-Smooth Scrolling**: Physics-based smooth inertial scroll powered by [Lenis](https://lenis.darkroom.engineering/).
- **Micro-Interactions & Fluid Motion**: Dynamic animations and magnetic hover states orchestrated with [Framer Motion](https://www.framer.com/motion/) and [GSAP](https://gsap.com/).
- **Custom Interactive Cursor**: Context-aware custom cursor tracking across viewport interactions.
- **Dynamic Case Study Architecture**: Data-driven project detail pages generated statically at build time (SSG) for maximum performance and SEO.
- **Fully Responsive**: Optimized for every screen size from mobile smartphones to ultra-wide displays.

---

## 💼 Featured Projects

| Project | Description | Tech Stack | Links |
| :--- | :--- | :--- | :--- |
| **Scylla** | AI-powered multi-person team calendar, physical meeting room coordinator, and Kanban task tracking with built-in Model Context Protocol (MCP) server for AI coding agents. | Next.js 16, React 19, TypeScript, Tailwind v4, MCP, PostgreSQL, Drizzle, Bun | [Live Demo](https://scylla-nu.vercel.app/) • [GitHub](https://github.com/belastrittmatter/Scylla) |
| **Event Management App [Bosch Global]** | Enterprise event management platform with CMS and AI chatbot integration developed at Bosch Global Software Vietnam. | React, Tailwind CSS, Azure SSO, Chatbot, Agile/Jira | [Case Study](/projects/event-management-app-bosch-global) |
| **Viqium AI** | AI chatbot automation platform for e-commerce sellers featuring cross-channel customer inquiries, product recommendations, and custom embed scripts. | Next.js, TypeScript, Tailwind CSS, NextAuth, Redux Toolkit | [Live Site](https://viqiumproduction.vercel.app/) |
| **Skye Education** | Modern tutor-student booking platform featuring secure Google authentication, engaging Framer Motion interactions, and automated AWS ECS CI/CD deployment. | Next.js, Framer Motion, AWS ECS, Docker, CI/CD, NextAuth | [Live Site](https://skyeeducation.com) |
| **Smart Nutrition Management** | Mobile application with AI/ML food image analysis and mass estimation for automated nutrient tracking. Published in Asian Journal of Research in Computer Science. | React Native, AI/ML, Python, Redux Toolkit, Computer Vision | [GitHub](https://github.com/TuananhDo0308/nutrition-app-mobile) |
| **Flowlite** | Modern task management and Kanban board application with drag-and-drop interaction, real-time updates, and team collaboration dashboards. | Next.js, React 19, TypeScript, React DnD, Redux Toolkit, Tailwind v4 | [GitHub](https://github.com/tquocan04/mini-management-project) |
| **Real-Time Meeting Platform** | Low-latency video conferencing and chat platform supporting simultaneous video calls and real-time messaging. | Next.js, Java Spring Boot, WebSocket (STOMP), PeerJS, WebRTC | [GitHub](https://github.com/TuananhDo0308/videoCall) |
| **Water Bottle E-Commerce** | E-commerce storefront with Gemini AI personalized product recommendations, cart management, and administrative revenue analytics. | Next.js, Framer Motion, Tailwind CSS, NextAuth, Gemini API | [GitHub](https://github.com/TuananhDo0308/arccoffee) |
| **Algorithm Visualization Tool** | Interactive graph visualizer for Prim's and Ford-Bellman algorithms with drag-and-drop node graph builder and step-by-step playback. | JavaScript, D3.js, HTML5/CSS3 | [Live Demo](https://graph-umber.vercel.app) • [GitHub](https://github.com/TuananhDo0308/GRAPH) |

---

## 🛠 Tech Stack

### Frontend & Core
- **Next.js 16** (App Router, Static Site Generation)
- **React 19**
- **TypeScript**
- **Tailwind CSS v4** (`@tailwindcss/postcss`)

### Animations, 3D & Graphics
- **Three.js** & **@react-three/fiber** / **@react-three/drei** (WebGL 3D Model Rendering)
- **Framer Motion** & **Motion** (Declarative Layout & Scroll Animations)
- **GSAP** & **@gsap/react** (Micro-interactions & Timeline Animations)
- **Lenis** (Inertial Smooth Scrolling)
- **Lucide React** (Vector Icons)

### Deployment & Tooling
- **Vercel** & **GitHub Pages** (`gh-pages`)
- **ESLint 9**
- **PostCSS**

---

## 📂 Project Structure

```text
TuananhDo_Portfolio/
├── app/                        # Next.js App Router pages and layouts
│   ├── about/                  # About & biography page
│   ├── contact/                # Contact page
│   ├── projects/               # Projects directory
│   │   ├── page.tsx            # All projects overview
│   │   └── [slug]/page.tsx     # Dynamic project case study route
│   ├── globals.css             # Tailwind v4 styles & design tokens
│   ├── layout.tsx              # Root HTML layout with Lenis & Custom Cursor
│   └── page.tsx                # Homepage (Hero 3D, Featured Works, Tech Stack)
├── components/                 # Reusable UI & section components
│   ├── about/                  # Bio, experience timeline, profile header
│   ├── home/                   # Hero 3D avatar viewer, works grid, tech stack
│   ├── layout/                 # Navigation header, footer, scroll-to-top
│   ├── projectDetail/          # Case study template with gallery & external links
│   ├── ui/                     # Primitives (e.g., typewriter effect)
│   ├── CursorContext.tsx       # Custom cursor state provider
│   └── lenis.tsx               # Smooth scroll initializer
├── lib/
│   ├── project.ts              # Data source for all projects and case studies
│   └── utils.ts                # Tailwind utility helpers (clsx, twMerge)
└── public/                     # Static assets, 3D avatar GLB, and project images
    ├── avatar.glb              # 3D interactive avatar
    └── images/                 # Project screenshots and company logos
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v20 or higher recommended)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/) / [bun](https://bun.sh/)

### 1. Clone the Repository

```bash
git clone https://github.com/TuananhDo0308/TuananhDo_Portfolio.git
cd TuananhDo_Portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 4. Build for Production

```bash
npm run build
```

To test the production build locally:

```bash
npm run start
```

---

## 📬 About & Contact

**Anh Do Tran Tuan (Tuấn Anh Đỗ)**  
Full-Stack & Frontend Developer based in Ho Chi Minh City, Vietnam.

- **Email**: [TuananhDo0308@gmail.com](mailto:TuananhDo0308@gmail.com)
- **GitHub**: [@TuananhDo0308](https://github.com/TuananhDo0308)
- **LinkedIn**: [Do Tran Tuan Anh](https://www.linkedin.com/in/do-tran-tuan-anh-68b2a2317/)
- **Instagram**: [@dohtanh](https://www.instagram.com/dohtanh/)

---

<div align="center">
  <sub>Built with ❤️ by Anh Do Tran Tuan. All rights reserved.</sub>
</div>
