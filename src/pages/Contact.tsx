import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Youtube, Instagram, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function Contact() {
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

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "adityakumarsingha2004@gmail.com",
      href: "mailto:adityakumarsingha2004@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9117280503",
      href: "tel:+919117280503",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "India",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Adityakumar954684",
      color: "hover:text-gray-900 dark:hover:text-gray-100",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/aditya-kumar-638340280/",
      color: "hover:text-blue-600",
    },
    {
      icon: Youtube,
      label: "YouTube",
      href: "https://www.youtube.com/@adityasinghbittu123",
      color: "hover:text-red-600",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/aditya887342/",
      color: "hover:text-pink-600",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted");
  };

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
            Let's Connect
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">Send me a message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="What's this about?"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project or idea..."
                      rows={6}
                      required
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Contact Details */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">Get in touch</h2>
                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <motion.a
                      key={info.label}
                      href={info.href}
                      whileHover={{ x: 5 }}
                      className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                    >
                      <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{info.label}</p>
                        <p className="text-muted-foreground">{info.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Follow me</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group ${social.color}`}
                    >
                      <social.icon className="h-5 w-5" />
                      <span className="font-medium">{social.label}</span>
                    </motion.a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Availability */}
            <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-none">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-bold mb-2">Currently Available</h3>
                <p className="text-muted-foreground mb-4">
                  I'm open to new opportunities and interesting projects. 
                  Let's discuss how we can work together!
                </p>
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-green-600 dark:text-green-400">
                    Available for projects
                  </span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div variants={itemVariants} className="mt-16 text-center">
          <h3 className="text-xl font-bold mb-4">Prefer a quick chat?</h3>
          <p className="text-muted-foreground mb-6">
            Feel free to reach out directly via email or connect with me on social media.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="outline">
              <a href="mailto:adityakumarsingha2004@gmail.com">
                <Mail className="h-4 w-4 mr-2" />
                Send Email
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="https://www.linkedin.com/in/aditya-kumar-638340280/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4 mr-2" />
                Connect on LinkedIn
              </a>
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}