import { motion } from 'framer-motion';

export function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="text-white font-playfair"
    >
      <span className="text-2xl font-light tracking-wide">Beauty Centro</span>
    </motion.div>
  );
}