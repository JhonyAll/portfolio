import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { AboutMe } from "@/components/AboutMe";
import { Contact } from "@/components/Contact";
import { ThemeToggle } from "@/components/ThemeToggle";
import { motion } from "framer-motion";
import { FloatingNav } from '../components/FloatingNav';

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <ThemeToggle />
      <FloatingNav />
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="about">
          <AboutMe />
        </section>
        
        <section id="skills">
          <Skills />
        </section>
        
        <section id="projects">
          <Projects />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>
      
    </motion.div>
  );
};

export default Index;