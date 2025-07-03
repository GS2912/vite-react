// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { Calendar, ArrowRight, BookOpen, Youtube, Linkedin } from "lucide-react";

// export const BlogSection = () => {
//   const blogPosts = [
//     {
//       title: "Tacl Genie",
//       description:
//         "We created an AI Agent that can control the browser like a human. It can reason, and interact with websites according to your instructions & save the interactions for reuse (Watch DEMO).",
//       date: "2024-03-15",
//       categories: ["AI", "Product"],
//       readTime: "5 min read",
//       linkedInLink:
//         "https://www.linkedin.com/posts/taclio_testautomation-nocodeautomation-tacl-activity-7338338665875525633-2qga?utm_source=share&utm_medium=member_desktop",
//       ytLink: "https://youtu.be/t-GlwUICH9k?si=PpjC02tqAwK5Dc2d"
//     },
//     {
//       title: "Lifting 180Kg",
//       description: "Why every entrepreneur should lift.",
//       date: "2024-03-10",
//       categories: ["Entrepreneurship", "Fitness", "Self-Improvement"],
//       readTime: "3 min read",
//       linkedInLink:
//         "https://www.linkedin.com/posts/garv-soni-b6bb75258_fitness-strength-discipline-activity-7342450719884460034-AvTp?utm_source=share&utm_medium=member_desktop",
//       ytLink: "https://youtube.com/shorts/N7DvTln0JYw?si=qSNlJmDTI90v4401"
//     },
//     {
//       title: "Life Lesson",
//       description: "What my mom taught me, from a very early age?",
//       date: "2024-03-05",
//       categories: ["Self-Improvement", "Life"],
//       readTime: "4 min read",
//       linkedInLink:
//         "https://www.linkedin.com/posts/garv-soni-b6bb75258_iwd25-empowerher-iwd25-activity-7303900554785632256-wO8r?utm_source=share&utm_medium=member_desktop"
//     }
//   ];

//   return (
//     <section id="blog" className="py-20 px-4">
//       <div className="container mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//             Latest Insights
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Documenting the journey, sharing lessons learned, and inspiring others to push their own limits.
//           </p>
//         </div>

//         <div className="max-w-4xl mx-auto">
//           <div className="grid gap-6 mb-12">
//             {blogPosts.map((post, index) => (
//               <Card
//                 key={index}
//                 className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-0 bg-white/80 backdrop-blur-sm"
//               >
//                 <CardHeader>
//                   <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
//                     <div className="flex flex-wrap gap-2">
//                       {post.categories.map((category, i) => (
//                         <Badge
//                           key={i}
//                           variant="outline"
//                           className="bg-blue-100 text-blue-800 border-blue-200"
//                         >
//                           {category}
//                         </Badge>
//                       ))}
//                     </div>
//                     <div className="flex items-center gap-4 text-sm text-gray-500">
//                       <div className="flex items-center gap-1">
//                         <Calendar size={14} />
//                         {new Date(post.date).toLocaleDateString()}
//                       </div>
//                       <div className="flex items-center gap-1">
//                         <BookOpen size={14} />
//                         {post.readTime}
//                       </div>
//                     </div>
//                   </div>

//                   <CardTitle className="text-xl hover:text-blue-600 transition-colors cursor-pointer">
//                     {post.title}
//                   </CardTitle>
//                   <CardDescription className="text-gray-600 leading-relaxed">
//                     {post.description}
//                   </CardDescription>
//                 </CardHeader>

//                 <CardContent className="flex items-center justify-between flex-wrap gap-4">
//                   <div className="flex gap-3">
//                     {post.ytLink && (
//                       <a
//                         href={post.ytLink}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="text-red-600 hover:text-red-800 transition"
//                         title="Watch on YouTube"
//                       >
//                         <Youtube size={22} />
//                       </a>
//                     )}
//                     {post.linkedInLink && (
//                       <a
//                         href={post.linkedInLink}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="text-blue-700 hover:text-blue-900 transition"
//                         title="View on LinkedIn"
//                       >
//                         <Linkedin size={22} />
//                       </a>
//                     )}
//                   </div>

//                   <Button
//                     variant="ghost"
//                     className="text-blue-600 hover:text-blue-800 p-0"
//                   >
//                     Read More <ArrowRight className="ml-2" size={16} />
//                   </Button>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>

