import { motion } from "framer-motion";
import { Briefcase, Users, Code2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      title: "VLSI Intern",
      company: "TechnicalHub",
      period: "2024",
      description: "Circuit Design, Verilog Modules",
      details: [
        "Designed and implemented digital circuits using Verilog HDL",
        "Developed reusable modules for complex VLSI systems",
        "Collaborated with senior engineers on chip design projects",
        "Gained hands-on experience with industry-standard EDA tools"
      ],
      icon: Code2,
      color: "#3B82F6"
    },
    {
      title: "C Intern",
      company: "TechnicalHub", 
      period: "2024–25",
      description: "Taught 200+ trainees, problem-solving",
      details: [
        "Mentored and trained over 200 students in C programming",
        "Developed comprehensive curriculum for programming fundamentals",
        "Conducted hands-on coding sessions and debugging workshops",
        "Improved student performance through effective teaching methodologies"
      ],
      icon: Users,
      color: "#22D3EE"
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient mb-6">
            Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional internships and roles that have shaped my technical expertise 
            and leadership capabilities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group perspective-1000"
            >
              <motion.div
                whileHover={{ rotateY: 180 }}
                transition={{ duration: 0.6 }}
                className="relative w-full h-80 preserve-3d cursor-pointer"
              >
                {/* Front Face */}
                <Card className="absolute inset-0 w-full h-full glass-card border-border/50 hover:border-primary/50 transition-all duration-300 backface-hidden">
                  <CardContent className="p-8 h-full flex flex-col justify-center items-center text-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6"
                      style={{ 
                        background: `linear-gradient(135deg, ${exp.color}20, ${exp.color}10)`,
                        border: `2px solid ${exp.color}30`
                      }}
                    >
                      <exp.icon 
                        size={40} 
                        style={{ color: exp.color }}
                      />
                    </motion.div>
                    
                    <h3 className="text-2xl font-display font-bold mb-2">
                      {exp.title}
                    </h3>
                    
                    <p className="text-lg text-accent font-semibold mb-2">
                      {exp.company}
                    </p>
                    
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm font-medium mb-4">
                      {exp.period}
                    </span>
                    
                    <p className="text-muted-foreground">
                      {exp.description}
                    </p>

                    <div className="mt-6 text-sm text-primary">
                      Hover to see details →
                    </div>
                  </CardContent>
                </Card>

                {/* Back Face */}
                <Card className="absolute inset-0 w-full h-full glass-card border-border/50 backface-hidden rotate-y-180">
                  <CardContent className="p-8 h-full flex flex-col justify-center">
                    <div className="flex items-center mb-6">
                      <Briefcase 
                        size={24} 
                        style={{ color: exp.color }}
                        className="mr-3"
                      />
                      <h4 className="text-xl font-display font-bold">
                        Key Responsibilities
                      </h4>
                    </div>
                    
                    <ul className="space-y-3">
                      {exp.details.map((detail, detailIndex) => (
                        <motion.li
                          key={detailIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: detailIndex * 0.1 }}
                          className="flex items-start text-sm text-muted-foreground"
                        >
                          <span 
                            className="inline-block w-2 h-2 rounded-full mr-3 mt-2 flex-shrink-0"
                            style={{ backgroundColor: exp.color }}
                          />
                          {detail}
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Experience Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="glass-card p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-display font-semibold mb-4 text-accent">
              Professional Growth
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Through these experiences, I've developed strong technical skills in VLSI design 
              and programming, while also building leadership and mentoring capabilities. 
              Training over 200 students has enhanced my communication skills and deepened 
              my understanding of complex technical concepts.
            </p>
          </div>
        </motion.div>
      </div>

      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
};

export default Experience;