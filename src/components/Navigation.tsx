import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import CircularText from './circularText';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const navItems = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Work', id: 'work' },
    { name: 'Blog', id: 'blog' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl z-50 border-b border-gray-200/50 dark:border-gray-700/50 shadow-lg shadow-gray-200/20 dark:shadow-gray-900/20 transition-all duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <div className="relative group">
            <div className="text-2xl font-bold cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-0.5" onClick={() => scrollToSection('hero')}>
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent animate-gradient-text bg-300% hover:from-purple-600 hover:via-teal-600 hover:to-blue-600 transition-all duration-300">
                Garv Soni
              </span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)} 
                className="relative px-4 py-2 text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-all duration-300 group rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transform hover:scale-105 hover:-translate-y-0.5 animate-fade-in-nav border border-transparent hover:border-gray-200 dark:hover:border-gray-700"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="relative z-10 font-medium">{item.name}</span>
                {/* Hover underline effect */}
                <div className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-3/4 transform -translate-x-1/2 rounded-full"></div>
              </button>
            ))}
            
            {/* Theme Toggle with enhanced styling */}
            <div className="ml-4">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <button 
              className="relative p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transform hover:scale-110 hover:-translate-y-0.5 border border-transparent hover:border-gray-200 dark:hover:border-gray-700"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="transition-transform duration-300">
                {isOpen ? <X size={24} className="rotate-90 transition-transform duration-300" /> : <Menu size={24} />}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen 
            ? 'max-h-96 opacity-100 translate-y-0' 
            : 'max-h-0 opacity-0 -translate-y-4'
        }`}>
          <div className="border-t border-gray-200/50 dark:border-gray-700/50 mt-4">
            <div className="flex flex-col space-y-1 pt-4 pb-2">
              {navItems.map((item, index) => (
                <button 
                  key={item.id}
                  onClick={() => scrollToSection(item.id)} 
                  className="relative text-left px-4 py-3 text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-all duration-300 group rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transform hover:translate-x-2 animate-slide-in-mobile border border-transparent hover:border-gray-200 dark:hover:border-gray-700"
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    animationFillMode: 'both'
                  }}
                >
                  <span className="relative z-10 font-medium">{item.name}</span>
                  {/* Mobile hover effect */}
                  <div className="absolute left-0 top-1/2 w-1 h-0 bg-gradient-to-b from-blue-600 to-purple-600 transition-all duration-300 group-hover:h-8 transform -translate-y-1/2 rounded-full"></div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes gradient-text {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes fade-in-nav {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-in-mobile {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-gradient-text {
          animation: gradient-text 4s ease infinite;
          background-size: 300% 300%;
        }
        
        .animate-fade-in-nav {
          animation: fade-in-nav 0.6s ease-out forwards;
        }
        
        .animate-slide-in-mobile {
          animation: slide-in-mobile 0.5s ease-out forwards;
          opacity: 0;
        }
        
        .bg-300% {
          background-size: 300% 300%;
        }
      `}</style>
    </nav>
  );
};