import { motion } from "framer-motion";
import { Code, Palette, Database, Globe, Zap, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const skillCategories = [
    {
      title: "Frontend Technologies",
      icon: Code,
      skills: [
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React", level: 80 },
        { name: "Tailwind CSS", level: 88 },
      ],
    },
    {
      title: "Development Tools",
      icon: Zap,
      skills: [
        { name: "Git & GitHub", level: 75 },
        { name: "VS Code", level: 90 },
       
        { name: "Responsive Design", level: 85 },
      ],
    },
    {
      title: "Design & UI/UX",
      icon: Palette,
      skills: [
        { name: "Figma", level: 65 },
        { name: "User Interface Design", level: 75 },
        { name: "Responsive Layouts", level: 85 },
        { name: "Component Libraries", level: 80 },
      ],
    },
  ];

  const softSkills = [
    {
      title: "Problem Solving",
      description: "Breaking down complex problems into manageable solutions",
      icon: Code,
    },
    {
      title: "Team Collaboration",
      description: "Working effectively in team environments and pair programming",
      icon: Users,
    },
    {
      title: "Communication",
      description: "Clear technical communication and documentation skills",
      icon: Globe,
    },
    {
      title: "Continuous Learning",
      description: "Staying updated with latest technologies and best practices",
      icon: Database,
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient mt-5">
            Skills & Expertise
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technical skills and tools I work with to create amazing web experiences
          </p>
        </motion.div>

        {/* Technical Skills */}
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Technical Skills</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <category.icon className="h-6 w-6 text-primary" />
                      <h3 className="text-lg font-semibold">{category.title}</h3>
                    </div>
                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skill.name}>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium">{skill.name}</span>
                            <span className="text-sm text-muted-foreground">
                              {skill.level}%
                            </span>
                          </div>
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ delay: index * 0.1 + skillIndex * 0.1, duration: 0.8 }}
                          >
                            <Progress value={skill.level} className="h-2" />
                          </motion.div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div variants={itemVariants}>
          <h2 className="text-2xl font-bold mb-8 text-center">Professional Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary/10"
                    >
                      <skill.icon className="h-6 w-6 text-primary" />
                    </motion.div>
                    <h3 className="font-semibold mb-2">{skill.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {skill.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Learning Journey */}
        <motion.div variants={itemVariants} className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-none">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-4">Always Learning</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, 
                tools, and best practices to stay at the forefront of frontend development. 
                Currently focusing on advanced React patterns, TypeScript, and modern CSS techniques.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
}