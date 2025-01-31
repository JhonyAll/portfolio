import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Github, Linkedin, Mail } from "lucide-react";

export const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <section className="py-20 px-4" id="contact">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-heading text-center mb-12"
        >
          Get in Touch
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-lg text-gray-600 mb-12"
        >
          I'm always open to new opportunities, collaborations, or just a friendly chat about tech and AI. Feel free to reach out to me!
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.form 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <Input type="text" placeholder="Name" className="placeholder:text-gray-700" required />
            </div>
            <div>
              <Input type="email" placeholder="Email" className="placeholder:text-gray-700" required />
            </div>
            <div>
              <Input type="text" placeholder="Subject" className="placeholder:text-gray-700" required />
            </div>
            <div>
              <Textarea placeholder="Message" className="placeholder:text-gray-700 min-h-[150px]" required/>
            </div>
            <Button type="submit" className="w-full text-gray-50 dark:text-gray-900">
              Send Message
            </Button>
          </motion.form>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col justify-center space-y-8"
          >
            <div className="flex items-center space-x-4">
              <Github className="w-6 h-6" />
              <a href="https://github.com/jhonyall" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                github.com/jhonyall
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6" />
              <a href="mailto:jhonyalex.matos@gmail.com" className="hover:text-primary transition-colors">
                jhonyalex.matos@gmail.com
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};