import { motion } from 'framer-motion';

export function BookButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-6 py-2.5 rounded-full bg-white/10 text-white text-lg font-light 
                 hover:bg-white hover:text-black transition-all duration-300
                 border border-white/20 hover:border-white"
    >
      Prenota Ora
    </motion.button>
  );
}