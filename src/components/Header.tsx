import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-brand rounded-full"></div>
            <span className="text-xl font-bold text-foreground">RetailSync</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-brand-green transition-colors">HOME</a>
            <a href="#solutions" className="text-foreground hover:text-brand-green transition-colors">SOLUTIONS</a>
            <a href="#process" className="text-foreground hover:text-brand-green transition-colors">PROCESS</a>
            <a href="#contact" className="text-foreground hover:text-brand-green transition-colors">CONTACT</a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button 
              variant="brand-outline" 
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