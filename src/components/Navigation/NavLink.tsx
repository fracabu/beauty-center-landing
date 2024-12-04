import { Link, useLocation } from 'react-router-dom';
import { useScrollPosition } from '../../hooks/useScrollPosition';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export function NavLink({ href, children }: NavLinkProps) {
  const scrolled = useScrollPosition();
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <Link 
      to={href}
      className={`relative font-medium transition-all duration-300 px-4 py-2 ${
        scrolled || !isHome
          ? 'text-white hover:text-gray-100' 
          : 'text-white hover:text-white'
      } before:absolute before:left-0 before:bottom-0 before:h-0.5 before:w-0 hover:before:w-full before:transition-all before:duration-300 ${
        scrolled || !isHome
          ? 'before:bg-white' 
          : 'before:bg-white'
      } hover:scale-105`}
    >
      {children}
    </Link>
  );
}