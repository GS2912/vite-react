
import { Card, CardContent } from "@/components/ui/card";
import { Code, Zap, Target, Users } from "lucide-react";

export const About = () => {
  const traits = [
    {
      icon: Code,
      title: "Software Engineer",
      description: "Garv is the founding engineer at Tacl.io, where he plays a pivotal role in designing and scaling its technical infrastructure. His expertise includes Full-Stack Development, Cloud-Native Architectures, Kubernetes, Machine Learning, Deep Learning & Agentic workflows."
    },
    {
      icon: Zap,
      title: "Entrepreneur",
      description: "Garv has Co-founded Tacl.io (a no-code SaaS platform for test automation, that empowers teams to test faster and smarter) in 2024. He is also the COO of SlashIO Pvt. Ltd. "
    },
    {
      icon: Target,
      title: "Strength Trainer",
      description: "Garv is a dedicated strength and endurance athlete. He has built impressive strength - deadlifting 180 kg, squatting 120 kg, and benching 90 kg at just 20 years old. Beyond raw power, he maintains solid endurance. He regularly competes in marathons and has won a few awards in arm-wrestling tournaments."
    },
    {
      icon: Users,
      title: "Content Creator",
      description: "Garv has been creating content since 2023 and has 1.4k+ followers on LinkedIn. He documents his journey of building products, sharing insights on software engineering, entrepreneurship, and personal growth."
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400">
  Who is Garv?
</h2>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
  He's a software engineer, a budding entrepreneur, and a relentless self-improver. He is the co-founder of <a href="https://tacl.io" className="text-blue-600 dark:text-blue-400 underline underline-offset-2 hover:text-blue-700 dark:hover:text-blue-300">tacl.io</a> (a no-code SaaS platform for test automation, that empowers teams to test faster and smarter). Beyond building products, he creates content to document his journey. His aim through his content is to push limits, evolve and inspire others to do the same.
</p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {traits.map((trait, index) => (
            <Card
  key={index}
  className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border-0 
             bg-white/80 dark:bg-white/10 backdrop-blur-sm"
>
  <CardContent className="p-6">
    <div className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
      <trait.icon className="text-blue-600 dark:text-blue-400" size={32} />
    </div>
    <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">{trait.title}</h3>
    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{trait.description}</p>
  </CardContent>
</Card>

          ))}
        </div>

        <div className="bg-white/80 dark:bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg">
  <div className="max-w-4xl mx-auto">
    <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 dark:text-white">Garv's Mindset</h3>
    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
      Whether it's tackling complex engineering challenges, pushing physical limits through strength and endurance training, 
      or sharing insights on breaking personal and professional barriers, his goal is simple: <span className="font-bold dark:text-white">to level up constantly</span> and 
      inspire others to do the same.
    </p>
    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
      Inspired by Ippo Makunouchi (a fictional boxer), He believe in the power of pure effort, no shortcuts, no excuses, just the will to keep improving.
    </p>
  </div>
</div>


        {/* Long image below mindset */}
<div className="mt-12 mx-auto group">
  <img
    src="/lovable-uploads/banner.png"
    alt="Garv Inspiration Visual"
    className="rounded-xl object-cover shadow-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500"
    width={20000}
    height={30000}
  />
</div>

      </div>
    </section>
  );
};
