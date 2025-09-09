import { motion } from "framer-motion";
import { ExternalLink, Trophy, Star, Code2, Github, Linkedin, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CodingProfiles = () => {
  const profiles = [
    {
      platform: "CodeChef",
      username: "gsdprasad416",
      url: "https://www.codechef.com/users/gsdprasad416",
      icon: Code2,
      color: "#5B4638",
      description: "365-day streak • Active competitor",
      stats: "Daily Practice",
      bgGradient: "from-yellow-500/20 to-orange-500/20"
    },
    {
      platform: "LeetCode", 
      username: "Sri_Durga_Prasad",
      url: "https://leetcode.com/u/Sri_Durga_Prasad/",
      icon: Trophy,
      color: "#FFA116",
      description: "800+ problems solved",
      stats: "Algorithm Expert",
      bgGradient: "from-orange-500/20 to-red-500/20"
    },
    {
      platform: "GeeksforGeeks",
      username: "gsdpras37gs",
      url: "https://www.geeksforgeeks.org/user/gsdpras37gs/?_gl=1*18594ek*_up*MQ..*_gs*MQ..&gclid=CjwKCAjwktO_BhBrEiwAV70jXvarrUT3HghWnUXVcG2xebsww57hlbW4r-VXFk9XsU3zYa0K7pXowxoCCgoQAvD_BwE",
      icon: Star,
      color: "#00B16A",
      description: "Comprehensive problem solving",
      stats: "Concept Master",
      bgGradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      platform: "GitHub",
      username: "SriDurgaPrasad",
      url: "https://github.com/SriDurgaPrasad",
      icon: Github,
      color: "#333",
      description: "Open source contributions",
      stats: "Code Repository",
      bgGradient: "from-gray-500/20 to-slate-500/20"
    },
    {
      platform: "LinkedIn",
      username: "sri-durga-prasad-594535258",
      url: "https://www.linkedin.com/in/sri-durga-prasad-594535258/",
      icon: Linkedin,
      color: "#0077B5",
      description: "Professional networking",
      stats: "Career Profile",
      bgGradient: "from-blue-500/20 to-blue-600/20"
    },
    {
      platform: "Portfolio",
      username: "Current Site",
      url: "/",
      icon: User,
      color: "#3B82F6",
      description: "Complete project showcase",
      stats: "Personal Brand",
      bgGradient: "from-primary/20 to-accent/20"
    }
  ];

  return (
    <section id="profiles" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient mb-6">
            Coding Profiles
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with me across various platforms where I showcase my coding journey, 
            projects, and professional presence.
          </p>
        </motion.div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {profiles.map((profile, index) => (
            <motion.div
              key={profile.platform}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <Card className="glass-card border-border/50 hover:border-primary/50 transition-all duration-500 h-full relative overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${profile.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <CardContent className="p-6 relative z-10">
                  {/* Platform Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4"
                    style={{ 
                      background: `linear-gradient(135deg, ${profile.color}20, ${profile.color}10)`,
                      border: `2px solid ${profile.color}30`
                    }}
                  >
                    <profile.icon 
                      size={28} 
                      style={{ color: profile.color }}
                    />
                  </motion.div>

                  {/* Platform Info */}
                  <h3 className="text-xl font-display font-bold mb-2">
                    {profile.platform}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-1">
                    @{profile.username}
                  </p>
                  
                  <p className="text-sm text-muted-foreground mb-4">
                    {profile.description}
                  </p>

                  {/* Stats Badge */}
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium mb-6">
                    {profile.stats}
                  </div>

                  {/* Visit Button */}
                  <Button 
                    className="w-full btn-hero group-hover:btn-accent transition-all duration-300"
                    size="sm"
                    asChild
                  >
                    <a 
                      href={profile.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Visit Profile
                    </a>
                  </Button>
                </CardContent>

                {/* Hover Tooltip */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  className="absolute top-2 right-2 bg-card/90 backdrop-blur-sm rounded-lg px-2 py-1 text-xs text-muted-foreground"
                >
                  Click to visit
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Interactive Icon Row */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <h3 className="text-2xl font-display font-semibold mb-8 text-accent">
            Quick Access Links
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {profiles.map((profile, index) => (
              <motion.a
                key={`icon-${profile.platform}`}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.2, 
                  rotate: 360,
                  boxShadow: `0 0 20px ${profile.color}50`
                }}
                whileTap={{ scale: 0.9 }}
                className="group relative p-4 rounded-2xl transition-all duration-300"
                style={{
                  background: `linear-gradient(135deg, ${profile.color}10, ${profile.color}05)`,
                  border: `2px solid ${profile.color}20`
                }}
              >
                <profile.icon 
                  size={32} 
                  style={{ color: profile.color }}
                />
                
                {/* Tooltip */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  whileHover={{ opacity: 1, y: -40 }}
                  className="absolute left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-card border border-border rounded-lg px-3 py-1 text-sm font-medium shadow-lg"
                >
                  {profile.platform}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-card" />
                </motion.div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="glass-card p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-display font-semibold mb-4 text-accent">
              Let's Connect!
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I'm always open to interesting conversations about technology, coding challenges, 
              and collaboration opportunities. Feel free to reach out on any platform!
            </p>
            <Button 
              className="btn-accent"
              size="lg"
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Get In Touch
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CodingProfiles;