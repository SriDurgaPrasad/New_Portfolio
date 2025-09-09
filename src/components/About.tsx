import { motion } from "framer-motion";
import { GraduationCap, Award, Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const educationData = [
    {
      institution: "Aditya College of Engineering & Technology",
      degree: "B.Tech ECE",
      period: "2022–2026",
      grade: "7.5/10 CGPA",
      icon: GraduationCap
    },
    {
      institution: "M.N.R Junior College",
      degree: "Intermediate",
      period: "2020–2022",
      grade: "890/1000",
      icon: Award
    },
    {
      institution: "S.P.P.P.R.Z.P High School",
      degree: "Secondary Education",
      period: "2019–2020",
      grade: "533/600",
      icon: Trophy
    }
  ];

  const hobbies = [
    {
      title: "Cricket",
      emoji: "🏏",
      description: "Passionate about the game and teamwork"
    },
    {
      title: "Fitness",
      emoji: "💪",
      description: "Maintaining physical and mental wellness"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient mb-6">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a tech-savvy electronics and communication engineering student with a passion for 
            innovation, problem-solving, and continuous learning.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-display font-semibold mb-4 text-accent">
                My Journey
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                As a B.Tech ECE student at Aditya College of Engineering & Technology, I've been 
                on an exciting journey exploring the intersection of electronics, programming, 
                and modern web technologies.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                My passion lies in creating innovative solutions through frontend development, 
                diving deep into VLSI design concepts, and solving complex algorithmic challenges. 
                I believe in the power of technology to transform ideas into reality.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                With over 800+ problems solved across various competitive programming platforms 
                and hands-on experience in multiple internships, I'm constantly pushing my 
                boundaries to learn and grow.
              </p>
            </div>

            {/* Hobbies */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {hobbies.map((hobby, index) => (
                <motion.div
                  key={hobby.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    rotateX: 5 
                  }}
                  className="glass-card p-6 rounded-xl text-center cursor-pointer"
                >
                  <div className="text-4xl mb-3">{hobby.emoji}</div>
                  <h4 className="font-display font-semibold text-lg mb-2">
                    {hobby.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {hobby.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-display font-semibold text-primary mb-8">
              Education Timeline
            </h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-transparent" />
              
              {educationData.map((edu, index) => (
                <motion.div
                  key={edu.institution}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative mb-8 last:mb-0"
                >
                  {/* Timeline Dot */}
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="absolute left-4 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"
                  />
                  
                  {/* Timeline Icon */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="absolute left-1 w-6 h-6 flex items-center justify-center"
                  >
                    <edu.icon size={16} className="text-primary-foreground" />
                  </motion.div>
                  
                  {/* Content Card */}
                  <motion.div
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="ml-16"
                  >
                    <Card className="glass-card border-border/50 hover:border-primary/50 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-display font-semibold text-lg">
                            {edu.institution}
                          </h4>
                          <span className="text-sm text-accent font-medium">
                            {edu.period}
                          </span>
                        </div>
                        <p className="text-muted-foreground mb-2">
                          {edu.degree}
                        </p>
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                          {edu.grade}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;