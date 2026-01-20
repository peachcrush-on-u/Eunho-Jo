
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();
  const menuItems = [
    { name: 'ABOUT', path: '/about' },
    { name: 'PUBLICATIONS', path: '/publications' },
    { name: 'CONFERENCES', path: '/conferences' },
    { name: 'PROJECTS', path: '/projects' },
    { name: 'GALLERY', path: '/gallery' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold tracking-tight text-slate-800 flex items-center gap-2">
          <span className="text-2xl font-serif text-[#607099]">Eunho Jo</span>
        </Link>
        <div className="flex gap-4 md:gap-8">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-[10px] md:text-sm font-semibold transition-colors tracking-wide ${
                isActive(item.path) 
                ? 'text-[#607099] border-b-2 border-[#607099]' 
                : 'text-slate-500 hover:text-[#607099]'
              } pb-1`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
