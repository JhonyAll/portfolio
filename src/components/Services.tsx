import { motion } from "framer-motion";
import { useLanguage } from '../contexts/LanguageContext';

interface Service {
  icon: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: "✏️",
    title: "Strategy, Vision & Direction",
    description: "Working closely with clients to develop comprehensive strategies..."
  },
  {
    icon: "🎨",
    title: "Building Teams & Cross-Platform",
    description: "Creating cohesive teams and ensuring seamless cross-platform experiences..."
  },
  {
    icon: "💡",
    title: "Design Mentorship",
    description: "Providing guidance and mentorship in design principles and best practices..."
  }
];

export const Services = () => {
  const { t } = useLanguage();

  return (
    <section className="max-w-5xl mx-auto px-4 py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group p-6 rounded-xl hover:bg-accent transition-colors"
          >
            <span className="text-4xl mb-4 block">{service.icon}</span>
            <h3 className="text-xl font-medium mb-2">{service.title}</h3>
            <p className="text-muted-foreground">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}; 