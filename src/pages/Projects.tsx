import { motion } from "framer-motion";
import { ExternalLink, Github, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Projects() {
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

  const projects = [
    {
      title: "MyPortfolio – Personal Portfolio Website",
      description: "Developed a modern, responsive portfolio using React, TypeScript, Tailwind CSS, shadcn-ui, and Vite. Showcases projects, skills, and achievements with modular components and a mobile-first design.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop&crop=center",
      technologies: ["React", "Tailwind CSS", "Vite", "TypeScript","shadcn/ui"],
      liveDemo: "https://my-portfolio-lyart-omega-85.vercel.app",
      github: "https://github.com/Adityakumar954684/My-Portfolio",
      featured: true,
    },

    {
      title: "Portfolio Website",
      description: "Responsive personal portfolio website showcasing projects and skills with smooth animations and modern design.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop&crop=center",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      liveDemo: "https://my-portfolio-three-umber-17.vercel.app",
      github: "https://github.com/Adityakumar954684/My-Portfolio",
      featured: true,
    },
    {
      title: "MindSpace Pro – Modern Productivity & Focus App",
      description: "A minimalist productivity and focus web app-  Manage tasks, track habits, and stay focused — all in one elegant dashboard",
      image: "#",
      technologies: ["Vite", "React", "TypeScript", "Tailwind CSS","Shadcn/ui"],
      liveDemo: "https://mind-space-project-rho.vercel.app/",
      github: "#",
      featured: true,
    },
    {
      title: "Restaurant Landing Page",
      description: "Elegant restaurant website with menu showcase, reservation system, and mobile-first responsive design.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=300&fit=crop&crop=center",
      technologies: ["HTML5", "CSS3", "JavaScript", "GSAP"],
      liveDemo: "#",
      github: "#",
      featured: false,
    },
    {
      title: "Learning Platform UI",
      description: "Modern learning platform interface with course management, progress tracking, and interactive elements.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop&crop=center",
      technologies: ["React", "Tailwind CSS", "TypeScript"],
      liveDemo: "#",
      github: "#",
      featured: true,
    },
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

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
            My Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my development journey and the solutions I've built
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Featured Projects</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                      <Button size="sm" variant="secondary" asChild>
                        <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                          <Eye className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                      <Button size="sm" variant="outline" asChild className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      <Button size="sm" variant="outline" asChild>
                        <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                      <Button size="sm" variant="ghost" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          GitHub
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Other Projects */}
        <motion.div variants={itemVariants}>
          <h2 className="text-2xl font-bold mb-8">Other Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 h-full">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-secondary/50 text-secondary-foreground rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" asChild className="flex-1">
                        <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-3 w-3 mr-1" />
                          Demo
                        </a>
                      </Button>
                      <Button size="sm" variant="ghost" asChild className="flex-1">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-3 w-3 mr-1" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div variants={itemVariants} className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-none">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-4">Want to see more?</h3>
              <p className="text-muted-foreground mb-6">
                Check out my GitHub profile for more projects and contributions to open source.
              </p>
              <Button asChild size="lg">
                <a href="https://github.com/Adityakumar954684 " target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  Visit GitHub Profile
                </a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
}
