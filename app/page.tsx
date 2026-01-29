"use client"
import { CursorContextProvider } from "@/components/CursorContext";
import Cursor from "@/components/CustomCursorComp";
import HeroSection from "@/components/home/hero";

export default function Home() {
  return (
        <>
      {/* Hero Section - Fullscreen 3D */}
      <HeroSection />
      
      {/* About Section */}
      <section className="relative w-full py-24 px-8 bg-black border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6">
                <span className="text-white/30">About</span> <br />
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Me</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                I'm a frontend developer passionate about creating beautiful, performant, and accessible web experiences. With expertise in modern frameworks like React, TypeScript, and Tailwind CSS, I transform designs into functional, user-centric digital products.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                I believe great code is clean, maintainable, and brings joy to both users and developers. When I'm not coding, you can find me exploring new technologies or contributing to open-source projects.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'React', value: '5+ years' },
                { label: 'TypeScript', value: '4+ years' },
                { label: 'UI/UX', value: '3+ years' },
                { label: 'Projects', value: '50+' },
              ].map((skill) => (
                <div key={skill.label} className="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-400/20 hover:border-purple-400/50 transition-all duration-300">
                  <p className="text-sm text-gray-400 mb-2">{skill.label}</p>
                  <p className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    {skill.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Works Section */}
      <section className="relative w-full py-24 px-8 bg-black border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-16">
            <span className="text-white/30">Featured</span> <br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Works</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'E-Commerce Platform', desc: 'Full-stack e-commerce solution with React, Node.js, and PostgreSQL' },
              { title: 'Analytics Dashboard', desc: 'Real-time analytics dashboard with interactive charts and data visualization' },
            ].map((work, i) => (
              <div key={i} className="group p-8 rounded-xl bg-gradient-to-br from-purple-500/5 to-blue-500/5 border border-purple-400/20 hover:border-purple-400/50 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-purple-500/10">
                <div className="w-full h-48 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-lg mb-6 group-hover:scale-105 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-white mb-2">{work.title}</h3>
                <p className="text-gray-400 mb-4">{work.desc}</p>
                <a href="#" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                  View Project <span>→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative w-full py-24 px-8 bg-black border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Let's Connect</span>
          </h2>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? Feel free to reach out. I'm always excited to collaborate and create amazing digital experiences.
          </p>
          
          <button className="px-10 py-4 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105 text-lg mb-12">
            Send Me an Email
          </button>

          <div className="flex justify-center gap-6">
            {['Twitter', 'LinkedIn', 'GitHub', 'Instagram'].map((social) => (
              <a key={social} href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                {social}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-8 px-8 bg-black border-t border-white/5 text-center text-gray-500 text-sm">
        <p>© 2024 TuananhDo. All rights reserved.</p>
      </footer>
            </>

  );
}
