import React from 'react';
import { motion } from 'motion/react';
import { SKILLS } from '../constants';
import { Download } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-zinc-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-4">About Me</h2>
            <h3 className="text-4xl font-bold mb-8 leading-tight">
              Crafting digital experiences with <span className="text-primary">passion</span> and precision.
            </h3>
            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
              <p>
                I am a passionate Full Stack Developer with over 5 years of experience in creating modern web applications. My journey started with a curiosity for how things work on the internet, which evolved into a career dedicated to building robust and user-friendly solutions.
              </p>
              <p>
                I specialize in React, Node.js, and cloud technologies. I believe in writing clean, maintainable code and always staying up-to-date with the latest industry trends to provide the best possible value to my clients.
              </p>
            </div>
            
            <div className="mt-10">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary flex items-center gap-2"
              >
                <Download size={18} /> Download CV
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 md:p-12"
          >
            <h4 className="text-xl font-bold mb-8">My Technical Skills</h4>
            <div className="space-y-8">
              {SKILLS.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-zinc-200">{skill.name}</span>
                    <span className="text-sm font-medium text-primary">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-full bg-primary rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
