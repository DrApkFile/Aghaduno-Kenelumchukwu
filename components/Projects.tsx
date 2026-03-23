"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "Node-Shift",
    description: "An educational platform that onboards traditional Web2 backend developers into Solana. It maps 12 essential backend patterns to Anchor with live UI integration tests for a seamless transition.",
    tech: ["Anchor", "Solana", "Next.js", "TypeScript", "Integration Testing"],
    github: "https://github.com/DrApkFile/Node-Shift",
    link: "https://node-shift.vercel.app/",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "EtherFlow",
    description: "A powerful Ethereum wallet management app designed to simplify crypto transactions. Features seamless MetaMask integration for swapping tokens, monitoring real-time gas prices, and performing secure transactions effortlessly.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Web3", "Ethers.js"],
    github: "https://github.com/DrApkFile/EtherFlow",
    link: "https://ether-flow-eta.vercel.app/",
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "Task-Rail",
    description: "A decentralized task management platform built on Solana. It leverages the Lazorkit SDK for high-performance coordination and on-chain interactions across the network.",
    tech: ["Lazorkit SDK", "Solana", "Next.js", "Rust"],
    github: "https://github.com/DrApkFile/Task-Rail",
    link: "https://task-rail-rho.vercel.app/",
    image: "https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "Attend Flow",
    description: "A smart web app that helps course representatives manage attendance effortlessly. Generate time-sensitive links, collect responses, and store records securely—all in one intuitive dashboard.",
    tech: ["Next.js", "Tailwind CSS", "MongoDB", "Express.js"],
    github: "https://github.com/DrApkFile/AttendFlow",
    link: null, // Only GitHub link as requested
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "FutoCampusAssistant",
    description: "A smart campus companion making student day-to-day life easier and more efficient, featuring a powerful backend for coordination and automation.",
    tech: ["Django", "TensorFlow", "PostgreSQL", "Python"],
    github: "https://github.com/DrApkFile/FCA-Backend",
    link: null,
    image: "https://images.unsplash.com/photo-1523050338692-7b835a07973f?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "CipherChat",
    description: "An anonymous chat app allowing identity-free communication with 5-hour sessions and automatic data deletion. Groups last 3 hours with full admin controls.",
    tech: ["Flutter", "Firebase", "Dart", "Realtime DB"],
    github: "https://github.com/DrApkFile/Soe-Anon-Chatapp.app/",
    link: null,
    image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "Lakha",
    description: "An L1 blockchain implementation featuring Proof of Contribution (PoC) and low transaction rates. Designed to empower active members by basing decision-making on participation rather than just capital concentration.",
    tech: ["Python", "Blockchain Architecture", "P2P Networking", "Cryptography"],
    github: "https://github.com/DrApkFile/Lakha",
    link: null,
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "Mailpay",
    description: "Fintech front-end template for email-based transactions. Translates complex design concepts into a high-quality, user-friendly mobile interface.",
    tech: ["Flutter", "Dart", "Mobile UI", "Finance"],
    github: "https://github.com/DrApkFile/MailpayMobileUI",
    link: "https://mailpay-ui.vercel.app",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2000&auto=format&fit=crop",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 max-w-7xl mx-auto">
      <motion.h2 
        className="text-3xl font-bold mb-16 flex items-center gap-4 text-white"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-blue-500 font-mono text-xl tracking-tighter">03.</span> 
        Selected Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group flex flex-col rounded-2xl border border-white/10 bg-zinc-900/40 backdrop-blur-md overflow-hidden hover:border-blue-500/30 transition-all duration-300"
          >
            <div className="aspect-video w-full overflow-hidden relative">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            </div>
            
            <div className="p-8 flex flex-col flex-1">
              <div className="flex items-center justify-between mb-4">
                <Folder className="text-blue-500" size={24} />
                <div className="flex gap-4 text-zinc-400">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                      <Github size={20} />
                    </a>
                  )}
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                {project.description}
              </p>
              
              <div className="mt-auto flex flex-wrap gap-x-4 gap-y-2">
                {project.tech.map((t) => (
                  <span key={t} className="text-[10px] uppercase tracking-widest font-bold text-blue-500/70">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
