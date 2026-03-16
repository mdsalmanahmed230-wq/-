import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Glow */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-6"
          >
            Available for Freelance
          </motion.span>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            Hi, I'm <span className="text-primary">Salman Ahmed</span>
            <br />
            <span className="text-zinc-400">Full Stack Developer</span>
          </h1>
          
          <p className="text-zinc-400 text-lg md:text-xl max-w-lg mb-10 leading-relaxed">
            I build high-performance, beautiful, and user-centric web applications that help businesses grow and succeed in the digital world.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center gap-2"
            >
              View My Work <ArrowRight size={18} />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary"
            >
              Hire Me
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative z-10 w-full aspect-square max-w-md mx-auto rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <img 
              src="https://picsum.photos/seed/salman/800/800" 
              alt="Salman Ahmed" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 border-t-2 border-r-2 border-primary/30 rounded-tr-3xl" />
          <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b-2 border-l-2 border-primary/30 rounded-bl-3xl" />
          
          {/* Floating Stats */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 -left-10 glass-card p-4 hidden lg:block"
          >
            <p className="text-2xl font-bold text-white">5+</p>
            <p className="text-xs text-zinc-400 uppercase tracking-widest">Years Exp.</p>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-10 -right-10 glass-card p-4 hidden lg:block"
          >
            <p className="text-2xl font-bold text-white">50+</p>
            <p className="text-xs text-zinc-400 uppercase tracking-widest">Projects Done</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
