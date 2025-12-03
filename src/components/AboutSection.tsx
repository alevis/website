import { Code2, Coffee, Lightbulb, Rocket } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable and scalable code",
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "Finding elegant solutions to complex problems",
    },
    {
      icon: Rocket,
      title: "Fast Learner",
      description: "Always exploring new technologies",
    },
    {
      icon: Coffee,
      title: "Team Player",
      description: "Collaborative and communicative",
    },
  ];

  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="font-mono text-primary text-sm tracking-wider uppercase">
              About Me
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 text-card-foreground">
              Get to Know Me
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate full-stack developer with 5+ years of experience 
                building web applications. My journey in tech started with curiosity 
                about how websites work, and it has evolved into a career I truly love.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me contributing to open-source projects, 
                writing technical blog posts, or exploring the latest in AI and machine learning. 
                I believe in continuous learning and sharing knowledge with the community.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I specialize in React, TypeScript, Node.js, and cloud technologies. 
                I'm always excited to take on new challenges and turn ideas into reality.
              </p>
            </div>

            {/* Highlight Cards */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg bg-background border border-border hover:border-primary transition-all duration-300 hover:shadow-lg group"
                >
                  <item.icon className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
