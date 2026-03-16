import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-zinc-500 text-sm">
          © {new Date().getFullYear()} Salman Ahmed. All rights reserved.
        </p>
        <div className="flex items-center gap-8">
          <a href="#" className="text-zinc-500 hover:text-primary text-sm transition-colors">Privacy Policy</a>
          <a href="#" className="text-zinc-500 hover:text-primary text-sm transition-colors">Terms of Service</a>
        </div>
        <p className="text-zinc-500 text-sm">
          Designed & Built with <span className="text-primary">❤</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
