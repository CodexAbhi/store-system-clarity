import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-dark relative overflow-hidden pt-20">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-brand-orange/10 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-brand-purple/10 blur-3xl"></div>
      <div className="absolute top-1/2 right-1/4 w-24 h-24 rounded-full bg-brand-pink/20"></div>
      
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl">
          <div className="inline-block px-4 py-2 bg-white/10 rounded-full border border-white/20 text-sm text-white mb-8">
            STOP OVERPAYING FOR DISCONNECTED TECH SOLUTIONS
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Sync Your Retail{" "}
            <span className="bg-gradient-brand bg-clip-text text-transparent">
              Chaos Into Systems
            </span>{" "}
            —Start with a Free Audit
          </h1>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl">
            We become your strategic tech partner—auditing, building, and scaling your retail 
            ecosystem so you save costs, make data-driven decisions, and focus 100% on growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button 
              variant="brand" 
              size="xl" 
              onClick={scrollToContact}
              className="group"
            >
              Claim My Free Retail Audit
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="hero" size="xl">
              View Success Stories
            </Button>
          </div>
          
          <div className="text-center">
            <p className="text-brand-green-bright font-medium mb-2">🔥 Only 5 audit slots available this week</p>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;