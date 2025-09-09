import { motion } from "framer-motion";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Code, Palette, Cpu, Settings } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: Code,
      color: "#3B82F6",
      skills: [
        { name: "Python", level: 95 },
        { name: "Java", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "C", level: 88 },
        { name: "SQL", level: 80 }
      ]
    },
    {
      title: "Frontend",
      icon: Palette,
      color: "#22D3EE",
      skills: [
        { name: "React.js", level: 90 },
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "Bootstrap", level: 85 }
      ]
    },
    {
      title: "HDL & VLSI",
      icon: Cpu,
      color: "#22C55E",
      skills: [
        { name: "Verilog", level: 85 },
        { name: "SystemVerilog", level: 80 },
        { name: "VLSI Design", level: 82 }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: Settings,
      color: "#F59E0B",
      skills: [
        { name: "GitHub", level: 90 },
        { name: "Linux", level: 85 },
        { name: "VS Code", level: 95 },
        { name: "Cadence", level: 75 },
        { name: "ServiceNow", level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient mb-6">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise across various domains 
            of software development and engineering.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="text-center mb-8">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4"
                  style={{ 
                    background: `linear-gradient(135deg, ${category.color}20, ${category.color}10)`,
                    border: `2px solid ${category.color}30`
                  }}
                >
                  <category.icon 
                    size={32} 
                    style={{ color: category.color }}
                  />
                </motion.div>
                <h3 className="text-xl font-display font-semibold mb-2">
                  {category.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.6, 
                      delay: categoryIndex * 0.2 + skillIndex * 0.1 
                    }}
                    className="flex items-center justify-between"
                  >
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="w-full bg-muted rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 1.5, 
                            delay: categoryIndex * 0.2 + skillIndex * 0.1,
                            ease: "easeOut"
                          }}
                          className="h-2 rounded-full"
                          style={{ 
                            background: `linear-gradient(90deg, ${category.color}, ${category.color}80)`
                          }}
                        />
                      </div>
                    </div>

                    {/* Circular Progress (Hidden on small screens) */}
                    <div className="hidden lg:block ml-4 w-12 h-12">
                      <CircularProgressbar
                        value={skill.level}
                        styles={buildStyles({
                          textSize: '24px',
                          pathColor: category.color,
                          textColor: category.color,
                          trailColor: `${category.color}20`,
                          backgroundColor: 'transparent',
                        })}
                        strokeWidth={8}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="glass-card p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-display font-semibold mb-4 text-accent">
              Continuous Learning
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm passionate about staying up-to-date with the latest technologies and 
              continuously expanding my skill set. From competitive programming to 
              full-stack development and VLSI design, I believe in building a strong 
              foundation across multiple domains.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;