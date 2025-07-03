import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Instagram, Youtube, X } from "lucide-react";
import Orb from './Orb';
import VariableProximity from "@/components/VariableProximity"; // adjust path if needed
import { useRef } from "react";
import GradientText from "./GradientText";


export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerRef = useRef<HTMLDivElement>(null);


  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center px-4 relative overflow-hidden -mt-[4px]">

       <div className="absolute inset-0 z-[0] overflow-hidden">
  <div className="absolute inset-0 z-[0] overflow-hidden">
  {/* Light mode video */}
  <video
    autoPlay
    muted
    loop
    playsInline
    className="w-full h-full object-cover transform translate-y-20 block dark:hidden"
  >
    <source src="https://videos.pexels.com/video-files/1722697/1722697-uhd_2560_1440_25fps.mp4" type="video/mp4" />
  </video>

  {/* Dark mode video */}
  <video
    autoPlay
    muted
    loop
    playsInline
    className="w-full h-full object-cover transform translate-y-20 hidden dark:block"
  >
    <source src="https://videos.pexels.com/video-files/5380054/5380054-uhd_2560_1440_30fps.mp4" type="video/mp4" />
  </video>
</div>

</div>


      {/* Animated background gradient */}
    {/* <div className="absolute inset-0 bg-white/30 dark:bg-black/30 z-0"></div> */}
      
      {/* Floating particles effect */}
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-float opacity-60"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-float-delayed opacity-40"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-teal-400 rounded-full animate-float-slow opacity-50"></div>
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-pink-400 rounded-full animate-float opacity-30"></div>
      </div> */}

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
                {/* ["#ffffff", "#e8ffff", "#f2e2bf" ,"#f49bb0", "#f2e2bf", "#e8ffff", "#ffffff"] */}
                <GradientText colors={["#ffffff", "#ffffff", "#ffffff", "#000000", "#ffffff", "#ffffff", "#ffffff"]

}>Garv Soni</GradientText>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white drop-shadow-[0_1px_5px_rgba(0,0,0,0.8)] animate-fade-in-up animation-delay-200">
  Software Engineer • Entrepreneur • Co-founder of{' '}
  <a 
    href="https://tacl.io" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-blue-600 transition-all duration-300 font-semibold underline decoration-blue-300 hover:decoration-purple-300"
  >
    Tacl.io
  </a>
</p>

          </div>
          {/* Social links with enhanced hover effects */}
<div className="flex items-center justify-center gap-6 animate-fade-in-up animation-delay-600">
  {[
    {
      Icon: Instagram,
      href: "https://www.instagram.com/thegarvsoni/",
      bg: "bg-pink-500 hover:bg-pink-600"
    },
    {
      Icon: Linkedin,
      href: "https://www.linkedin.com/in/garv-soni-b6bb75258/",
      bg: "bg-blue-600 hover:bg-blue-700"
    },
    {
      Icon: Youtube,
      href: "https://www.youtube.com/@thegarvsoni",
      bg: "bg-red-600 hover:bg-red-700"
    },
    {
      Icon: () => (
        <svg width="25" height="25" viewBox="0 0 24 24" fill="white">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      href: "https://x.com/thegarvsoni",
      bg: "bg-black hover:bg-neutral-800"
    }
  ].map(({ Icon, href, bg }, index) => (
    <a
      key={index}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`transition-all duration-300 transform hover:scale-110 animate-bounce-in`}
      style={{ animationDelay: `${0.8 + index * 0.1}s` }}
    >
      <div className={`w-10 h-10 rounded-full ${bg} flex items-center justify-center`}>
        <Icon size={25} color="white" />
      </div>
    </a>
  ))}
</div>



        </div>
      </div>
      {/* Scroll indicator */}
      {/* Scroll indicator */}
{/* Scroll indicator */}
<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
  <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
    <div className="w-1 h-3 bg-white rounded-full mt-2 animate-scroll-indicator" />
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
