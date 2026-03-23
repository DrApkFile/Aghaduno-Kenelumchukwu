"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

export default function Contact() {
  const email = "nigerianfiah@gmail.com";

  return (
    <section id="contact" className="py-32 px-4 max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-4 flex justify-center items-center gap-4 text-white">
          <span className="text-blue-500 font-mono text-xl">04.</span>
          {" What's Next?"}
        </h2>
        <h3 className="text-5xl font-bold mb-6 tracking-tight text-white">Get In Touch</h3>
        <p className="text-xl text-zinc-400 mb-12">
          I&apos;m currently looking for new opportunities and my inbox is always open. 
          Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
        </p>

        <div className="flex justify-center gap-8 mb-12">
          <a
            href={`mailto:${email}`}
            className="p-4 rounded-full border border-white/10 bg-white/5 hover:bg-blue-500/10 hover:text-blue-500 hover:border-blue-500/50 transition-all"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
          <a
            href="https://github.com/DrApkFile"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:text-white transition-all"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="#"
            className="p-4 rounded-full border border-white/10 bg-white/5 hover:bg-blue-600/10 hover:text-blue-600 transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="#"
            className="p-4 rounded-full border border-white/10 bg-white/5 hover:bg-sky-500/10 hover:text-sky-500 transition-all"
            aria-label="Twitter"
          >
            <Twitter size={24} />
          </a>
        </div>

        <a
          href={`mailto:${email}`}
          className="px-12 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-zinc-200 transition-colors inline-block"
        >
          Say Hello
        </a>
      </motion.div>
    </section>
  );
}
