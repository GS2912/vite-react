
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Mail, MessageCircle, Instagram, Linkedin, Youtube, X } from "lucide-react";

// export const Contact = () => {
//   return (
//     <section id="contact" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
//       <div className="container mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//             Reach Out
//           </h2>
//           <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
//             Whether you have a question, want to collaborate, or just want to say hi, feel free to reach out. I'm always open to new connections and opportunities.
//           </p>
//         </div>

//         <div className="max-w-4xl mx-auto">
//           <div className="grid md:grid-cols-2 gap-8 mb-12">
//             <Card className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
//               <CardHeader>
//                 <div className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <Mail className="text-blue-600 dark:text-blue-400" size={32} />
//                 </div>
//                 <CardTitle className="text-xl text-gray-800 dark:text-gray-200">Email Me</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-gray-600 dark:text-gray-300 mb-4">
//                   Drop me a line for collaborations, opportunities, or just to say hello.
//                 </p>
//                 <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
//                   Send Email
//                 </Button>
//               </CardContent>
//             </Card>

//             <Card className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
//               <CardHeader>
//                 <div className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <MessageCircle className="text-blue-600 dark:text-blue-400" size={32} />
//                 </div>
//                 <CardTitle className="text-xl text-gray-800 dark:text-gray-200">Let's Chat</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-gray-600 dark:text-gray-300 mb-4">
//                   Connect with me on social media and join the conversation.
//                 </p>
//                 <Button variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-white">
//                   Follow Me
//                 </Button>
//               </CardContent>
//             </Card>
//           </div>

//           <div className="text-center">
//             {/* Social links with enhanced hover effects */}
//           <div className="flex items-center justify-center gap-8 animate-fade-in-up animation-delay-600">
//             {[
//               { Icon: Instagram, href: "https://www.instagram.com/thegarvsoni/", color: "hover:text-pink-500" },
//               { Icon: Linkedin, href: "https://www.linkedin.com/in/garv-soni-b6bb75258/", color: "hover:text-blue-600" },
//               { Icon: Youtube, href: "https://www.youtube.com/@thegarvsoni", color: "hover:text-red-500" },
//               { 
//                 Icon: () => (
//                   <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
//                     <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
//                   </svg>
//                 ), 
//                 href: "https://x.com/thegarvsoni", 
//                 color: "hover:text-gray-800 dark:hover:text-white" 
//               }
//             ].map(({ Icon, href, color }, index) => (
//               <a 
//                 key={index}
//                 href={href} 
//                 className={`text-gray-500 dark:text-gray-400 ${color} transition-all duration-300 transform hover:scale-125 hover:-translate-y-1 animate-bounce-in`}
//                 style={{ animationDelay: `${0.8 + index * 0.1}s` }}
//               >
//                 <Icon size={28} />
//               </a>
//             ))}
//           </div>
//           <p className="text-gray-600 dark:text-gray-400">
//              © 2025 garvsoni.com. All rights reserved.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Instagram, Linkedin, Youtube, MessageCircle, X } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Reach Out
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Whether you have a question, want to collaborate, or just want to say hi, feel free to reach out. I'm always open to new connections and opportunities.
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-12">
          <Card className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
            <CardHeader>
              <div className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-blue-600 dark:text-blue-400" size={32} />
              </div>
              <CardTitle className="text-xl text-gray-800 dark:text-gray-200">Email Me</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Drop me a line for collaborations, opportunities, or just to say hello.
              </p>
              <a href="mailto:garv@garvsoni.com">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Send Email
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          {/* Social links with enhanced hover effects */}
          <div className="flex items-center justify-center gap-8 animate-fade-in-up animation-delay-600 mb-4">
            {[
              { Icon: Instagram, href: "https://www.instagram.com/thegarvsoni/", color: "hover:text-pink-500" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/garv-soni-b6bb75258/", color: "hover:text-blue-600" },
              { Icon: Youtube, href: "https://www.youtube.com/@thegarvsoni", color: "hover:text-red-500" },
              {
                Icon: () => (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                ),
                href: "https://x.com/thegarvsoni",
                color: "hover:text-gray-800 dark:hover:text-white"
              }
            ].map(({ Icon, href, color }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-500 dark:text-gray-400 ${color} transition-all duration-300 transform hover:scale-125 hover:-translate-y-1 animate-bounce-in`}
                style={{ animationDelay: `${0.8 + index * 0.1}s` }}
              >
                <Icon size={28} />
              </a>
            ))}
          </div>

          <p className="text-gray-600 dark:text-gray-400">
            © 2025 garvsoni.com. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};
