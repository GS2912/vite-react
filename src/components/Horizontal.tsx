import React, { useRef } from 'react'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import styles from './horizontal-styles.module.css'
import { Code, Zap, Target, Users } from 'lucide-react'

const traits = [
  {
    icon: Code,
    title: "Software Engineer",
    description: "Garv is the founding engineer at Tacl.io, where he plays a pivotal role in designing and scaling its technical infrastructure. His expertise includes Full-Stack Development, Cloud-Native Architectures, Kubernetes, Machine Learning, Deep Learning & Agentic workflows."
  },
  {
    icon: Zap,
    title: "Entrepreneur",
    description: "Garv has Co-founded Tacl.io (a no-code SaaS platform for test automation, that empowers teams to test faster and smarter) in 2024. He is also the COO of SlashIO Pvt. Ltd."
  },
  {
    icon: Target,
    title: "Strength Trainer",
    description: "Garv is a dedicated strength and endurance athlete. He has built impressive strength - deadlifting 170 kg, squatting 120 kg, and benching 90 kg at just 20 years old. He regularly competes in marathons and has won awards in arm-wrestling tournaments."
  },
  {
    icon: Users,
    title: "Content Creator",
    description: "Garv has been creating content since 2023 and has 1.3k+ followers on LinkedIn. He documents his journey of building products, sharing insights on software engineering, entrepreneurship, and personal growth."
  }
];

interface PageProps {
  offset: number;
  gradient: string;
  onClick: () => void;
  title: string;
  description: string;
  Icon: any;
}

const Page = ({ offset, gradient, onClick, title, description, Icon }: PageProps) => (
  <>
    <ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
      <div className={styles.slopeBegin} />
    </ParallaxLayer>

    <ParallaxLayer offset={offset} speed={0.6} onClick={onClick}>
  <div className={styles.slopeEnd + ' ' + styles[gradient]} />
</ParallaxLayer>

<ParallaxLayer
  offset={offset}
  speed={0}
  onClick={onClick}
  className="z-30 cursor-pointer"
>
  <div className="w-1/2 h-full ml-auto" />
</ParallaxLayer>


<ParallaxLayer offset={offset} speed={0.6}>
  <div className="absolute z-20 left-[65%] bottom-[6%] transform -rotate-[39deg] origin-bottom-left">


    <h3 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-xl tracking-wide whitespace-nowrap">
  {title}
</h3>

  </div>
</ParallaxLayer>


    <ParallaxLayer className={styles.text} offset={offset} speed={0.4}>
      {/* Content card on blue area */}
      <div className="max-w-md ml-24 p-8 bg-white/90 backdrop-blur-md rounded-xl shadow-xl">
        <div className="mb-4 flex items-center justify-center">
          <Icon size={36} className="text-gray-700" />
        </div>
        <p className="text-gray-700 text-sm leading-relaxed">{description}</p>

        {offset === 0 && (
          <div className="mt-4 text-center text-xs text-gray-600 animate-pulse">
            Click on the slanting background to see more →
          </div>
        )}
      </div>
    </ParallaxLayer>
  </>
)


export default function HorizontalAbout() {
  const parallax = useRef<IParallax>(null);
  const scroll = (to: number) => parallax.current?.scrollTo(to);

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Who is Garv?
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          He's a software engineer, a budding entrepreneur, and a relentless self-improver. He is the co-founder of <a href="https://tacl.io" className="underline text-blue-500">tacl.io</a>, a no-code test automation platform. Beyond building products, he creates content to document his journey. His aim is to push limits, evolve, and inspire others to do the same.
        </p>
      </div>

      <div className="relative h-[500px] overflow-hidden rounded-2xl">
        <Parallax className={styles.container} ref={parallax} pages={4} horizontal>
          {traits.map((trait, i) => (
            <Page
              key={i}
              offset={i}
              gradient={['pink', 'teal', 'tomato', 'pink'][i % 4]}
              onClick={() => scroll((i + 1) % traits.length)}
              title={trait.title}
              description={trait.description}
              Icon={trait.icon}
            />
          ))}
        </Parallax>
      </div>

      <div className="mt-16 max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg">
        <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">Garv's Mindset</h3>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Whether it's tackling complex engineering challenges, pushing physical limits through strength and endurance training, 
          or sharing insights on breaking personal and professional barriers, his goal is simple: <span className="font-bold">to level up constantly</span> and 
          inspire others to do the same.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Inspired by Rock Lee (a fictional martial artist), he believes in the power of pure effort—no shortcuts, no excuses, just the will to keep improving.
        </p>
      </div>
    </section>
  );
}
