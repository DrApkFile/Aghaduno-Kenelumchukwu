"use client";

import { motion } from "framer-motion";
import { 
  Code2, 
  Layout, 
  Server, 
  Terminal,
  Bot,
  Zap,
  Cpu,
  Globe,
  Database,
  Shield,
  Search,
  Cloud,
  Layers,
  Container,
  GitBranch,
  Flame,
  Box,
  Coins,
  Bird,
  Workflow,
  Sparkles,
  Command
} from "lucide-react";

const skillCategories = [
  {
    title: "Web3 & Blockchain",
    mainIcon: <Zap className="text-purple-500" />,
    skills: [
      { name: "Solana", icon: <Coins size={14} /> },
      { name: "Anchor", icon: <AnchorIcon /> },
      { name: "Rust", icon: <Cpu size={14} /> },
      { name: "Web3.js", icon: <Globe size={14} /> },
      { name: "Smart Contracts", icon: <Shield size={14} /> },
    ],
  },
  {
    title: "AI & Prompt Engineering",
    mainIcon: <Bot className="text-blue-500" />,
    skills: [
      { name: "Gemini", icon: <Sparkles size={14} /> },
      { name: "Claude", icon: <Bot size={14} /> },
      { name: "ChatGPT", icon: <Command size={14} /> },
      { name: "LLM Integration", icon: <Workflow size={14} /> },
      { name: "Advanced Prompting", icon: <Terminal size={14} /> },
    ],
  },
  {
    title: "Frontend Development",
    mainIcon: <Layout className="text-emerald-500" />,
    skills: [
      { name: "React", icon: <Layout size={14} /> },
      { name: "Next.js", icon: <Globe size={14} /> },
      { name: "TypeScript", icon: <Code2 size={14} /> },
      { name: "Tailwind CSS", icon: <Box size={14} /> },
      { name: "Redux", icon: <Layers size={14} /> },
    ],
  },
  {
    title: "Backend & Database",
    mainIcon: <Server className="text-rose-500" />,
    skills: [
      { name: "FastAPI", icon: <Zap size={14} /> },
      { name: "Flask", icon: <Flame size={14} /> },
      { name: "Node.js", icon: <Server size={14} /> },
      { name: "PostgreSQL", icon: <Database size={14} /> },
      { name: "MongoDB", icon: <Database size={14} /> },
      { name: "Firebase", icon: <Flame size={14} /> },
      { name: "Supabase", icon: <Zap size={14} /> },
    ],
  },
  {
    title: "Programming Languages",
    mainIcon: <Code2 className="text-amber-500" />,
    skills: [
      { name: "JavaScript", icon: <Code2 size={14} /> },
      { name: "Python", icon: <Bird size={14} /> },
      { name: "Rust", icon: <Cpu size={14} /> },
      { name: "Go", icon: <Workflow size={14} /> },
    ],
  },
  {
    title: "Cloud & DevOps",
    mainIcon: <Terminal className="text-indigo-500" />,
    skills: [
      { name: "Docker", icon: <Container size={14} /> },
      { name: "AWS", icon: <Cloud size={14} /> },
      { name: "CI/CD", icon: <Workflow size={14} /> },
      { name: "Linux", icon: <Terminal size={14} /> },
      { name: "Git", icon: <GitBranch size={14} /> },
    ],
  },
];

function AnchorIcon() {
  return (
    <svg 
      width="14" 
      height="14" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M12 22V8" /><path d="M5 12H2a10 10 0 0 0 20 0h-3" /><circle cx="12" cy="5" r="3" />
    </svg>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 bg-[#050505] border-y border-white/5 relative">
      {/* Background glow for visibility */}
      <div className="absolute top-0 left-1/4 w-1/2 h-full bg-blue-500/5 blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2 
          className="text-3xl font-bold mb-16 flex items-center gap-4 px-4 text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="text-blue-500 font-mono text-xl tracking-tighter">02.</span> 
          My Core Stack
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-8 rounded-2xl border border-white/10 bg-zinc-900/40 backdrop-blur-md hover:border-blue-500/30 hover:bg-zinc-900/60 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-xl bg-white/5 group-hover:scale-110 transition-transform duration-300">
                  {category.mainIcon}
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="flex items-center gap-2 px-3 py-2 text-xs font-semibold rounded-lg bg-white/5 text-zinc-400 border border-white/5 hover:text-white hover:border-white/20 transition-all duration-200"
                  >
                    <span className="text-blue-400/80">{skill.icon}</span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
