"use client";

import { motion } from "framer-motion";

export default function Bio() {
  const paragraphs = [
"Tuấn Anh is a full-stack developer with a strong focus on modern web experiences, real-time systems, and interactive interfaces. He works across both frontend and backend, turning complex ideas into clean, high-performance products. With a deep interest in how technology and user experience intersect, he builds applications that are not only functional, but intuitive and engaging to use.",
"His technical background spans React, Next.js, React Native, and .NET, along with real-time communication technologies such as WebRTC, PeerJS, and STOMP. He has worked on projects involving video calling systems, 3D web integration, custom UI interactions, and scalable backend services. Tuấn Anh enjoys solving architectural problems and optimizing systems so that performance, maintainability, and user experience grow together.",
"Beyond traditional web development, he is especially interested in AI-powered products and conversational systems. He has explored building chatbot platforms similar to Tidio and applying Generative AI in practical contexts, including youth community initiatives and digital engagement campaigns. He sees AI not as a replacement for human creativity, but as a tool to amplify impact and accessibility.",

"Driven by curiosity and a builder mindset, Tuấn Anh constantly experiments with new technologies, design patterns, and interaction models. Whether it's refining micro-interactions on the frontend or structuring backend pipelines, his goal is always the same: create digital products that feel smooth, thoughtful, and future-ready."  ];

  return (
    <motion.div
      className="py-16 px-8 mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="space-y-8 max-w-4xl">
        {paragraphs.map((paragraph, index) => (
          <motion.p
            key={index}
            className="text-gray-300 text-lg "
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {paragraph}
          </motion.p>
        ))}
      </div>
    </motion.div>
  );
}
