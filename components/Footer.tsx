
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="text-center p-4 bg-slate-900/30 text-slate-500 text-sm">
      <p>&copy; {new Date().getFullYear()} Celestial Insights. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
