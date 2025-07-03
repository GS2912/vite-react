
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Zap, Shield, Clock, Sparkle, PiggyBank, HandCoins, CircleDollarSign } from "lucide-react";

export const FeaturedWork = () => {
  const features = [
    {
      icon: Zap,
            title: "No-Code Platform",
      description: "Empowering teams to create tests without writing a single line of code"
    },{
      icon: Sparkle,
      title: "AI-Powered Assistance",
      description: "Transform natural language into test cases and gain actionable insights with AI."
    },
    {
      icon: ExternalLink,
      title: "Built on Playwright",
      description: "Harness the power of Playwright for reliable, scalable cross-browser testing."
    },{
      icon: Shield,
      title: "Adaptive Automation",
      description: "Automation that evolves with your app, reducing maintenance and boosting reliability."
    },
    {
      icon: Clock,
      title: "Accelerated Testing Cycles",
      description: "Dramatically cut down testing time with optimized workflows."
    },
    {
      icon: CircleDollarSign,
      title: "Cost-Effective Solution",
      description: "Deliver high-quality software while minimizing testing expenses."
    }
    ];

  return (
    // <section id="work" className="py-20 px-4 bg-white/50">
    //   <div className="container mx-auto">
    //     <div className="text-center mb-16">
    //       <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
    //         Featured Work
    //       </h2>
    //       <p className="text-xl text-gray-600 max-w-3xl mx-auto">
    //         Building products that solve real problems and empower teams to achieve more.
    //       </p>
    //     </div>

    //     <div className="max-w-6xl mx-auto">
    //       <Card className="overflow-hidden shadow-2xl border-0 bg-gradient-to-br from-white to-blue-50">
    //         <CardHeader className="pb-6">
    //           <div className="flex items-center justify-between mb-4">
    //             <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">
    //               Co-Founder & Engineer
    //             </Badge>
    //             <Button variant="outline" size="sm" asChild>
    //               <a href="https://tacl.io" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
    //                 Visit Tacl.io <ExternalLink size={16} />
    //               </a>
    //             </Button>
    //           </div>
    //           <CardTitle className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
    //             Tacl.io
    //           </CardTitle>
    //           <CardDescription className="text-lg text-gray-600">
    //             A no-code SaaS platform for automated E2E testing that empowers teams to test faster and smarter.
    //           </CardDescription>
    //         </CardHeader>
    //         <CardContent>
    //           <div className="grid md:grid-cols-3 gap-6 mb-8">
    //             {features.map((feature, index) => (
    //               <div key={index} className="flex items-start gap-3">
    //                 <div className="bg-gradient-to-r from-blue-100 to-purple-100 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
    //                   <feature.icon className="text-blue-600" size={20} />
    //                 </div>
    //                 <div>
    //                   <h4 className="font-semibold text-gray-800 mb-1">{feature.title}</h4>
    //                   <p className="text-sm text-gray-600">{feature.description}</p>
    //                 </div>
    //               </div>
    //             ))}
    //           </div>
    //           <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
    //             <h4 className="text-xl font-bold mb-3">The Vision</h4>
    //             <p className="leading-relaxed">
    //               At Tacl.io, we're democratizing test automation. Our platform removes the technical barriers that prevents manual testers &
    //               teams from implementing comprehensive testing strategies, enabling everyone to contribute to quality assurance 
    //               regardless of their coding background.
    //             </p>
    //           </div>
    //         </CardContent>
    //       </Card>
    //     </div>
    //   </div>
    // </section>
    <section id="work" className="py-20 px-4 bg-white/50 dark:bg-gray-900">
  <div className="container mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Featured Work
      </h2>
      <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        Building products that solve real problems and empower teams to achieve more.
      </p>
    </div>

    <div className="max-w-6xl mx-auto">
      <Card className="overflow-hidden shadow-2xl border-0 bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-900">
        <CardHeader className="pb-6">
          <div className="flex items-center justify-between mb-4">
            <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900 dark:text-blue-100 dark:border-blue-700">
              Co-Founder & Engineer
            </Badge>
            <Button variant="outline" size="sm" asChild>
              <a href="https://tacl.io" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                Visit Tacl.io <ExternalLink size={16} />
              </a>
            </Button>
          </div>
          <CardTitle className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Tacl.io
          </CardTitle>
          <CardDescription className="text-lg text-gray-600 dark:text-gray-400">
            A no-code SaaS platform for automated E2E testing that empowers teams to test faster and smarter.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <feature.icon className="text-blue-600 dark:text-blue-300" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-1">{feature.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
            <h4 className="text-xl font-bold mb-3">The Vision</h4>
            <p className="leading-relaxed text-white/90">
              At Tacl.io, we're democratizing test automation. Our platform removes the technical barriers that prevents manual testers & teams from implementing comprehensive testing strategies, enabling everyone to contribute to quality assurance regardless of their coding background.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</section>

  );
};
