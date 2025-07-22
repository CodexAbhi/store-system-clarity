const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Deep Business Dive",
      description: "We study your operations, goals, and pain points—no assumptions, just data.",
      quote: "Understanding your DNA before writing code."
    },
    {
      number: "02", 
      title: "360° Tech Audit",
      description: "Analyze systems (or start from scratch) to expose cost leaks and automation goldmines.",
      quote: "Finding the 20% efforts driving 80% results."
    },
    {
      number: "03",
      title: "Agile Build Cycle", 
      description: "Develop, test, and deploy solutions in rapid sprints with continuous feedback.",
      quote: "Working tech in weeks—not months."
    },
    {
      number: "04",
      title: "Growth Partnership",
      description: "Monitor, optimize, and scale your tech with quarterly strategy sessions.",
      quote: "Your success = Our KPI."
    }
  ];

  return (
    <section id="process" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-light-text mb-4 tracking-wider uppercase">
            How We Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Partnership Process
          </h2>
        </div>
        
        <div className="relative">
          {/* Progress line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gray-300">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-orange via-brand-pink to-brand-purple"></div>
          </div>
          
          <div className="grid lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step number circle */}
                <div className="relative z-10 w-12 h-12 bg-brand-green-bright rounded-full flex items-center justify-center text-white font-bold text-lg mb-6 mx-auto lg:mx-0">
                  {step.number}
                </div>
                
                <div className="text-center lg:text-left">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="text-light-text mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  <p className="text-sm font-medium text-brand-green italic">
                    "{step.quote}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;