"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";

const asciiArts = [
  // DR APK FILE
  `
   ___         _        _      ___ _ _      
  |   \\ _ _   /_\\  _ __| |__  | __(_) | ___ 
  | |) | '_| / _ \\| '_ \\ / /  | _|| | |/ -_)
  |___/|_|  /_/ \\_\\ .__/ _\\_\\ |_| |_|_|\\___|
                  |_|                       
  `,
  // PROMPT ENGINEER
  `
   ___                      _     ___             
  | _ \\_ _ ___ _ __  _ __  | |_  | __|_ _  __ _   
  |  _/ '_/ _ \\ '  \\| '_ \\ |  _| | _|| ' \\/ _\` |  
  |_| |_| \\___/_|_|_| .__/  \\__| |___|_||_\\__, |  
                    |_|                   |___/   
  `,
  // FULLSTACK WEB2 & WEB3
  `
   ___      _ _ ___ _             _      ___              
  | __| _ _| | / __| |_ __ _  __ | |__  |   \\ ___ __ __   
  | _| || | | \\__ \\  _/ _\` |/ _|| / /  | |) / -_\\\\ V /   
  |_| \\_,_|_|_|___/\\__\\__,_\\|__||_\\_\\  |___/\\___| \\_/    
  `
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % asciiArts.length);
    }, 5000); 
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center pt-20 px-4 relative overflow-hidden bg-black text-white">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] -z-10" />

      <div className="text-center flex flex-col items-center">
        {/* Writing Animation for Cycling ASCII Art */}
        <div className="relative mb-12 h-[140px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <div key={index} className="relative">
              <motion.pre 
                className="ascii-art text-blue-500 select-none overflow-hidden whitespace-pre"
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                animate={{ clipPath: "inset(0 0% 0 0)" }}
                exit={{ opacity: 0 }}
                transition={{ 
                  duration: 2.5, 
                  ease: "linear",
                }}
              >
                {asciiArts[index]}
              </motion.pre>
              <motion.div 
                className="absolute top-0 bottom-0 w-1 bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"
                initial={{ left: 0 }}
                animate={{ left: "100%" }}
                transition={{ 
                  duration: 2.5, 
                  ease: "linear",
                }}
              />
            </div>
          </AnimatePresence>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Aghaduno Kenelumchukwu
        </h1>
        
        <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-3xl mx-auto px-4">
          Full Stack Developer, Software Architect & Senior Prompt Engineer crafting elegant digital experiences across the stack.
        </p>
        
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="#projects"
            className="px-10 py-4 bg-white text-black rounded-full font-bold hover:bg-zinc-200 transition-colors shadow-lg shadow-white/5"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="px-10 py-4 border border-zinc-700 hover:bg-zinc-900 rounded-full font-bold transition-all"
          >
            Get in Touch
          </a>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10"
      >
        <ArrowDown className="text-zinc-500" size={28} />
      </motion.div>
    </section>
  );
}
