import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

export const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="fixed top-4 left-4 z-50"
    >
      <div className="bg-background/80 backdrop-blur-sm rounded-lg shadow-lg p-2 flex gap-2">
        <button
          onClick={() => setLanguage('pt')}
          className={`px-3 py-1 rounded-md transition-colors ${
            language === 'pt'
              ? 'bg-primary text-gray-50 dark:text-gray-700'
              : 'hover:bg-muted'
          }`}
        >
          PT
        </button>
        <button
          onClick={() => setLanguage('en')}
          className={`px-3 py-1 rounded-md transition-colors ${
            language === 'en'
              ? 'bg-primary text-gray-50 dark:text-gray-700'
              : 'hover:bg-muted'
          }`}
        >
          EN
        </button>
      </div>
    </motion.div>
  );
}; 