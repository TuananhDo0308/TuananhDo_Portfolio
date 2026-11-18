"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useCursorContext } from "@/components/CursorContext";
import {
  Mail,
  Copy,
  Check,
  MapPin,
  Clock,
  ArrowUpRight,
  Send,
  Terminal,
  Globe,
  Sparkles,
  ExternalLink,
} from "lucide-react";

export default function ContactPage() {
  const { animateCursor } = useCursorContext();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("Full-Stack App");
  const [message, setMessage] = useState("");
  const [sentStatus, setSentStatus] = useState<string | null>(null);

  // Live ICT Time Clock (UTC+7)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format as Ho Chi Minh City time (UTC+7)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Ho_Chi_Minh",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setCurrentTime(new Intl.DateTimeFormat("en-GB", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText("TuananhDo0308@gmail.com");
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(`[Portfolio Inquiry - ${topic}] from ${name || "Visitor"}`);
    const body = encodeURIComponent(
      `Hi Tuan Anh,\n\nName: ${name}\nEmail: ${email}\nInquiry Topic: ${topic}\n\nMessage:\n${message}\n`
    );

    // Open native mail client
    window.location.href = `mailto:TuananhDo0308@gmail.com?subject=${subject}&body=${body}`;

    setSentStatus("Opening your email client... Email draft prepared!");
    setTimeout(() => setSentStatus(null), 5000);
  };

  const topics = [
    "Full-Stack App",
    "Frontend & Creative UI",
    "AI / MCP Integration",
    "Full-Time Role",
    "Other",
  ];

  const socialChannels = [
    {
      name: "LinkedIn",
      handle: "Đỗ Trần Tuấn Anh",
      url: "https://www.linkedin.com/in/do-tran-tuan-anh-68b2a2317/",
      description: "Professional background, experience & endorsements",
    },
    {
      name: "GitHub",
      handle: "@TuananhDo0308",
      url: "https://github.com/TuananhDo0308",
      description: "Open-source projects, repositories & codebase",
    },
    {
      name: "Facebook",
      handle: "TuananhDo0308",
      url: "https://www.facebook.com/TuananhDo0308/",
      description: "Personal updates & direct message inquiries",
    },
    {
      name: "Instagram",
      handle: "@dohtanh",
      url: "https://www.instagram.com/dohtanh/",
      description: "Visual aesthetics, photography & creative life",
    },
  ];

  return (
    <main className="bg-black text-white min-h-screen pt-32 pb-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-2 h-2 bg-neutral-400" />
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">
              // 04. CONTACT & DIRECT COLLABORATION
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onMouseEnter={() => animateCursor("textHover")}
            onMouseLeave={() => animateCursor("cursorEnter")}
            className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight mb-6"
          >
            Get In Touch
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-2xl text-neutral-400 max-w-3xl leading-relaxed"
          >
            Have an engineering role, a challenging project, or an idea to bring to life?
            I am always open to discussing new opportunities, technical collaborations, and creative digital experiences.
          </motion.p>
        </div>

        {/* Live Status & Timezone Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="border border-white/10 bg-white/[0.02] p-5 md:p-6 mb-12 grid grid-cols-1 sm:grid-cols-3 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10 font-mono text-xs uppercase tracking-wider"
        >
          {/* Availability */}
          <div className="flex items-center gap-3 pt-2 sm:pt-0">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <div>
              <span className="text-neutral-500 block text-[10px]">CURRENT STATUS</span>
              <span className="text-neutral-200 font-semibold">Available for Opportunities</span>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-3 sm:px-6 pt-3 sm:pt-0">
            <MapPin className="w-4 h-4 text-neutral-400 shrink-0" />
            <div>
              <span className="text-neutral-500 block text-[10px]">LOCATION</span>
              <span className="text-neutral-200 font-semibold">Ho Chi Minh City, VN</span>
            </div>
          </div>

          {/* Live ICT Clock */}
          <div className="flex items-center gap-3 sm:px-6 pt-3 sm:pt-0">
            <Clock className="w-4 h-4 text-neutral-400 shrink-0" />
            <div>
              <span className="text-neutral-500 block text-[10px]">LOCAL TIME (UTC+7)</span>
              <span className="text-neutral-200 font-semibold">
                {currentTime || "12:00:00"} ICT
              </span>
            </div>
          </div>
        </motion.div>

        {/* Main Content Grid: Left Form, Right Direct Contact & Socials */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          {/* Left Column: Direct Message Composer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-7 border border-white/10 bg-white/[0.02] p-6 md:p-10 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-6 mb-8 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-neutral-400" />
                  <h2 className="font-mono text-xs uppercase tracking-widest text-neutral-300">
                    DIRECT INQUIRY COMPOSER
                  </h2>
                </div>
                <span className="text-[10px] font-mono text-neutral-500 uppercase">
                  FAST RESPONSE
                </span>
              </div>

              <form onSubmit={handleSendMessage} className="space-y-6">
                {/* Topic Selector */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2.5">
                    Select Topic / Focus Area
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {topics.map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setTopic(item)}
                        onMouseEnter={() => animateCursor("tagHover")}
                        onMouseLeave={() => animateCursor("cursorEnter")}
                        className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider transition-all border ${
                          topic === item
                            ? "bg-white text-black border-white font-semibold"
                            : "bg-white/[0.03] text-neutral-400 border-white/10 hover:border-white/30 hover:text-white"
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Alex Smith"
                      className="w-full bg-black border border-white/15 px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. alex@example.com"
                      className="w-full bg-black border border-white/15 px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors"
                    />
                  </div>
                </div>

                {/* Message Input */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                    Message / Project Details
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your goals, project scope, timeline, or position details..."
                    className="w-full bg-black border border-white/15 px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors resize-none"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    onMouseEnter={() => animateCursor("buttonHover")}
                    onMouseLeave={() => animateCursor("cursorEnter")}
                    className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-semibold text-xs uppercase tracking-widest hover:bg-neutral-200 transition-colors border border-white"
                  >
                    <span>Launch Inquiry In Mail Client</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  {sentStatus && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-3 text-xs font-mono text-emerald-400"
                    >
                      {sentStatus}
                    </motion.p>
                  )}
                </div>
              </form>
            </div>

            <div className="pt-8 mt-8 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-neutral-500 uppercase">
              <span>Average response time: &lt; 24h</span>
              <span>Encrypted & direct communication</span>
            </div>
          </motion.div>

          {/* Right Column: Direct Email & Social Channels Matrix */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="lg:col-span-5 space-y-6 flex flex-col justify-between"
          >
            {/* Primary Email Card */}
            <div className="border border-white/10 bg-white/[0.02] p-6 md:p-8 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">
                  PRIMARY EMAIL
                </span>
                <span className="text-[10px] font-mono text-neutral-500 uppercase">
                  DIRECT INBOX
                </span>
              </div>

              <div>
                <a
                  href="mailto:TuananhDo0308@gmail.com"
                  onMouseEnter={() => animateCursor("copyHover", "MAIL ✉")}
                  onMouseLeave={() => animateCursor("cursorEnter")}
                  className="text-xl sm:text-2xl font-bold hover:text-neutral-300 transition-colors break-all"
                >
                  TuananhDo0308@gmail.com
                </a>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  onMouseEnter={() =>
                    animateCursor("copyHover", copiedEmail ? "COPIED" : "COPY")
                  }
                  onMouseLeave={() => animateCursor("cursorEnter")}
                  className="inline-flex items-center gap-2 px-4 py-2 border border-white/20 hover:border-white text-xs font-mono uppercase tracking-wider text-neutral-200 hover:text-white transition-all bg-white/[0.04]"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copied to clipboard</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>

                <a
                  href="mailto:TuananhDo0308@gmail.com"
                  onMouseEnter={() => animateCursor("buttonHover")}
                  onMouseLeave={() => animateCursor("cursorEnter")}
                  className="inline-flex items-center gap-2 px-4 py-2 border border-white/20 hover:border-white text-xs font-mono uppercase tracking-wider text-neutral-200 hover:text-white transition-all bg-white/[0.04]"
                >
                  <span>Open Mail App</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Social Matrix */}
            <div className="border border-white/10 bg-white/[0.02] p-6 md:p-8">
              <div className="font-mono text-xs uppercase tracking-widest text-neutral-400 mb-6">
                PROFILES & CHANNELS
              </div>

              <div className="space-y-3">
                {socialChannels.map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => animateCursor("buttonHover")}
                    onMouseLeave={() => animateCursor("cursorEnter")}
                    className="group block p-4 border border-white/10 hover:border-white/30 hover:bg-white/[0.03] transition-all"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white group-hover:text-neutral-200 transition-colors">
                          {item.name}
                        </span>
                        <span className="text-xs font-mono text-neutral-500">
                          {item.handle}
                        </span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>
                    <p className="text-xs text-neutral-400 line-clamp-1">
                      {item.description}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Collaboration Specifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t border-b border-white/10 py-12 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div>
            <div className="font-mono text-xs text-neutral-500 uppercase tracking-widest mb-3">
              01 / CORE EXPERTISE
            </div>
            <h3 className="text-lg font-bold mb-2">Modern Web & AI Interfaces</h3>
            <p className="text-sm text-neutral-400 leading-relaxed font-light">
              Specialized in Next.js 16, React 19, TypeScript, Tailwind CSS v4, Three.js 3D interactions, and Model Context Protocol (MCP) tooling.
            </p>
          </div>

          <div>
            <div className="font-mono text-xs text-neutral-500 uppercase tracking-widest mb-3">
              02 / ENGAGEMENT TYPES
            </div>
            <h3 className="text-lg font-bold mb-2">Roles & Collaborations</h3>
            <p className="text-sm text-neutral-400 leading-relaxed font-light">
              Open to full-time Frontend / Full-Stack Software Engineering roles, high-impact freelance development, and architectural consulting.
            </p>
          </div>

          <div>
            <div className="font-mono text-xs text-neutral-500 uppercase tracking-widest mb-3">
              03 / LOCATION & WORK MODE
            </div>
            <h3 className="text-lg font-bold mb-2">Worldwide or On-Site</h3>
            <p className="text-sm text-neutral-400 leading-relaxed font-light">
              Based in Ho Chi Minh City, Vietnam. Available for local on-site/hybrid positions as well as asynchronous distributed teams worldwide.
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
