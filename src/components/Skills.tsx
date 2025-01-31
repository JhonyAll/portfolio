'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Skill {
  name: string;
  icon: string;
}

const skills: Skill[] = [
  { name: 'HTML', icon: '/icons/html.svg' },
  { name: 'CSS', icon: '/icons/css.svg' },
  { name: 'TypeScript', icon: '/icons/typescript.svg' },
  { name: 'TailwindCSS', icon: '/icons/tailwind.svg' },
  { name: 'Next.js', icon: '/icons/nextjs.svg' },
  { name: 'React', icon: '/icons/react.svg' },
  { name: 'Node.js', icon: '/icons/nodejs.svg' },
  { name: 'Express', icon: '/icons/express.svg' },
  { name: 'Docker', icon: '/icons/docker.svg' },
  { name: 'Git', icon: '/icons/git.svg' },
  { name: 'PostgreSQL', icon: '/icons/postgresql.svg' },
  { name: 'MongoDB', icon: '/icons/mongodb.svg' },
  { name: 'MySQL', icon: '/icons/mysql.svg' },
];

export const Skills = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="pt-32 pb-8 overflow-hidden" id="skills">
      <div className="max-w-7xl mx-auto">
        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex overflow-hidden">
            <motion.div 
              className="flex gap-16 items-center"
              animate={{
                x: ['0%', '-100%']
              }}
              transition={{
                duration: isHovered ? 0 : 40, // Ajuste a duração para ser mais suave
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {/* Primeira sequência de ícones */}
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex-shrink-0 group"
                >
                  <div className="relative flex flex-col items-center">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-16 h-16 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                    <span className="mt-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {skill.name}
                    </span>
                  </div>
                </div>
              ))}
              
              {/* Segunda sequência para o efeito infinito */}
              {skills.map((skill) => (
                <div
                  key={`${skill.name}-clone`}
                  className="flex-shrink-0 group"
                >
                  <div className="relative flex flex-col items-center">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-16 h-16 object-contain dark:brightness-100 grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                    <span className="mt-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {skill.name}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};