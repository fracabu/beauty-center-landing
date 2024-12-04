import { motion } from 'framer-motion';
import { Logo } from './Logo';
import { NavLink } from './NavLink';
import { MobileMenu } from './MobileMenu';
import { BookButton } from './BookButton';
import { useScrollPosition } from '../../hooks/useScrollPosition';

export function Navigation() {
  const scrolled = useScrollPosition();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Logo />
          
          <div className="hidden md:flex items-center space-x-12">
            <NavLink href="#servizi">Servizi</NavLink>
            <NavLink href="#trattamenti">Trattamenti</NavLink>
            <NavLink href="#prezzi">Prezzi</NavLink>
            <NavLink href="#contatti">Contatti</NavLink>
          </div>
          
          <div className="flex items-center space-x-6">
            <BookButton />
            <MobileMenu />
          </div>
        </div>
      </div>
    </motion.nav>
  );
}