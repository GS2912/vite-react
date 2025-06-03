import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Instagram, Youtube, X } from "lucide-react";
import Orb from './Orb';

export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-teal-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20 animate-gradient-shift"></div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-float opacity-60"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-float-delayed opacity-40"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-teal-400 rounded-full animate-float-slow opacity-50"></div>
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-pink-400 rounded-full animate-float opacity-30"></div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">

          {/* Profile picture with enhanced animations */}
          <div className="flex justify-center animate-fade-in-up animation-delay-400">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-gradient-rotate"></div>
              <div className="relative">
                <img 
                  src="/lovable-uploads/picofme (1).png" 
                  alt="Garv Soni" 
                  className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-2xl transform group-hover:scale-105 transition-all duration-300 animate-pulse-subtle"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400/20 via-purple-400/20 to-teal-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>

          {/* Main heading with animated gradient */}
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-bold leading-tight animate-fade-in-up">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent animate-gradient-text bg-300% bg-gradient-to-r">
                Garv Soni
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 animate-fade-in-up animation-delay-200">
              <span className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-in">
                Software Engineer • Entrepreneur • Co-founder of{' '}
                <a 
                  href="https://tacl.io" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-blue-600 transition-all duration-300 font-semibold underline decoration-blue-300 hover:decoration-purple-300"
                >
                  Tacl.io
                </a>
              </span>
            </p>
          </div>

          {/* Social links with enhanced hover effects */}
          <div className="flex items-center justify-center gap-8 animate-fade-in-up animation-delay-600">
            {[
              { Icon: Instagram, href: "#", color: "hover:text-pink-500" },
              { Icon: Linkedin, href: "#", color: "hover:text-blue-600" },
              { Icon: Youtube, href: "#", color: "hover:text-red-500" },
              { 
                Icon: () => (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                ), 
                href: "#", 
                color: "hover:text-gray-800 dark:hover:text-white" 
              }
            ].map(({ Icon, href, color }, index) => (
              <a 
                key={index}
                href={href} 
                className={`text-gray-500 dark:text-gray-400 ${color} transition-all duration-300 transform hover:scale-125 hover:-translate-y-1 animate-bounce-in`}
                style={{ animationDelay: `${0.8 + index * 0.1}s` }}
              >
                <Icon size={28} />
              </a>
            ))}
          </div>

        </div>
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mt-2 animate-scroll-indicator"></div>
            </div>
          </div>

      <style>{`
        @keyframes gradient-text {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes gradient-text-slow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes gradient-rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
          70% { transform: scale(0.9); }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes pulse-subtle {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
        
        @keyframes scroll-indicator {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          50% {
            opacity: 1;
            transform: translateY(0px);
          }
          100% {
            opacity: 0;
            transform: translateY(10px);
          }
        }
        
        .animate-gradient-text {
          animation: gradient-text 3s ease infinite;
          background-size: 300% 300%;
        }
        
        .animate-gradient-text-slow {
          animation: gradient-text-slow 4s ease infinite;
          background-size: 300% 300%;
        }
        
        .animate-gradient-shift {
          animation: gradient-shift 8s ease infinite;
          background-size: 400% 400%;
        }
        
        .animate-gradient-rotate {
          animation: gradient-rotate 6s linear infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite 2s;
        }
        
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite 1s;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-bounce-in {
          animation: bounce-in 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-pulse-subtle {
          animation: pulse-subtle 4s ease-in-out infinite;
        }
        
        .animate-scroll-indicator {
          animation: scroll-indicator 2s ease-in-out infinite;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        
        .bg-300% {
          background-size: 300% 300%;
        }
      `}</style>
    </section>
  );
};