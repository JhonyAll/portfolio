import { motion } from "framer-motion";

interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  { value: "10+", label: "Years Experience" },
  { value: "25k+", label: "Projects Completed" },
  { value: "8+", label: "Years Remote" },
];

export const Stats = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-20">
      <div className="grid grid-cols-3 gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="text-center"
          >
            <h3 className="text-4xl font-bold mb-2">{stat.value}</h3>
            <p className="text-muted-foreground">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}; 