//           <div className="text-center">
//             <Button
//               size="lg"
//               variant="outline"
//               className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3"
//             >
//               View All Posts <ArrowRight className="ml-2" size={20} />
//             </Button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };


import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight, BookOpen, Youtube, Linkedin } from "lucide-react";

export const BlogSection = () => {
  const blogPosts = [
    {
      title: "Tacl Genie",
      description:
        "We created an AI Agent that can control the browser like a human. It can reason, and interact with websites according to your instructions & save the interactions for reuse (Watch DEMO).",
      date: "2024-03-15",
      categories: ["AI", "Product"],
      readTime: "5 min read",
      linkedInLink:
        "https://www.linkedin.com/posts/taclio_testautomation-nocodeautomation-tacl-activity-7338338665875525633-2qga",
      ytLink: "https://youtu.be/t-GlwUICH9k?si=PpjC02tqAwK5Dc2d"
    },
    {
      title: "Lifting 180Kg",
      description: "Why every entrepreneur should lift.",
      date: "2024-03-10",
      categories: ["Entrepreneurship", "Fitness", "Self-Improvement"],
      readTime: "8 min read",
      linkedInLink:
        "https://www.linkedin.com/posts/garv-soni-b6bb75258_fitness-strength-discipline-activity-7342450719884460034-AvTp",
      ytLink: "https://youtube.com/shorts/N7DvTln0JYw?si=qSNlJmDTI90v4401"
    },
    {
      title: "Life Lesson",
      description: "What my mom taught me, from a very early age?",
      date: "2024-03-05",
      categories: ["Self-Improvement", "Life"],
      readTime: "6 min read",
      linkedInLink:
        "https://www.linkedin.com/posts/garv-soni-b6bb75258_iwd25-empowerher-iwd25-activity-7303900554785632256-wO8r"
    }
  ];

  return (
    <section id="blog" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-500">
  Latest Insights
</h2>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
  Documenting the journey, sharing lessons learned, and inspiring others to push their own limits.
</p>

        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6 mb-12">
            {blogPosts.map((post, index) => {
              const mainLink = post.linkedInLink || post.ytLink;

              return (
                <Card
  key={index}
  className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
>
  <CardHeader>
    <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
      <div className="flex flex-wrap gap-2">
        {post.categories.map((category, i) => (
          <Badge
            key={i}
            variant="outline"
            className="bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900 dark:text-blue-100 dark:border-blue-700"
          >
            {category}
          </Badge>
        ))}
      </div>
      <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
        <div className="flex items-center gap-1">
          <Calendar size={14} />
          {new Date(post.date).toLocaleDateString()}
        </div>
        <div className="flex items-center gap-1">
          <BookOpen size={14} />
          {post.readTime}
        </div>
      </div>
    </div>

    <CardTitle className="text-xl hover:text-blue-600 transition-colors cursor-pointer dark:text-white">
      {post.title}
    </CardTitle>
    <CardDescription className="text-gray-600 dark:text-gray-300 leading-relaxed">
      {post.description}
    </CardDescription>
  </CardHeader>

  <CardContent className="flex items-center justify-between flex-wrap gap-4">
    <div className="flex gap-3">
      {post.ytLink && (
        <a
          href={post.ytLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600 hover:text-red-800 transition"
          title="Watch on YouTube"
        >
          <Youtube size={22} />
        </a>
      )}
      {post.linkedInLink && (
        <a
          href={post.linkedInLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300 transition"
          title="View on LinkedIn"
        >
          <Linkedin size={22} />
        </a>
      )}
    </div>

    {mainLink && (
      <a
        href={mainLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          variant="ghost"
          className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 p-0"
        >
          Read More <ArrowRight className="ml-2" size={16} />
        </Button>
      </a>
    )}
  </CardContent>
</Card>

              );
            })}
          </div>

          <div className="text-center">
            <a
              href="https://www.linkedin.com/in/garv-soni-b6bb75258/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
  size="lg"
  variant="outline"
  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white 
             dark:border-blue-400 dark:text-blue-300 dark:hover:bg-blue-500 dark:hover:text-white 
             px-8 py-3"
>
  View All Posts <ArrowRight className="ml-2" size={20} />
</Button>

            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
