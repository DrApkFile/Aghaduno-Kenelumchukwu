"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-4 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
          <span className="text-blue-500 font-mono text-xl">01.</span> About Me
        </h2>
        
        <div className="space-y-6 text-lg text-zinc-400">
          <p>
            Hello! I&apos;m Aghaduno Kenelumchukwu, a <span className="text-blue-500 font-semibold">Blockchain Developer</span> and Full Stack Architect with over <span className="text-white font-semibold">6 years of professional experience</span> building high-performance decentralized and centralized applications.
          </p>
          <p>
            My journey is defined by a deep focus on Web3, AI, and robust backend engineering. I specialize in crafting secure smart contracts on <span className="text-blue-400">Solana</span>, architecting scalable microservices, and leveraging <span className="text-blue-400">LLMs</span> to push the boundaries of modern software.
          </p>
          <p>
            I thrive at the intersection of blockchain technology and advanced prompt engineering, ensuring that every project I touch is not only technically sound but also cutting-edge and user-centric.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
