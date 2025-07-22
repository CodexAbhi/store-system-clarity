import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-white/90 backdrop-blur-md border-b border-neutral-gray/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-accent-lime rounded-[30%]"></div>
            <span className="text-xl font-semibold text-neutral-black">RetailSync</span>
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
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;