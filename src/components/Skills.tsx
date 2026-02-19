import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages & Database Management",
      skills: [
        { name: "HTML5", level: 95},
        { name: "CSS3", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 85},
        { name: "PHP", level: 80},
        { name: "Dart", level: 75 },
        { name: "Python", level: 80},
        { name: "MySQL", level: 85},
        { name: "PostgreSQL", level: 75 },
        { name: "NoSQL", level: 75 },
        { name: "Redis", level: 70 },
      ],
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "React.js", level: 85},
        { name: "Next.js", level: 80},
        { name: "Node.js", level: 80},
        { name: "Express.js", level: 78},
        { name: "Laravel", level: 80},
        { name: "Filament PHP", level: 75},
        { name: "Livewire", level: 72},
        { name: "Alpine.js", level: 75},
        { name: "Flutter", level: 80},
        { name: "Tailwind CSS", level: 90},
        { name: "Bootstrap", level: 80},
        { name: "Prisma", level: 75},
        { name: "Stripe", level: 70},
        { name: "Jest", level: 68},
        { name: "Vite", level: 80},
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", level: 90 },
        { name: "Git CLI", level: 88 },
        { name: "GitHub", level: 90 },
        { name: "Docker", level: 75 },
        { name: "Visual Studio Code", level: 95 },
        { name: "Android Studio", level: 80 },
        { name: "Firebase", level: 80 },
        { name: "Microsoft Office", level: 85 },
        { name: "Figma", level: 80 },
        { name: "Canva", level: 80 },
      ],
    },
  ];

  // Note: Tools category intentionally has no icons

  const techStackIcons = [
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", alt: "Next.js" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", alt: "TypeScript" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", alt: "HTML5" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", alt: "CSS3" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "JavaScript" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", alt: "Node.js" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", alt: "Express.js" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg", alt: "Laravel" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", alt: "Flutter" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", alt: "MySQL" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", alt: "PostgreSQL" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg", alt: "Redis" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", alt: "Docker" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", alt: "GitHub" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", alt: "Figma" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", alt: "PHP" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", alt: "MongoDB" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg", alt: "Dart" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", alt: "VS Code" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg", alt: "Android Studio" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", alt: "Python" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg", alt: "C#" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg", alt: "Jest" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg", alt: "Vite" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg", alt: "Prisma" },
  ];

  const aiTools = [
    {
      name: "Claude",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Claude_AI_logo.svg/1024px-Claude_AI_logo.svg.png",
    },
    {
      name: "Cursor",
      logo: "https://cursor.sh/apple-touch-icon.png",
    },
    {
      name: "GitHub Copilot",
      logo: "https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/dark/githubcopilot.png",
    },
    {
      name: "ChatGPT",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1024px-ChatGPT_logo.svg.png",
    },
    {
      name: "Replit",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/New_Replit_Logo.svg/1024px-New_Replit_Logo.svg.png",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="skills" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tech Stack Section */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical Stack
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-6 py-6">
            {techStackIcons.map((icon) => (
              <img
                key={icon.alt}
                src={icon.src}
                alt={icon.alt}
                className="h-10"
              />
            ))}
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div key={category.title} variants={itemVariants}>
              <Card className="h-full shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6 text-center gradient-text">
                    {category.title}
                  </h3>

                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.6,
                          delay: categoryIndex * 0.1 + skillIndex * 0.1,
                        }}
                        viewport={{ once: true }}
                        className="space-y-2"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            {"icon" in skill && (
                              <span className="text-lg">{skill.icon}</span>
                            )}
                            <span className="font-medium text-sm">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-sm font-semibold text-primary">
                            {skill.level}%
                          </span>
                        </div>

                        <div className="relative">
                          <Progress value={0} className="h-2 bg-muted" />
                          <motion.div
                            className="absolute top-0 left-0 h-2 bg-gradient-primary rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{
                              duration: 1.5,
                              delay: categoryIndex * 0.2 + skillIndex * 0.1,
                              ease: "easeOut",
                            }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* AI Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-8">
            AI <span className="gradient-text">Tools</span>
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            {aiTools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 px-5 py-3 rounded-xl glass hover:shadow-medium transition-all duration-300 hover:scale-105"
              >
                <img
                  src={tool.logo}
                  alt={tool.name}
                  className="w-8 h-8 object-contain rounded"
                />
                <div className="text-left">
                  <p className="text-sm font-semibold">{tool.name}</p>
                  <p className="text-xs text-muted-foreground">{tool.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills in Progress Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-8">
            Skills in <span className="gradient-text">Progress</span>
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "Vue.js",
              "Angular",
              "React Native",
              "MongoDB",
              "GraphQL",
              "Kubernetes",
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-3 rounded-lg glass hover:shadow-medium transition-all duration-300 hover:scale-105"
              >
                <span className="text-sm font-medium text-muted-foreground">
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
