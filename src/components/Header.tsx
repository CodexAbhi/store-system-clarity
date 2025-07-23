import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-white/90 backdrop-blur-md border-b border-neutral-gray/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img 
                src="commerce_black.svg" 
                alt="RetailSync Logo" 
                className="h-8 w-auto" 
                onError={(e) => {
                  console.error('Logo failed to load:', e.target.src);
                  e.target.style.display = 'none';
                }}
              />
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-neutral-gray hover:text-neutral-black transition-colors font-medium">HOME</a>
              <a href="#solutions" className="text-neutral-gray hover:text-neutral-black transition-colors font-medium">SOLUTIONS</a>
              <a href="#process" className="text-neutral-gray hover:text-neutral-black transition-colors font-medium">PROCESS</a>
              <a href="#contact" className="text-neutral-gray hover:text-neutral-black transition-colors font-medium">CONTACT</a>
            </nav>

            <div className="flex items-center space-x-4">
              <Button 
                variant="accent" 
                size="sm"
                onClick={scrollToContact}
                className="hidden md:inline-flex"
              >
                Get Started
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-[73px] left-0 right-0 z-40 bg-neutral-white border-b border-neutral-gray/10 md:hidden">
          <nav className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            <a 
              href="#home" 
              className="text-neutral-gray hover:text-neutral-black transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              HOME
            </a>
            <a 
              href="#solutions" 
              className="text-neutral-gray hover:text-neutral-black transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              SOLUTIONS
            </a>
            <a 
              href="#process" 
              className="text-neutral-gray hover:text-neutral-black transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              PROCESS
            </a>
            <a 
              href="#contact" 
              className="text-neutral-gray hover:text-neutral-black transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              CONTACT
            </a>
            <Button 
              variant="accent" 
              size="sm"
              onClick={() => {
                scrollToContact();
                setIsMenuOpen(false);
              }}
              className="self-start"
            >
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;