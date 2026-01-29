"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  const socialLinks = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/do-tran-tuan-anh-68b2a2317/" },    
    { name: "GitHub", url: "https://github.com/TuananhDo0308" },

    { name: "Facebook", url: "https://www.facebook.com/TuananhDo0308/" },
        { name: "Instagram", url: "https://www.instagram.com/dohtanh/" },


  
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
   
    <footer id="footer" className="bg-black text-white pt-24 pb-8 px-8 border-t border-white/10">
      {/* Top Section */}
      <motion.div
        className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-24"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Left - Contact Info */}
        <motion.div variants={itemVariants} className="space-y-4">
          <a
            href="mailto:hello@example.com"
            className="text-2xl md:text-3xl font-bold hover:text-white/70 transition-colors block"
          >
            TuananhDo0308@gmail.com
          </a>
          <p className="text-white/50 text-base md:text-lg">
            Permanently located in
            <br />
            Ho Chi Minh City, Vietnam
          </p>
        </motion.div>

        {/* Center - Social Links */}
        <motion.div variants={itemVariants} className="space-y-3">
          {socialLinks.map((social) => (
            <Link
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-xl md:text-2xl font-semibold hover:text-white/70 transition-colors"
            >
              {social.name}
            </Link>
          ))}
        </motion.div>

     
      </motion.div>

      {/* Bottom Section - Large Username */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="space-y-12"
      >
<div className="relative w-full overflow-hidden py-12">
  <h2 className="relative left-1/2 -translate-x-1/2 whitespace-nowrap font-bold leading-[0.85] tracking-[-0.03em] text-[10vw]">
    @tuananhdo
  </h2>
</div>


       
      </motion.div>
    </footer>
  );
}
