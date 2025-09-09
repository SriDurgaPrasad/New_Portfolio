import { motion } from "framer-motion";
import { Heart, Code, Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/SriDurgaPrasad",
      label: "GitHub",
      color: "#333"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/sri-durga-prasad-594535258/",
      label: "LinkedIn",
      color: "#0077B5"
    },
    {
      icon: Mail,
      href: "mailto:gsdprasad2005@gmail.com",
      label: "Email",
      color: "#3B82F6"
    },
    {
      icon: ExternalLink,
      href: "https://leetcode.com/u/Sri_Durga_Prasad/",
      label: "LeetCode",
      color: "#FFA116"
    }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative mt-20 bg-background-secondary border-t border-border/50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <motion.h3 
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-display font-bold text-gradient mb-4 cursor-pointer"
              onClick={scrollToTop}
            >
              Goru Sri Durga Prasad
            </motion.h3>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              B.Tech ECE student passionate about frontend development, VLSI design, 
              and competitive programming. Building innovative solutions with modern technologies.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.2, 
                    y: -5,
                    boxShadow: `0 5px 15px ${social.color}40`
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-xl bg-card/50 border border-border/50 text-muted-foreground hover:text-foreground transition-all duration-300"
                  style={{
                    '--hover-color': social.color
                  } as React.CSSProperties}
                >
                  <social.icon size={20} />
                  <span className="sr-only">{social.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-display font-semibold mb-4 text-foreground">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-left"
                  >
                    {link.name}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-lg font-display font-semibold mb-4 text-foreground">
              Contact
            </h4>
            <div className="space-y-3">
              <div>
                <p className="text-muted-foreground text-sm">Email</p>
                <a 
                  href="mailto:gsdprasad2005@gmail.com"
                  className="text-primary hover:text-primary-glow transition-colors duration-200"
                >
                  gsdprasad2005@gmail.com
                </a>
              </div>
              <div>
                <p className="text-muted-foreground text-sm">Phone</p>
                <a 
                  href="tel:+917036838379"
                  className="text-primary hover:text-primary-glow transition-colors duration-200"
                >
                  +91 7036838379
                </a>
              </div>
              <div>
                <p className="text-muted-foreground text-sm">Location</p>
                <p className="text-foreground">
                  Andhra Pradesh, India
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 pt-8 border-t border-border/50"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-muted-foreground mb-4 md:mb-0">
              <span>© {currentYear}</span>
              <motion.span
                whileHover={{ scale: 1.1 }}
                className="text-primary"
              >
                Designed & Developed by Sri Durga Prasad
              </motion.span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Heart size={16} className="text-red-500" />
              </motion.div>
            </div>

            {/* Built With */}
            <div className="flex items-center space-x-2 text-muted-foreground">
              <span className="text-sm">Built with</span>
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Code size={16} className="text-accent" />
              </motion.div>
              <span className="text-sm">and passion</span>
            </div>
          </div>

          {/* Scroll to Top Button */}
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="mx-auto mt-8 flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-300"
          >
            <span className="text-sm font-medium">Back to Top</span>
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ↑
            </motion.div>
          </motion.button>
        </motion.div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent/20 rounded-full"
          animate={{
            y: [0, -15, 0],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>
    </footer>
  );
};

export default Footer;