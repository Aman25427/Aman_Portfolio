import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        {
          opacity: 0,
          x: -50,
          scale: 0.8,
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        contentRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-padding bg-background-secondary/50"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Profile Image */}
          <div
            ref={imageRef}
            className="flex justify-center lg:justify-start order-2 lg:order-1"
          >
            <div className="relative">
              <div className="w-64 sm:w-80 h-64 sm:h-80 rounded-full glass-card p-2 glow-pulse">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <img
                    src="pics.png"
                    alt="Aman Kumar Singhania"
                    className="w-full h-full object-cover rounded-full bg-black transition duration-500"
                  />
                </div>
              </div>
              {/* Floating icons */}
              <div className="absolute -top-4 -right-4 w-12 h-12 glass-card rounded-full flex items-center justify-center floating">
                <span className="text-2xl">⚡</span>
              </div>
              <div
                className="absolute -bottom-4 -left-4 w-12 h-12 glass-card rounded-full flex items-center justify-center floating"
                style={{ animationDelay: "2s" }}
              >
                <span className="text-2xl">🚀</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef} className="order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-center lg:text-left">
              About <span className="gradient-text">Me</span>
            </h2>

            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-muted-foreground text-center lg:text-left">
              <p>
              I’m a passionate Computer Science Engineering student specializing in software development, AI-powered applications, and scalable digital solutions. My journey in technology is driven by curiosity, innovation, and the desire to build impactful products that solve real-world problems.
              </p>

              <p>
              With hands-on experience through internships at CRIS and Fastcurve Services, I’ve gained practical exposure to enterprise software systems, development workflows, and collaborative project execution. I specialize in full-stack development, backend engineering, and creating seamless user-focused applications using modern technologies.
              </p>

              <p>
              My passion lies in transforming ideas into intelligent, high-performance digital experiences. Whether it’s building AI-powered platforms, scalable web applications, or intuitive user interfaces, I focus on writing clean code, delivering efficient solutions, and creating products that leave a meaningful impact.
              </p>
            </div>

            {/* Resume Button */}
            <div className="mt-6 sm:mt-8 flex justify-center lg:justify-start">
              <a href="/Aman_Resume.pdf" download>
                <Button variant="neon" size="lg" className="px-6 sm:px-8 py-3">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold gradient-text">
                  5+
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  Projects
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold gradient-text">
                  2+
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  Internships
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold gradient-text">
                  2026
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  Graduate
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
