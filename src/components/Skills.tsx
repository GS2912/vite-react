import { useState, useEffect, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Dumbbell, Users, ChevronRight, Database, Brain, Cpu, Globe, Server, Layers, FileCode, Zap } from "lucide-react";
import TiltedCard from './TitledCard';
import TiltCard from "./TiltCard";
  

type SkillCategory = 'tech' | 'fitness' | 'leadership';

const skillsData = {
  tech: {
    title: "Tech Arsenal",
    icon: Code,
    gradient: "from-blue-500 to-cyan-500",
    skills: [
      { name: "Java", level: 90, icon: "☕", bgColor: "from-orange-500 to-red-500", src: "https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/1ac69ce5fbc389725f16f989fa53c62d6e1b4883/programming%20languages/java.svg" },
      { name: "Python", level: 88, icon: "🐍", bgColor: "from-blue-500 to-yellow-500", src: "https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/1ac69ce5fbc389725f16f989fa53c62d6e1b4883/programming%20languages/python.svg" },
      { name: "JavaScript", level: 92, icon: "JS", bgColor: "from-yellow-400 to-yellow-600", src: "https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/1ac69ce5fbc389725f16f989fa53c62d6e1b4883/programming%20languages/javascript.svg" },
      { name: "TypeScript", level: 89, icon: "TS", bgColor: "from-blue-600 to-blue-800", src: "https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/1ac69ce5fbc389725f16f989fa53c62d6e1b4883/programming%20languages/typescript.svg" },
      { name: "MySQL", level: 89, icon: "TS", bgColor: "from-blue-600 to-blue-800", src: "https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/7c0ac2ceb9f9d24992ec393d11fa7337d2f92466/databases/mysql.svg" },
      { name: "PostgreSQL", level: 85, icon: "🐘", bgColor: "from-blue-700 to-blue-900", src: "https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/7c0ac2ceb9f9d24992ec393d11fa7337d2f92466/databases/postgresql.svg" },
      {name: "Reddis", level: 84, icon: "🗄️", bgColor:"ferg", src:"https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/7c0ac2ceb9f9d24992ec393d11fa7337d2f92466/databases/redis.svg"},
      { name: "MongoDB", level: 83, icon: "🍃", bgColor: "from-green-600 to-green-800", src: "https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/7c0ac2ceb9f9d24992ec393d11fa7337d2f92466/databases/mongodb.svg" },
      { name: "React.js", level: 94, icon: "⚛️", bgColor: "from-cyan-400 to-cyan-600", src:"https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/7c0ac2ceb9f9d24992ec393d11fa7337d2f92466/frameworks/react.svg" },
      { name: "Next.js", level: 87, icon: "▲", bgColor: "from-gray-700 to-black", src: "/lovable-uploads/next-logo.png" },
      { name: "Docker", level: 86, icon: "🐳", bgColor:"", src:"https://www.svgrepo.com/show/448221/docker.svg"},
      { name: "Kubernetes", level: 78, icon: "☸️", bgColor: "from-blue-500 to-purple-600", src:"https://www.svgrepo.com/show/448233/kubernetes.svg" },
      {name:"Digital Ocean", level: 84, icon: "🌊", bgColor:"", src:"https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/7c0ac2ceb9f9d24992ec393d11fa7337d2f92466/social%20icons/digitalocean.svg" },
      {name:"Playwright", level: 84, icon: "🌊", bgColor:"", src:"https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/2/playwright-y50bnthygb3rvsppvkm9e.png/playwright-q55xzpenhgjsodksybst.png?_a=DATAdtAAZAA0"},
      { name: "Huggingface Transformers", level: 82, icon: "🤖", bgColor: "from-purple-500 to-pink-500", src:"https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/huggingface-color.png" },
      // { name: "Deep Learning", level: 80, icon: "🧠", bgColor: "from-indigo-500 to-purple-700", src:"https://cdn-icons-png.flaticon.com/512/2103/2103832.png" },
      {name: "Chroma", level: 82, icon: "🤖", bgColor: "from-purple-500 to-pink-500",src:"/lovable-uploads/chroma.png"},
      { name: "PyTorch", level: 81, icon: "🔥", bgColor: "from-orange-600 to-red-600", src:"https://www.svgrepo.com/show/354240/pytorch.svg" },
      { name: "TensorFlow", level: 79, icon: "📊", bgColor: "from-orange-500 to-yellow-500", src:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tensorflow_logo.svg/1200px-Tensorflow_logo.svg.png" },
      { name: "Langchain", level: 85, icon: "🤖", bgColor: "from-emerald-500 to-teal-600", src:"/lovable-uploads/langchain.png" },
      { name: "MCP", level: 83, icon: "🔗", bgColor: "from-slate-600 to-slate-800", src:"https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/light/mcp.png" }
    ]
  },
  fitness: {
    title: "Physical Power",
    icon: Dumbbell,
    gradient: "from-red-500 to-orange-500",
    achievements: [
      { exercise: "Deadlift", record: "180 KG", description: "Max lift" },
      { exercise: "Squat", record: "120 KG", description: "Max lift" },
      { exercise: "Bench Press", record: "90 KG", description: "Max lift" },
      { exercise: "Shoulder Press", record: "32.5 KG", description: "Each hand × 6 reps" },
      { exercise: "Endurance Run", record: "21 KMs", description: "4 half marathons completed" }
    ]
  },
  leadership: {
    title: "Leadership & Soft Skills",
    icon: Users,
    gradient: "from-purple-500 to-pink-500",
    skills: [
      { name: "Communication", level: 92 },
      { name: "Team Building", level: 88 },
      { name: "Collaboration", level: 90 },
      { name: "Problem Solving", level: 95 },
      { name: "Time Management", level: 89 },
      { name: "Adaptability", level: 91 },
      { name: "Critical Thinking", level: 93 }
    ]
  }
};

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('tech');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const categories: { key: SkillCategory; label: string }[] = [
    { key: 'tech', label: 'Tech' },
    { key: 'fitness', label: 'Fitness' },
    { key: 'leadership', label: 'Leadership' }
  ];

  const renderTechSkills = () => (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0">
      {skillsData.tech.skills.map((skill, index) => (
        <div
          key={skill.name}
          className={`transform transition-all duration-700 aspect-square ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          <div className="w-full h-full">
            <TiltedCard
              imageSrc={skill.src || "https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"}
              altText="Kendrick Lamar - GNX Album Cover"
              captionText={skill.name}
              containerHeight="100%"
              containerWidth="100%"
              imageHeight="80%"
              imageWidth="80%"
              rotateAmplitude={40}
              scaleOnHover={1.5}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
            />
          </div>
        </div>
      ))}
    </div>
  );

  const renderFitnessAchievements = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {skillsData.fitness.achievements.map((achievement, index) => (
        <div
          key={achievement.exercise}
          className={`transform transition-all duration-700 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
          }`}
          style={{ transitionDelay: `${index * 200}ms` }}
        >
          <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-none bg-gradient-to-br from-red-50 to-orange-50 hover:from-red-100 hover:to-orange-100 dark:from-red-900/20 dark:to-orange-900/20 dark:hover:from-red-800/30 dark:hover:to-orange-800/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10 group-hover:from-red-500/20 group-hover:to-orange-500/20 transition-all duration-300" />
            <CardContent className="p-6 relative z-10">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-gray-800 dark:text-gray-200">{achievement.exercise}</h4>
                <Dumbbell className="text-red-500 h-5 w-5" />
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-2">
                {achievement.record}
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">{achievement.description}</p>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
  
const renderLeadershipSkills = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
    {skillsData.leadership.skills.map((skill, index) => (
      <div
        key={skill.name}
        className={`transform transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        } ${index === 6 ? 'md:col-start-2' : ''}`}
        style={{ transitionDelay: `${index * 150}ms` }}
      >
        <TiltCard skill={skill.name}/>
      </div>
    ))}
  </div>
);

  const renderContent = () => {
    switch (activeCategory) {
      case 'tech':
        return renderTechSkills();
      case 'fitness':
        return renderFitnessAchievements();
      case 'leadership':
        return renderLeadershipSkills();
      default:
        return null;
    }
  };

  const activeData = skillsData[activeCategory];
  const IconComponent = activeData.icon;

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-200 dark:to-gray-400 bg-clip-text text-transparent">
            Skills & Achievements
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            As of 2025 my major focus is in technology, strength, and leadership
          </p>
        </div>

        {/* Category Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-2 shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="flex space-x-2">
              {categories.map(({ key, label }) => {
                const isActive = activeCategory === key;
                const data = skillsData[key];
                const Icon = data.icon;
                
                return (
                  <button
                    key={key}
                    onClick={() => setActiveCategory(key)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                      isActive
                        ? `bg-gradient-to-r ${data.gradient} text-white shadow-lg transform scale-105`
                        : 'text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700'
                    }`}
                  >
                    <Icon className={`h-5 w-5 ${isActive ? 'text-white' : 'text-gray-500 dark:text-gray-400'}`} />
                    <span>{label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="mb-8">
          <div className={`text-center mb-12 transform transition-all duration-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
            <div className="flex justify-center items-center space-x-3 mb-4">
              <div className={`p-3 rounded-2xl bg-gradient-to-r ${activeData.gradient}`}>
                <IconComponent className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-200">{activeData.title}</h3>
            </div>
          </div>
          
          <div className="transition-all duration-500 ease-in-out">
            {renderContent()}
          </div>
        </div>
      </div>
    </section>
  );
};
