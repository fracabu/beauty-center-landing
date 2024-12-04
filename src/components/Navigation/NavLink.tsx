import { ReactNode } from 'react';

interface NavLinkProps {
  href: string;
  children: ReactNode;
  onClick?: () => void;
}

export function NavLink({ href, children, onClick }: NavLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    onClick?.();
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="text-white text-lg font-light tracking-wide hover:text-rose-200 transition-all duration-300 relative group"
    >
      {children}
      <span className="absolute left-0 bottom-0 w-0 h-px bg-rose-200 transition-all duration-300 group-hover:w-full" />
    </a>
  );
}