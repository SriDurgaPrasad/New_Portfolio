import { motion } from "framer-motion";
import { ExternalLink, Github, Monitor, Coffee, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "Resume Builder",
      description: "Responsive resume generator with dynamic templates and real-time preview functionality.",
      longDescription: "A comprehensive web application that allows users to create professional resumes with multiple templates, real-time editing, and export capabilities. Built with modern frontend technologies for optimal user experience.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      icon: Monitor,
      color: "#3B82F6",
      liveDemo: "#",
      code: "#",
      features: [
        "Multiple responsive templates",
        "Real-time preview",
        "PDF export functionality",
        "Mobile-optimized interface"
      ]
    },
    {
      title: "Milk Vendor Calculator",
      description: "Automated dairy management system with OOP principles for efficient business operations.",
      longDescription: "A Java-based application implementing Object-Oriented Programming principles to automate dairy business calculations, inventory management, and customer billing processes.",
      technologies: ["Java", "OOPs"],
      icon: Coffee,
      color: "#22D3EE",
      liveDemo: "#",
      code: "#",
      features: [
        "Automated billing system",
        "Inventory management",
        "Customer data tracking",
        "Financial reporting"
      ]
    },
    {
      title: "Early Detection of Coastal Hazards",
      description: "IoT-based disaster monitoring system for real-time coastal hazard detection and alerting.",
      longDescription: "An innovative IoT solution combining embedded systems and sensors to monitor coastal conditions and provide early warnings for potential hazards, helping protect coastal communities.",
      technologies: ["IoT", "Embedded Systems", "Sensors"],
      icon: Shield,
      color: "#22C55E",
      liveDemo: "#",
      code: "#",
      features: [
        "Real-time monitoring",
        "Early warning system",
        "IoT sensor integration",
        "Data analytics dashboard"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of innovative solutions and applications that demonstrate my 
            technical expertise across various domains.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="glass-card border-border/50 hover:border-primary/50 transition-all duration-500 h-full overflow-hidden">
                <div className="relative">
                  {/* Project Icon/Header */}
                  <div className="p-6 pb-0">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4"
                      style={{ 
                        background: `linear-gradient(135deg, ${project.color}20, ${project.color}10)`,
                        border: `2px solid ${project.color}30`
                      }}
                    >
                      <project.icon 
                        size={32} 
                        style={{ color: project.color }}
                      />
                    </motion.div>
                  </div>

                  {/* Hover Overlay for Demo/Preview */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent flex items-center justify-center"
                  >
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-4">
                        Project Preview
                      </p>
                      <div className="flex space-x-2">
                        <Button 
                          size="sm" 
                          className="btn-hero"
                          asChild
                        >
                          <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink size={16} className="mr-2" />
                            Demo
                          </a>
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline"
                          className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                          asChild
                        >
                          <a href={project.code} target="_blank" rel="noopener noreferrer">
                            <Github size={16} className="mr-2" />
                            Code
                          </a>
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-display font-bold mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech}
                        variant="outline"
                        className="text-xs"
                        style={{ 
                          borderColor: project.color + '50',
                          color: project.color
                        }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Key Features */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-foreground">
                      Key Features:
                    </h4>
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feature, featureIndex) => (
                        <li 
                          key={featureIndex}
                          className="flex items-start text-xs text-muted-foreground"
                        >
                          <span 
                            className="inline-block w-1.5 h-1.5 rounded-full mr-2 mt-1.5 flex-shrink-0"
                            style={{ backgroundColor: project.color }}
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2 mt-6">
                    <Button 
                      size="sm" 
                      className="flex-1 btn-hero"
                      asChild
                    >
                      <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={14} className="mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="flex-1 border-border hover:border-primary"
                      asChild
                    >
                      <a href={project.code} target="_blank" rel="noopener noreferrer">
                        <Github size={14} className="mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* More Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="glass-card p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-display font-semibold mb-4 text-accent">
              More Projects Coming Soon
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I'm constantly working on new projects and exploring innovative technologies. 
              Check out my GitHub for the latest updates and contributions to open-source projects.
            </p>
            <Button 
              className="btn-accent"
              size="lg"
              asChild
            >
              <a 
                href="https://github.com/SriDurgaPrasad" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Github size={20} className="mr-2" />
                Explore All Projects
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;