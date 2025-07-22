import { Facebook, Twitter, Linkedin, Instagram, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-bg border-t border-white/10">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-brand rounded-full"></div>
              <span className="text-xl font-bold text-white">RetailSync</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Your long-term tech partner – building ecosystems that automate growth.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {/* Let's Talk Section */}
          <div className="lg:col-span-2 text-center lg:text-right">
            <div className="mb-8">
              <h3 className="text-6xl md:text-8xl font-bold bg-gradient-brand bg-clip-text text-transparent mb-4">
                LET'S TALK
              </h3>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8 mt-16">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              <p>© 2024 - 2025 | All rights reserved by RetailSync</p>
              <p>Trusted by 50+ businesses</p>
            </div>
            
            <div className="flex items-center space-x-8 text-sm">
              <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                ABOUT US
              </a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                CONTACT
              </a>
              <a href="#privacy" className="text-gray-400 hover:text-white transition-colors">
                PRIVACY POLICY
              </a>
              <a href="#terms" className="text-gray-400 hover:text-white transition-colors">
                TERMS OF SERVICE
              </a>
            </div>
            
            <Button 
              variant="ghost" 
              size="icon"
              onClick={scrollToTop}
              className="text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full"
            >
              <ArrowUp className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;