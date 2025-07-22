import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const StatsSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-light-text mb-4 tracking-wider uppercase">
            WHY 200+ RETAILERS CHOOSE US
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Partnership Over Projects
          </h2>
          <p className="text-lg text-light-text max-w-4xl mx-auto mb-12">
            "Project agencies build what you ask for. We build what you need." 
            By embedding with your team, we become guardians of your tech health—eliminating 
            redundant tools, automating manual workflows, and ensuring every dollar spent drives 
            measurable growth. The result? 40% average cost savings and 2x faster scaling for 
            businesses like yours.
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-6xl font-bold text-foreground mb-2">20+</div>
            <p className="text-light-text font-medium">Scaling Partners</p>
          </div>
          <div className="text-center">
            <div className="text-6xl font-bold text-foreground mb-2">40%</div>
            <p className="text-light-text font-medium">Average Cost Savings</p>
          </div>
          <div className="text-center">
            <div className="text-6xl font-bold text-foreground mb-2">2x</div>
            <p className="text-light-text font-medium">Faster Scaling</p>
          </div>
          <div className="text-center">
            <div className="text-6xl font-bold text-foreground mb-2">92%</div>
            <p className="text-light-text font-medium">Client Retention Rate</p>
          </div>
        </div>
        
        <div className="text-center">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-green-bright/20 to-transparent rounded-full blur-xl"></div>
            <Button 
              variant="brand-outline" 
              size="xl"
              onClick={scrollToContact}
              className="relative group"
            >
              Let's Talk
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;