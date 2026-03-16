import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Facebook } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd handle form submission here
    alert('Message sent! I will get back to you soon.');
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-4">Contact Me</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8">Let's work together on your next project.</h3>
            <p className="text-zinc-400 text-lg mb-12 max-w-md">
              I'm currently available for freelance work and full-time positions. If you have a project that needs some creative touch, feel free to reach out.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center text-primary border border-white/5">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 uppercase font-bold tracking-widest mb-1">Email Me</p>
                  <p className="text-lg font-medium">mdsalmanahmed230@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center text-primary border border-white/5">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 uppercase font-bold tracking-widest mb-1">Call Me</p>
                  <p className="text-lg font-medium">01799905109</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center text-primary border border-white/5">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 uppercase font-bold tracking-widest mb-1">Location</p>
                  <p className="text-lg font-medium">Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              {[Github, Linkedin, Twitter, Facebook].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -5, color: '#f97316' }}
                  className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center text-zinc-400 border border-white/5 transition-colors"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Your Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-zinc-950/50 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Your Email</label>
                  <input 
                    type="email" 
                    required
                    className="w-full bg-zinc-950/50 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Subject</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-zinc-950/50 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-colors"
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Message</label>
                <textarea 
                  required
                  rows={5}
                  className="w-full bg-zinc-950/50 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full btn-primary flex items-center justify-center gap-2"
              >
                Send Message <Send size={18} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
