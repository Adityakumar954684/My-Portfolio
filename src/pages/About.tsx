import { motion } from "framer-motion";
import { Code, Heart, Target, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import profileImage from "@/assets/WhatsApp Image 2025-09-18 at 09.42.28_e3a6681e.jpg";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const strengths = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and well-documented code that follows best practices.",
    },
    {
      icon: Heart,
      title: "User-Focused",
      description: "Designing with empathy, creating intuitive interfaces that users love to interact with.",
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Focused on delivering results that meet business objectives and exceed expectations.",
    },
    {
      icon: Users,
      title: "Collaborative",
      description: "Strong team player who thrives in collaborative environments and values diverse perspectives.",
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            About Me
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get to know the person behind the code
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div variants={itemVariants}>
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative z-10"
              >
                <img
                  src={profileImage}
                  alt="Aditya Kumar"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                />
              </motion.div>
              <div className="absolute inset-0 hero-gradient rounded-2xl blur-3xl opacity-20 scale-110" />
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-3xl font-bold">Hello, I'm Aditya Kumar</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate Frontend Developer currently pursuing my B.Tech in Computer Science Engineering 
                at Sri Venkateswara College of Engineering and Technology (SVCET), expected to graduate in 2026.
              </p>
              <p>
                My journey in web development began with curiosity about how websites work, and it has evolved 
                into a deep passion for creating beautiful, functional, and user-friendly web applications. 
                I specialize in modern frontend technologies including React, JavaScript, and Tailwind CSS.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                projects, or sharing my knowledge through YouTube and social media. I believe in continuous 
                learning and staying updated with the latest trends in web development.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div variants={itemVariants}>
          <h3 className="text-2xl font-bold text-center mb-8">Key Strengths</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {strengths.map((strength, index) => (
              <motion.div
                key={strength.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="h-full"
              >
                <Card className="h-full">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary/10"
                    >
                      <strength.icon className="h-6 w-6 text-primary" />
                    </motion.div>
                    <h4 className="font-semibold mb-2">{strength.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {strength.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}