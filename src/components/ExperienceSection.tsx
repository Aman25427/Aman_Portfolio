import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, MapPin, Building } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    title: "Software Engineering Intern",
    company: "Centre for Railway Information Systems (CRIS)",
    period: "Aug 2025 – Dec 2025",
    location: "On-site",
    description: "Completed a Software Engineering internship at CRIS, gaining hands-on exposure to enterprise IT systems, software development workflows, and real-world engineering practices.",
    type: "Internship"
  },
  {
    title: "Project Intern",
    company: "Fastcurve Services Pvt. Ltd.",
    period: "Jun 2025 – Jul 2025",
    location: "On-site",
    description: "Worked as a Project Intern at Fastcurve Services, contributing to live technical projects, software development tasks, and collaborative project execution in a corporate environment.",
    type: "Internship"
  },
];

const ExperienceSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        gsap.fromTo(card,
          {
            opacity: 0,
            y: 50,
            scale: 0.9
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: index * 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="section-padding">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            My professional journey and the experiences that shaped my skills
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="relative mb-8 last:mb-0"
            >
              {/* Timeline Line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-4 sm:left-6 top-16 w-0.5 h-full bg-gradient-to-b from-primary to-secondary opacity-30"></div>
              )}
              
              {/* Timeline Dot */}
              <div className="absolute left-2 sm:left-4 top-8 w-4 h-4 bg-primary rounded-full glow-pulse z-10"></div>

              {/* Card */}
              <div className="ml-8 sm:ml-12 glass-card p-4 sm:p-6 rounded-xl hover:scale-[1.02] transition-transform duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 space-y-2 md:space-y-0">
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1">{exp.title}</h3>
                    <div className="flex items-center text-primary font-semibold mb-2">
                      <Building className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span className="text-sm sm:text-base">{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end space-y-1">
                    <div className="flex items-center text-xs sm:text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
                      {exp.period}
                    </div>
                    <div className="flex items-center text-xs sm:text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                      {exp.location}
                    </div>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-3 text-sm sm:text-base">
                  {exp.description}
                </p>
                
                <div className="inline-block">
                  <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${
                    exp.type === 'Full-time' ? 'bg-primary/20 text-primary' :
                    exp.type === 'Internship' ? 'bg-secondary/20 text-secondary' :
                    'bg-accent/20 text-accent-foreground'
                  }`}>
                    {exp.type}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;