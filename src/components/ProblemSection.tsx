import { AlertTriangle, Database, Users, TrendingDown } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      icon: <Database className="w-8 h-8 text-brand-orange" />,
      title: "Disconnected Systems",
      description: "Your POS, inventory, CRM, and analytics don't talk to each other—creating blind spots and manual work."
    },
    {
      icon: <Users className="w-8 h-8 text-brand-pink" />,
      title: "Inefficient Workflows",
      description: "Staff spend hours on tasks that should take minutes. Manual processes eat into your profits daily."
    },
    {
      icon: <TrendingDown className="w-8 h-8 text-brand-purple" />,
      title: "Poor Visibility",
      description: "You can't make smart decisions when your data is scattered across multiple platforms and spreadsheets."
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-brand-green" />,
      title: "Growth Bottlenecks",
      description: "Your current setup can't scale. Every new location or process creates more complexity, not efficiency."
    }
  ];

  return (
    <section className="py-20 bg-neutral-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-black mb-6 tracking-tight">
            The Real Problem Isn't<br />
            <span className="relative">
              More Software
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-accent-coral rounded-full"></div>
            </span>
          </h2>
          <p className="text-xl text-neutral-gray max-w-3xl mx-auto font-light">
            It's about making what you have work together. Most retail businesses struggle with the same operational chaos:
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="text-center group hover:scale-[1.02] transition-transform duration-300">
              <div className="bg-neutral-white rounded-2xl p-8 h-full border border-neutral-gray/10 shadow-minimal">
                <div className="w-16 h-16 bg-accent-coral/10 rounded-[30%] flex items-center justify-center mb-6 mx-auto">
                  <AlertTriangle className="w-8 h-8 text-neutral-black" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-black mb-4 tracking-tight">
                  {problem.title}
                </h3>
                <p className="text-neutral-gray leading-relaxed font-light">
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-neutral-black text-neutral-white rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 tracking-tight">
              It's not about more software. It's about making what you have work together.
            </h3>
            <p className="text-lg opacity-80 font-light">
              We don't replace unless needed. We optimize, integrate, and streamline your existing tech stack.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;