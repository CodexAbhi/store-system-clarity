const SolutionsSection = () => {
  const solutions = [
    {
      title: "Strategic Tech Audit",
      description: "Uncover hidden inefficiencies and prioritize high-ROI solutions tailored to your budget and goals.",
      features: ["Infrastructure Analysis", "Cost Leak Detection", "ROI Projection"]
    },
    {
      title: "Data-Driven Roadmap", 
      description: "Turn business insights into actionable tech priorities—no guesswork, just measurable impact.",
      features: ["Process Mapping", "Automation Planning", "Scalability Design"]
    },
    {
      title: "Custom Ecosystem Build",
      description: "Develop tailored software that solves your core problems—not our preset solutions.",
      features: ["Agile Development", "System Integration", "Future-Proofing"]
    },
    {
      title: "Ongoing Optimization",
      description: "Continuously refine your tech with performance analytics and proactive upgrades.",
      features: ["KPI Tracking", "Quarterly Reviews", "Cost Efficiency"]
    },
    {
      title: "Team Enablement", 
      description: "Train your staff and embed best practices—no dependency on external developers.",
      features: ["Workflow Training", "Documentation", "24/7 Support"]
    },
    {
      title: "Growth Partnership",
      description: "Quarterly strategy sessions to align tech with your evolving business vision.",
      features: ["Scalability Audits", "Innovation Labs", "Market Adaptation"]
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-neutral-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-black mb-8 tracking-tight">
            What We Integrate & Streamline
          </h2>
          <p className="text-lg text-neutral-gray max-w-3xl mx-auto font-light">
            POS, Billing, Inventory, CRM, Loyalty, Staff Operations, E-commerce, WhatsApp, 
            Analytics, Finance, HR. We don't replace unless needed—we optimize and connect.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-neutral-light rounded-2xl p-8 shadow-minimal hover:shadow-accent transition-all duration-300 group border border-neutral-gray/10">
              {/* Small accent element */}
              <div className="w-3 h-3 bg-accent-lime rounded-full mb-6 group-hover:scale-125 transition-transform duration-300"></div>
              
              <h3 className="text-xl font-semibold text-neutral-black mb-4 tracking-tight">
                {solution.title}
              </h3>
              <p className="text-neutral-gray mb-6 leading-relaxed font-light">
                {solution.description}
              </p>
              
              <div className="space-y-2">
                {solution.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-sm">
                    <div className="w-1 h-1 bg-neutral-black rounded-full mr-3"></div>
                    <span className="text-neutral-black font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;