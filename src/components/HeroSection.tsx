import { ArrowDown, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Terminal Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground mb-8 animate-fade-in">
            <Terminal className="h-4 w-4" />
            <span className="font-mono text-sm">Available for hire</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            <span className="text-foreground">Hi, I'm </span>
            <span className="text-primary">Levis Agaba</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-serif animate-fade-in-up animation-delay-100">
            Full-Stack Developer
          </p>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up animation-delay-200">
            I craft elegant solutions with clean code. Passionate about building 
            scalable web applications and exploring new technologies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-300">
            <Button size="lg" className="font-semibold" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="outline" size="lg" className="font-semibold" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>

          {/* Code Snippet Decoration */}
          <div className="mt-16 p-6 rounded-lg bg-card border border-border text-left font-mono text-sm max-w-lg mx-auto animate-fade-in-up animation-delay-400">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-destructive" />
              <div className="w-3 h-3 rounded-full bg-chart-4" />
              <div className="w-3 h-3 rounded-full bg-chart-1" />
            </div>
            <code className="text-muted-foreground">
              <span className="text-primary">const</span>{" "}
              <span className="text-chart-1">developer</span> = {"{"}
              <br />
              <span className="ml-4">passion:</span>{" "}
              <span className="text-chart-4">'technology'</span>,
              <br />
              <span className="ml-4">chai:</span>{" "}
              <span className="text-chart-4">'essential'</span>,
              <br />
              <span className="ml-4">bugs:</span>{" "}
              <span className="text-chart-4">'squash em'</span>
              <br />
              {"}"};
            </code>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
