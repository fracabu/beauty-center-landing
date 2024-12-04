import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from './NavLink';

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    closed: { opacity: 0, x: "100%" },
    open: { opacity: 1, x: 0 }
  };

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-white hover:text-rose-200 transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-black/95 backdrop-blur-lg z-50"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              <NavLink href="#servizi" onClick={() => setIsOpen(false)}>Servizi</NavLink>
              <NavLink href="#trattamenti" onClick={() => setIsOpen(false)}>Trattamenti</NavLink>
              <NavLink href="#prezzi" onClick={() => setIsOpen(false)}>Prezzi</NavLink>
              <NavLink href="#contatti" onClick={() => setIsOpen(false)}>Contatti</NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}