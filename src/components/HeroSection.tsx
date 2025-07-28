import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Lottie from "lottie-react";
import animationData from "../../public/lottie.json";

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProcess = () => {
    const processSection = document.getElementById('process');
    processSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen  relative overflow-hidden pt-20">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-accent-lime rounded-[30%] opacity-20 z-50"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-accent-coral rounded-[60%] opacity-15 z-10"></div>
      <div className="absolute top-1/2 right-1/4 w-6 h-6 bg-neutral-black rounded-full"></div>
      <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-neutral-black rounded-full"></div>
      
      <div className="container mx-auto px-6 py-20 z-10 relative">
        <div className="grid xl:grid-cols-2 gap-12 items-center">
          {/* Left side content */}
          <div className="relative z-20">
            <div className="inline-block px-6 py-3 bg-neutral-light rounded-full border border-neutral-gray/20 text-sm text-neutral-black mb-8 font-medium">
              STOP OVERPAYING FOR DISCONNECTED TECH SOLUTIONS
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-neutral-black mb-8 leading-tight tracking-tight">
              Growth-First{" "}
              <span className="relative">
                Tech Partnership
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-accent-lime rounded-full"></div>
              </span>
            </h1>
            
            <p className="text-xl text-neutral-gray mb-12 max-w-2xl font-light leading-relaxed">
              We become your strategic tech ally—auditing, building, and scaling your digital 
              ecosystem so you save costs, make data-driven decisions, and focus entirely on growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Button 
                variant="minimal" 
                size="xl" 
                onClick={scrollToContact}
                className="group"
              >
                Start Your Free Audit
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl" onClick={scrollToProcess}>
                View Our Approach
              </Button>
            </div>
            
            <div className="text-center lg:text-left">
              <p className="text-neutral-gray font-light">Limited audit slots available this month</p>
            </div>
          </div>

          {/* Right side lottie animation */}
          <div className="justify-center lg:justify-end hidden md:flex relative z-10">
            <div className="w-full max-w-lg">
              <Lottie 
                animationData={animationData} 
                loop={true}
                autoplay={true}
                className="w-full h-auto scale-[1.8]"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-neutral-gray/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-neutral-gray/50 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;