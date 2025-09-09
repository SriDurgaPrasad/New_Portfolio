import { motion } from "framer-motion";
import { Trophy, Target, Star, Code, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Achievements = () => {
  const achievements = [
    {
      title: "365-day coding streak",
      platform: "CodeChef",
      description: "Maintained a consistent daily coding practice for an entire year",
      icon: Target,
      color: "#FF6B35",
      count: "365",
      metric: "Days"
    },
    {
      title: "5-star ratings",
      platform: "HackerRank",
      description: "Achieved maximum proficiency in Python, Java, SQL, and JavaScript",
      icon: Star,
      color: "#FFD700",
      count: "5⭐",
      metric: "Languages"
    },
    {
      title: "800+ problems solved",
      platform: "Multiple Platforms",
      description: "Comprehensive problem-solving across LeetCode, CodeChef, and GeeksforGeeks",
      icon: Code,
      color: "#00D4AA",
      count: "800+",
      metric: "Problems"
    }
  ];

  return (
    <section id="achievements" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient mb-6">
            Achievements
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Milestones that showcase my dedication to continuous learning and 
            excellence in competitive programming.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <Card className="glass-card border-border/50 hover:border-primary/50 transition-all duration-500 h-full relative overflow-hidden">
                {/* Background Glow Effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at center, ${achievement.color}, transparent 70%)`
                  }}
                />
                
                <CardContent className="p-8 text-center relative z-10">
                  {/* Achievement Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6"
                    style={{ 
                      background: `linear-gradient(135deg, ${achievement.color}20, ${achievement.color}10)`,
                      border: `2px solid ${achievement.color}30`
                    }}
                  >
                    <achievement.icon 
                      size={36} 
                      style={{ color: achievement.color }}
                    />
                  </motion.div>

                  {/* Achievement Count/Metric */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.2 + 0.3,
                      type: "spring",
                      stiffness: 100
                    }}
                    className="mb-4"
                  >
                    <div 
                      className="text-4xl md:text-5xl font-display font-bold mb-2"
                      style={{ color: achievement.color }}
                    >
                      {achievement.count}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {achievement.metric}
                    </div>
                  </motion.div>

                  {/* Achievement Title */}
                  <h3 className="text-xl font-display font-bold mb-2">
                    {achievement.title}
                  </h3>

                  {/* Platform Badge */}
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm font-medium mb-4">
                    <Trophy size={14} className="mr-2" />
                    {achievement.platform}
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {achievement.description}
                  </p>

                  {/* Achievement Check */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.4, 
                      delay: index * 0.2 + 0.6 
                    }}
                    className="flex items-center justify-center"
                  >
                    <CheckCircle 
                      size={24} 
                      style={{ color: achievement.color }}
                      className="animate-pulse"
                    />
                  </motion.div>
                </CardContent>

                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-2 -right-2 w-4 h-4 rounded-full opacity-60"
                  style={{ backgroundColor: achievement.color }}
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                />
                <motion.div
                  className="absolute -bottom-2 -left-2 w-3 h-3 rounded-full opacity-40"
                  style={{ backgroundColor: achievement.color }}
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.4, 0.8, 0.4]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    delay: index * 0.5 + 1
                  }}
                />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Achievement Details */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <div className="glass-card p-8 rounded-2xl max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-display font-semibold mb-4 text-accent">
                Competitive Programming Journey
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                My achievements in competitive programming reflect a journey of consistent 
                practice, continuous learning, and dedication to excellence. Each milestone 
                represents countless hours of problem-solving and algorithmic thinking.
              </p>
            </div>

            {/* Platform Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 rounded-xl bg-card/30"
              >
                <div className="text-2xl font-bold text-primary mb-2">CodeChef</div>
                <div className="text-sm text-muted-foreground">Daily Practice Platform</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 rounded-xl bg-card/30"
              >
                <div className="text-2xl font-bold text-accent mb-2">LeetCode</div>
                <div className="text-sm text-muted-foreground">Algorithm Mastery</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 rounded-xl bg-card/30"
              >
                <div className="text-2xl font-bold text-primary-glow mb-2">GeeksforGeeks</div>
                <div className="text-sm text-muted-foreground">Concept Building</div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;