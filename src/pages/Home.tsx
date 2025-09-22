import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Download, Github, Linkedin, Youtube, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/WhatsApp Image 2025-09-18 at 09.42.28_e3a6681e.jpg";

export default function Home() {
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

  const socialLinks = [
    { icon: Github, href: "https://github.com/Adityakumar954684 ", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/aditya-kumar-638340280/", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
      </div>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container-custom relative z-10"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">


          {/* Left Content */}
          <motion.div variants={itemVariants} className="text-center lg:text-left text-white order-2 lg:order-1">
            <div className="mb-8">
              <motion.div 
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block mb-6"
              >
                <span className="px-6 py-3 bg-white/15 rounded-full text-sm font-semibold backdrop-blur-sm border border-white/30 shadow-lg">
                  🚀 Frontend Developer & UI/UX Enthusiast
                </span>
              </motion.div>
            </div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
            >
              Hi, I'm{" "}
              <span className="relative inline-block">
                <span className="text-accent drop-shadow-lg">Aditya kumar</span>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 1.2 }}
                  className="absolute bottom-2 left-0 w-full h-2 bg-accent/40 rounded-full blur-sm"
                />
              </span>
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-6 mb-10"
            >
              <h2 className="text-2xl md:text-4xl font-bold text-white/95 tracking-tight">
                Frontend Developer
              </h2>
              <p className="text-lg md:text-xl text-white/85 max-w-2xl lg:max-w-none leading-relaxed">
                Crafting exceptional digital experiences with modern technologies. 
                Specialized in React, TypeScript, and responsive design that drives results.
              </p>
              
              
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-12"
            >
              <Button asChild size="lg" className="group bg-white text-primary hover:bg-white/90 font-bold px-8 py-6 text-lg shadow-2xl hover:shadow-white/20 transition-all duration-300">
                <Link to="/about">
                  Discover My Journey
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 border-white/40 text-white hover:bg-white/25 backdrop-blur-sm font-bold px-8 py-6 text-lg shadow-xl">
                <Link to="/projects">
                  View Projects
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" 
              className="flex items-center bg-accent/20 border-accent/50 text-white hover:bg-accent/30 backdrop-blur-sm font-bold px-8 py-6 text-lg shadow-xl">
              <a href="/Aditya_Kumar_Resume.pdf" download target="_blank" rel="noopener noreferrer" className="flex items-center">
                <Download className="mr-2 h-5 w-5" />
                Resume
              </a>
            </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex justify-center lg:justify-start space-x-4 ml-0 mb-5"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4 + index * 0.1 }}
                  whileHover={{ scale: 1.2, y: -4 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-4 bg-white/15 backdrop-blur-sm rounded-2xl hover:bg-white/25 transition-all duration-300 border border-white/30 group shadow-lg hover:shadow-white/20"
                  aria-label={social.label}
                >
                  <social.icon className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            variants={itemVariants}
            className="order-1 lg:order-2 flex justify-center mt-28 lg:mt-0"
          >
            <motion.div
              initial={{ scale: 0, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 100 }}
              className="relative"
              
            >
              {/* Image Container with Professional Styling */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px]">
                {/* Glowing Background */}
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/30 to-primary/30 rounded-3xl blur-3xl scale-110"></div>
                
                {/* Main Image Frame */}
                <div className="relative w-full h-full bg-gradient-to-tr from-white/20 to-white/5 backdrop-blur-sm rounded-3xl p-2 border border-white/30 shadow-2xl">
                  <div className="w-full h-full rounded-2xl overflow-hidden bg-gradient-to-tr from-accent/10 to-primary/10">
                    <img
                      src={profileImage}
                      alt="Aditya Kumar - Frontend Developer"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -right-6 w-16 h-16 bg-accent/30 backdrop-blur-sm rounded-full border border-white/30 flex items-center justify-center shadow-xl"
                >
                  <span className="text-2xl">💻</span>
                </motion.div>
                
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-4 -left-4 w-20 h-20 bg-primary/30 backdrop-blur-sm rounded-full border border-white/30 flex items-center justify-center shadow-xl"
                >
                  <span className="text-2xl">🚀</span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>

      
      </motion.div>
    </div>
  );
}
