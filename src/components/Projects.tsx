import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Project Management Dashboard",
      description: "A comprehensive dashboard for managing teams and projects with real-time collaboration features, task tracking, and analytics.",
      image: project1,
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Socket.io"],
      githubUrl: "https://github.com/alexjohnson/project-dashboard",
      liveUrl: "https://dashboard-demo.example.com",
      featured: true
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description: "Modern e-commerce solution with advanced filtering, payment integration, and admin panel for inventory management.",
      image: project2,
      technologies: ["Next.js", "Stripe", "Prisma", "TailwindCSS", "Vercel"],
      githubUrl: "https://github.com/alexjohnson/ecommerce-platform",
      liveUrl: "https://shop-demo.example.com",
      featured: true
    },
    {
      id: 3,
      title: "Social Chat Application",
      description: "Real-time messaging app with group chats, file sharing, and end-to-end encryption for secure communication.",
      image: project3,
      technologies: ["React Native", "Firebase", "Redux", "WebRTC"],
      githubUrl: "https://github.com/alexjohnson/chat-app",
      liveUrl: "https://chat-demo.example.com",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion 
            for creating exceptional digital experiences.
          </p>
        </motion.div>

        <div className="grid gap-8 md:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className={`overflow-hidden shadow-soft hover:shadow-large transition-all duration-500 ${
                project.featured ? 'border-primary/20 shadow-glow' : ''
              }`}>
                <div className={`grid ${index % 2 === 0 ? 'lg:grid-cols-2' : 'lg:grid-cols-2'} gap-0`}>
                  <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 lg:h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <CardContent className={`p-8 lg:p-12 flex flex-col justify-center ${
                    index % 2 === 1 ? 'lg:order-1' : ''
                  }`}>
                    <div className="space-y-6">
                      {project.featured && (
                        <Badge className="w-fit gradient-bg text-white">
                          Featured Project
                        </Badge>
                      )}
                      
                      <div>
                        <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed text-lg">
                          {project.description}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="outline">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-4 pt-4">
                        <Button
                          variant="outline"
                          className="flex items-center gap-2"
                          asChild
                        >
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="h-4 w-4" />
                            View Code
                          </a>
                        </Button>
                        
                        <Button
                          className="flex items-center gap-2 gradient-bg"
                          asChild
                        >
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4" />
                            Live Demo
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button
            variant="outline"
            className="px-8 py-3 text-lg"
            asChild
          >
            <a
              href="https://github.com/alexjohnson"
              target="_blank"
              rel="noopener noreferrer"
            >
              View All Projects on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;