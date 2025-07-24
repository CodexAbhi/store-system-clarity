import { Facebook, Twitter, Linkedin, Instagram, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-black border-t border-neutral-gray/20">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center">
              <img 
                src="commerce_white.svg" 
                alt="RetailSync Logo" 
                className="h-14 w-auto" 
                onError={(e) => {
                  console.error('Logo failed to load:', e.target.src);
                  e.target.style.display = 'none';
                }}
              />
            </div>
            <p className="text-neutral-gray leading-relaxed font-light">
              Your long-term tech partner – building ecosystems that automate growth.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-neutral-gray hover:text-neutral-white">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-neutral-gray hover:text-neutral-white"
                onClick={() => window.open('https://x.com/outlfy', '_blank')}
              >
                <Twitter className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-neutral-gray hover:text-neutral-white"
                onClick={() => window.open('https://www.linkedin.com/company/outlfy/', '_blank')}
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-neutral-gray hover:text-neutral-white"
                onClick={() => window.open('https://www.instagram.com/outlfy_business_coach/', '_blank')}
              >
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {/* Let's Talk Section */}
          <div className="lg:col-span-2 text-center lg:text-right">
            <div className="mb-8">
              <h3 className="text-6xl md:text-8xl font-bold text-neutral-white mb-4 tracking-tight">
                LET'S TALK
              </h3>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-neutral-gray/20 pt-8 mt-16">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-neutral-gray text-sm font-light">
              <p>© 2024 - 2025 | All rights reserved by RetailSync</p>
              <p>Trusted by businesses</p>
            </div>
            
            <div className="flex items-center space-x-8 text-sm font-medium">
              <a href="https://www.outlfy.com/about" className="text-neutral-gray hover:text-neutral-white transition-colors">
                ABOUT US
              </a>
              <a href="#contact" className="text-neutral-gray hover:text-neutral-white transition-colors">
                CONTACT
              </a>
              <a href="#privacy" className="text-neutral-gray hover:text-neutral-white transition-colors">
                PRIVACY POLICY
              </a>
              <a href="#terms" className="text-neutral-gray hover:text-neutral-white transition-colors">
                TERMS OF SERVICE
              </a>
            </div>
            
            <Button 
              variant="ghost" 
              size="icon"
              onClick={scrollToTop}
              className="text-neutral-gray hover:text-neutral-white bg-neutral-white/5 hover:bg-neutral-white/10 rounded-[30%]"
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