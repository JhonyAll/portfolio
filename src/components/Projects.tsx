import { motion } from "framer-motion";
import { useLanguage } from '../contexts/LanguageContext';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  color: string;
}

const projects: Project[] = [
  {
    title: "Building a Transportation Management System",
    description: "A comprehensive system built from scratch...",
    image: "/project1.png",
    tags: ["React", "Node.js", "MongoDB"],
    color: "bg-blue-900"
  },
  // Adicione mais projetos aqui
];

export const Projects = () => {
  const { t } = useLanguage();

  return (
    <section className="max-w-5xl mx-auto px-4 py-20" id="projects">
      <div className="space-y-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`rounded-xl p-8 ${project.color}`}
          >
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <h3 className="text-xl font-medium text-white mb-4">{project.title}</h3>
                <p className="text-white/80 mb-4">{project.description}</p>
                <div className="flex gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 rounded-full bg-white/10 text-white text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex-1">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg w-full"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};