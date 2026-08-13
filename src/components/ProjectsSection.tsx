import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Career-Pilot-AI",
    description:
      "AI-powered interview platform built with the MERN stack that generates role-specific interview questions through resume parsing and prompt engineering, with real-time AI evaluation, feedback, scoring, and performance insights.",
    techStack: ["React", "Node.js", "MongoDB", "OpenAI API", "Express"],
    github: "https://github.com/Aman25427/Career-Pilot-AI",
    demo: "https://carrierpilot-ai.vercel.app/",
    image: "🤖",
  },
  {
    title: "SidCup Family Golf Website",
    description:
      "Modern, responsive website for a golf course featuring smooth animations, interactive elements, and optimized user experience with visually engaging design and seamless navigation.",
    techStack: ["HTML5", "CSS3", "JavaScript", "GSAP", "Responsive Design"],
    github: "https://github.com/Aman25427/SidCup-Family-Golf-Website",
    demo: "https://golfverse.netlify.app/",
    image: "⛳",
  },
  {
    title: "CodeQA",
    description:
      "RAG-powered AI web application that enables users to upload a codebase and ask natural language questions, delivering answers backed by exact code snippets, file paths, and line numbers for accurate code understanding.",
    techStack: ["React", "TypeScript", "PostgreSQL", "pgvector", "Google Gemini"],
    github: "https://github.com/Aman25427/Codebase-Q-A-with-Proof",
    demo: "https://codebaseqap.netlify.app/",
    image: "🧠",
  },
];

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 60,
            rotateX: 15,
          },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 1,
            delay: index * 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="section-padding bg-background-secondary/30"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            A collection of projects that showcase my skills and passion for development
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="glass-card rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 group"
            >
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-4 leading-relaxed text-sm sm:text-base">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium bg-accent/20 text-accent-foreground rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => window.open(project.github, "_blank")}
                    className="w-full flex-1 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium h-9 px-3 bg-gradient-to-r from-cyan-400 to-pink-500 text-black hover:opacity-90 transition"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </button>

                  <button
                    onClick={() => window.open(project.demo, "_blank")}
                    className="w-full flex-1 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium h-9 px-3 border border-white/20 bg-white/5 text-white hover:bg-white/10 transition"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="neon-secondary"
            size="lg"
            onClick={() => window.open("https://github.com/Aman25427", "_blank")}
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;