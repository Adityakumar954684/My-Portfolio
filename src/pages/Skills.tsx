import { motion } from "framer-motion";
import { Code, Palette, Database, Globe, Zap, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {   
  Wrench ,   
  Heart,
  Target  
} from "lucide-react";

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
    title: "Frontend Development",
    icon: Code,
    skills: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "JavaScript (ES6+)", level: 88 },
      { name: "React.js", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "TypeScript", level: 75 },
    ],
  },
  {
    title: "Backend Development",
    icon: Zap,
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 78 },
      { name: "MongoDB", level: 75 },
      { name: "RESTful APIs", level: 82 },
      { name: "Authentication (JWT, OAuth)", level: 70 },
    ],
  },
  {
    title: "Development Tools & Deployment",
    icon: Wrench, // you can import Wrench from lucide-react
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Postman", level: 80 },
      { name: "Vercel / Netlify", level: 78 },
      { name: "Responsive Design", level: 88 },
    ],
  },
  {
    title: "UI/UX & Design",
    icon: Palette,
    skills: [
      { name: "Figma", level: 70 },
      { name: "User Interface Design", level: 80 },
      { name: "Component Libraries (ShadCN, Material UI)", level: 85 },
      { name: "Responsive Layouts", level: 90 },
    ],
  },
];
const softSkills = [
  {
    title: "Team Collaboration",
    description: "Work effectively with cross-functional teams to deliver high-quality solutions.",
    icon: Users,
  },
  {
    title: "Problem Solving",
    description: "Analyze challenges and implement efficient and scalable solutions.",
    icon: Zap,
  },
  {
    title: "Communication",
    description: "Convey ideas clearly and collaborate efficiently with team members.",
    icon: Heart,
  },
  {
    title: "Time Management",
    description: "Prioritize tasks and meet deadlines in fast-paced environments.",
    icon: Target,
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
         {/* Professional Skills Section */}
<motion.div variants={itemVariants} className="mb-16 px-4">
  <h2 className="text-3xl font-extrabold mb-10 text-center bg-gradient-to-r from-primary to-purple-500 text-transparent bg-clip-text">
    Professional Skills
  </h2>

  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
    {softSkills.map((skill, index) => (
      <motion.div
        key={skill.title}
        variants={itemVariants}
        whileHover={{ y: -5, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <Card className="h-full text-center bg-card/60 backdrop-blur-md border border-border/30 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-lg rounded-2xl">
          <CardContent className="p-6 flex flex-col items-center">
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="flex items-center justify-center w-14 h-14 mb-4 rounded-full bg-primary/10"
            >
              <skill.icon className="h-7 w-7 text-primary" />
            </motion.div>

            <h3 className="text-lg font-semibold mb-2 text-foreground">{skill.title}</h3>
            <p className="text-sm text-muted-foreground text-center">{skill.description}</p>
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