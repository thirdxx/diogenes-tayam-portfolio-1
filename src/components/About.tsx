import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const interests = [
    "Web Development",
    "Dashboard Designing",
    "UI/UX Designing",
    "App Development",
    "Music",
    "Video Editing",
    "Photography",
    "Movie Marathon",
    "Photo Editing",
    "Swimming",
  ];

  const values = [
  {
    title: "Clean Code",
    description:
      "Crafting code that’s readable, maintainable, and built for long-term scalability.",
  },
  {
    title: "User Experience",
    description:
      "Designing smooth, intuitive interactions that prioritize the user at every step.",
  },
  {
    title: "Continuous Learning",
    description:
      "Embracing growth through curiosity, experimentation, and staying up-to-date with evolving tech.",
  },
];


  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Web developer with a passion for building meaningful digital experiences over the past 2 years.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-large">
              <img
                src="/profile-image.jpg"
                alt="Diogenes Tayam - Web Developer"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Four horizontal cards before My Journey, theme-aware */}
            <div className="flex flex-col md:flex-row gap-6 mb-8 justify-center items-stretch">
              <Card className="flex-1 bg-card text-card-foreground text-center p-6 rounded-xl shadow-md border border-border">
                <img
                  src="https://2.bp.blogspot.com/-Xp6D9yzy0nU/UVzwdMGSdxI/AAAAAAAAAD0/CUV6Fm-JISI/s1600/BU+Logo.png"
                  alt="Bicol University"
                  className="mx-auto mb-4 w-16 h-16"
                />
                <h4 className="text-xl font-bold mb-2">
                  Graduated at Bicol University
                </h4>
                <p className="text-muted-foreground">
                  BSIT | Magna Cum Laude
                </p>
              </Card>
              <Card className="flex-1 bg-card text-card-foreground text-center p-6 rounded-xl shadow-md border border-border">
                <span className="mx-auto mb-6 block text-primary text-5xl">
                  &lt;/&gt;
                </span>
                <h4 className="text-xl font-bold mb-2">
                  Full Stack Developer
                </h4>
                <p className="text-muted-foreground">
                  Experienced in both frontend and backend development
                </p>
              </Card>
              {/* <Card className="flex-1 bg-card text-card-foreground text-center p-6 rounded-xl shadow-md border border-border">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
                  alt="Figma"
                  className="mx-auto mb-4 w-16 h-16"
                />
                <h4 className="text-xl font-bold mb-2">Web D</h4>
                <p className="text-muted-foreground">
                                </p>
              </Card> */}
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                My journey into web development began two years ago during
                college, fueled by a deep interest in building digital solutions
                to real-world challenges. Whether it's designing polished user
                interfaces or developing backend systems, I genuinely enjoy
                every step of the process.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Outside of tech, I’m a fan of photography and love spending time capturing everyday moments through my mobile phone. 
                I also enjoy watching movies — especially anything with a great story or cinematography. 
                These interests often inspire my creative approach to problem-solving and design.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3">
                Interests & Hobbies
              </h4>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <Badge
                    key={interest}
                    variant="secondary"
                    className="px-3 py-1"
                  >
                    {interest}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            What Drives <span className="gradient-text">Me</span>
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <h4 className="text-xl font-semibold mb-3 gradient-text">
                      {value.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
