import { motion } from "framer-motion";
import { useLanguage } from '../contexts/LanguageContext';

export const AboutMe = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-4" id="about">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-heading text-center mb-12"
        >
           {t("aboutMe.title")}
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full md:w-1/3"
          >
            <div className="relative w-48 h-48 mx-auto">
              <div className="absolute inset-0 bg-primary/10 rounded-full animate-pulse"></div>
              <img
                src="/me.png"
                alt="Profile"
                className="w-full h-full object-cover rounded-full border-2 border-primary"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full md:w-2/3"
          >
            <p className="text-lg leading-relaxed text-gray-600 mb-6">
            {t("aboutMe.paragraph1")}
            </p>
            <p className="text-lg leading-relaxed text-gray-600">
            {t("aboutMe.paragraph2")}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};