import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Education() {
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

  const educationData = [
    {
      degree: "B.Tech in Computer Science Engineering (DS) ",
      institution: "Sri Venkateswara College of Engineering and Technology (SVCET)",
      year: "2022 - 2026",
      location: "India",
      status: "Pursuing",
      description: "Comprehensive study of computer science fundamentals, software engineering principles, data structures, algorithms, and modern web technologies.",
      highlights: [
        "Strong foundation in programming concepts",
        "Project-based learning approach",
        "Focus on practical application of theoretical knowledge",
        "Active participation in coding competitions"
      ],
    },
    {
      degree: "Senior Secondary (12th Grade)",
      institution: "Jaddu Ram Charitra College (JRC College)",
      year: "2020 - 2022",
      location: "India",
      status: "Completed",
      description:
        "Studied Physics, Chemistry, Mathematics, and Computer Science as core subjects with focus on logical and analytical skills.",
      highlights: [
        "Secured good academic performance",
        "Active participation in science exhibitions",
      ],
    },
    {
      degree: "Secondary (10th Grade)",
      institution: "Boy's High School (BHS)",
      year: "2019 - 2020",
      location: "India",
      status: "Completed",
      description:
        "Built a strong foundation in Mathematics, Science, and Computer Basics.",
      highlights: [
        "Achieved excellent academic results",
        "Participated in school-level competitions",
      ]
    }
  ];

  const certifications = [
    {
      title: "JavaScript Fundamentals",
      issuer: "Self-Learning",
      year: "2023",
      description: "Deep understanding of ES6+ features, async programming, and modern JavaScript concepts"
    },
    {
      title: "React Development",
      issuer: "Online Courses",
      year: "2023",
      description: "Component-based architecture, hooks, state management, and modern React patterns"
    },
    {
      title: "Responsive Web Design",
      issuer: "Practice Projects",
      year: "2023",
      description: "Mobile-first design principles, CSS Grid, Flexbox, and responsive design patterns"
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 mt-5">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Education
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My academic journey and continuous learning path
          </p>
        </motion.div>

        {/* Academic Education */}
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-primary" />
            Academic Education
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/20" />
            
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative pl-12 pb-8"
              >
                {/* Timeline dot */}
                <div className="absolute left-2.5 top-6 w-3 h-3 bg-primary rounded-full" />
                
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-primary mb-2">
                          {edu.degree}
                        </h3>
                        <h4 className="text-lg font-semibold mb-2">
                          {edu.institution}
                        </h4>
                      </div>
                      <div className="flex flex-col lg:items-end gap-2">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{edu.year}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          <span>{edu.location}</span>
                        </div>
                        <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                          {edu.status}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">
                      {edu.description}
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-2">
                      {edu.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          <span className="text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications & Learning */}
        <motion.div variants={itemVariants}>
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Award className="h-6 w-6 text-primary" />
            Continuous Learning & Certifications
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <Award className="h-8 w-8 text-accent flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        {cert.year}
                      </span>
                    </div>
                    <h3 className="font-semibold mb-2">{cert.title}</h3>
                    <p className="text-sm text-primary mb-3">{cert.issuer}</p>
                    <p className="text-sm text-muted-foreground">
                      {cert.description}
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