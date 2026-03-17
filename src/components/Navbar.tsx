import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Github, Linkedin, Twitter, Heart } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFavorite = () => {
    setIsFavorited(!isFavorited);
    if (!isFavorited) {
      alert('Press Ctrl+D (or Cmd+D) to add this site to your favorites!');
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-zinc-950/80 backdrop-blur-lg border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.a 
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold tracking-tighter"
        >
          SALMAN<span className="text-primary">.</span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-sm font-medium text-zinc-400 hover:text-primary transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.button
            onClick={handleFavorite}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`p-2 rounded-full border transition-all ${isFavorited ? 'bg-red-500/20 border-red-500 text-red-500' : 'bg-white/5 border-white/10 text-zinc-400 hover:text-primary'}`}
          >
            <Heart size={18} fill={isFavorited ? 'currentColor' : 'none'} />
          </motion.button>
          <motion.a
            href="#contact"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-primary/10 text-primary border border-primary/20 px-5 py-2 rounded-full text-sm font-medium hover:bg-primary hover:text-white transition-all"
          >
            Hire Me
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-zinc-100" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-zinc-900 border-b border-white/5 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-xl font-medium text-zinc-300 hover:text-primary"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex space-x-4 pt-4 items-center">
                <button 
                  onClick={handleFavorite}
                  className={`p-2 rounded-full border transition-all ${isFavorited ? 'bg-red-500/20 border-red-500 text-red-500' : 'bg-white/5 border-white/10 text-zinc-400'}`}
                >
                  <Heart size={20} fill={isFavorited ? 'currentColor' : 'none'} />
                </button>
                <Github className="text-zinc-400 hover:text-primary cursor-pointer" size={20} />
                <Linkedin className="text-zinc-400 hover:text-primary cursor-pointer" size={20} />
                <Twitter className="text-zinc-400 hover:text-primary cursor-pointer" size={20} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
