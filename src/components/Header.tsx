import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-black text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="https://i.postimg.cc/ZKsR45Tb/iconizer-imf-svg.png" 
              alt="Logo Espaço Tiradentes"
              className="w-24 h-auto"
            />
            <span className="text-2xl font-bold">
              ESPAÇO<span className="text-red-600">TIRADENTES</span>
            </span>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-red-600 transition-colors">Início</a>
            <a href="#about" className="hover:text-red-600 transition-colors">Sobre Nós</a>
            <a href="#martial-arts" className="hover:text-red-600 transition-colors">Artes Marciais</a>
            <a href="#schedule" className="hover:text-red-600 transition-colors">Horários</a>
            <a href="#pricing" className="hover:text-red-600 transition-colors">Preços</a>
            <a href="#contact" className="hover:text-red-600 transition-colors">Contato</a>
          </nav>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col space-y-4">
            <a href="#home" className="hover:text-red-600 transition-colors" onClick={toggleMenu}>Início</a>
            <a href="#about" className="hover:text-red-600 transition-colors" onClick={toggleMenu}>Sobre Nós</a>
            <a href="#martial-arts" className="hover:text-red-600 transition-colors" onClick={toggleMenu}>Artes Marciais</a>
            <a href="#schedule" className="hover:text-red-600 transition-colors" onClick={toggleMenu}>Horários</a>
            <a href="#pricing" className="hover:text-red-600 transition-colors" onClick={toggleMenu}>Preços</a>
            <a href="#contact" className="hover:text-red-600 transition-colors" onClick={toggleMenu}>Contato</a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
