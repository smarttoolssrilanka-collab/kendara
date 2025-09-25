
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-center p-6 bg-slate-900/30 backdrop-blur-sm">
      <div className="flex items-center justify-center gap-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-300" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.007z" clipRule="evenodd" />
        </svg>
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-400 font-cinzel">
          Celestial Insights
        </h1>
      </div>
      <p className="text-slate-400 mt-2">Unveil your cosmic destiny.</p>
    </header>
  );
};

export default Header;
