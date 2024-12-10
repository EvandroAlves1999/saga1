import { Menu } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from './NavLink';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-black/30 backdrop-blur-md z-50 border-b border-blue-500/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
              Saga
            </h1>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <NavLink href="#services">Serviços</NavLink>
            <NavLink href="#about">Sobre</NavLink>
            <NavLink href="#contact">Contato</NavLink>
          </nav>

          <button
            className="md:hidden p-2 hover:bg-blue-500/10 rounded-lg transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} className="text-blue-400" />
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-blue-500/10">
            <div className="flex flex-col space-y-4">
              <NavLink href="#services">Serviços</NavLink>
              <NavLink href="#about">Sobre</NavLink>
              <NavLink href="#contact">Contato</NavLink>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}