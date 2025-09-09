import { motion } from "framer-motion";
import { Award, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Certifications = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const certifications = [
    {
      title: "Python Programming",
      issuer: "Cisco",
      category: "Programming",
      year: "2024",
      color: "#3B82F6",
      icon: "🐍"
    },
    {
      title: "JavaScript Fundamentals",
      issuer: "Cisco",
      category: "Web Development",
      year: "2024",
      color: "#F7DF1E",
      icon: "⚡"
    },
    {
      title: "C Programming",
      issuer: "Cisco",
      category: "Programming",
      year: "2024",
      color: "#00599C",
      icon: "⚙️"
    },
    {
      title: "Java Programming",
      issuer: "IT Institute",
      category: "Programming",
      year: "2024",
      color: "#ED8B00",
      icon: "☕"
    },
    {
      title: "HTML & CSS",
      issuer: "IT Institute",
      category: "Web Development",
      year: "2024",
      color: "#E34F26",
      icon: "🌐"
    },
    {
      title: "ServiceNow CSA",
      issuer: "ServiceNow",
      category: "Cloud Platform",
      year: "2024",
      color: "#62D84E",
      icon: "☁️"
    },
    {
      title: "ServiceNow CAD",
      issuer: "ServiceNow",
      category: "Application Development",
      year: "2024",
      color: "#62D84E",
      icon: "🛠️"
    }
  ];

  const itemsPerPage = 3;
  const totalPages = Math.ceil(certifications.length / itemsPerPage);

  useEffect(() => {
    if (isAutoPlay) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % totalPages);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlay, totalPages]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const getCurrentCertifications = () => {
    const start = currentIndex * itemsPerPage;
    return certifications.slice(start, start + itemsPerPage);
  };

  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient mb-6">
            Certifications
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional certifications that validate my expertise across various 
            programming languages and technologies.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          <motion.div
            className="overflow-hidden"
            onMouseEnter={() => setIsAutoPlay(false)}
            onMouseLeave={() => setIsAutoPlay(true)}
          >
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              {getCurrentCertifications().map((cert, index) => (
                <motion.div
                  key={`${currentIndex}-${index}`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group"
                >
                  <Card className="glass-card border-border/50 hover:border-primary/50 transition-all duration-500 h-full">
                    <CardContent className="p-8 text-center">
                      {/* Certificate Icon */}
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6"
                        style={{ 
                          background: `linear-gradient(135deg, ${cert.color}20, ${cert.color}10)`,
                          border: `2px solid ${cert.color}30`
                        }}
                      >
                        <span className="text-3xl">{cert.icon}</span>
                      </motion.div>

                      {/* Certificate Title */}
                      <h3 className="text-xl font-display font-bold mb-2">
                        {cert.title}
                      </h3>

                      {/* Issuer */}
                      <p className="text-lg font-semibold mb-2" style={{ color: cert.color }}>
                        {cert.issuer}
                      </p>

                      {/* Category Badge */}
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm font-medium mb-4">
                        {cert.category}
                      </div>

                      {/* Year */}
                      <p className="text-sm text-muted-foreground mb-6">
                        Certified in {cert.year}
                      </p>

                      {/* Award Icon */}
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                      >
                        <Award 
                          size={24} 
                          style={{ color: cert.color }}
                          className="mx-auto"
                        />
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={prevSlide}
              className="p-2 rounded-full border-border hover:border-primary"
            >
              <ChevronLeft size={20} />
            </Button>

            {/* Pagination Dots */}
            <div className="flex space-x-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-primary"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextSlide}
              className="p-2 rounded-full border-border hover:border-primary"
            >
              <ChevronRight size={20} />
            </Button>
          </div>

          {/* Auto-play Indicator */}
          <div className="text-center mt-4">
            <motion.div
              animate={{ opacity: isAutoPlay ? [1, 0.5, 1] : 1 }}
              transition={{ duration: 1, repeat: isAutoPlay ? Infinity : 0 }}
              className="text-xs text-muted-foreground"
            >
              {isAutoPlay ? "Auto-playing" : "Hover to pause"}
            </motion.div>
          </div>
        </div>

        {/* Certification Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="glass-card p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-display font-semibold mb-4 text-accent">
              Continuous Professional Development
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              These certifications represent my commitment to staying current with 
              industry standards and best practices. From programming fundamentals 
              to cloud platforms and application development, I continue to expand 
              my expertise across diverse technology domains.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;