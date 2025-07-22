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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            The Real Problem Isn't More Software
          </h2>
          <p className="text-xl text-light-text max-w-3xl mx-auto">
            It's about making what you have work together. Most retail businesses struggle with the same operational chaos:
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-gray-50 rounded-2xl p-8 h-full">
                <div className="flex justify-center mb-6">
                  {problem.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {problem.title}
                </h3>
                <p className="text-light-text leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-gradient-brand text-white rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              "It's not about more software. It's about making what you have work together."
            </h3>
            <p className="text-lg opacity-90">
              We don't replace unless needed. We optimize, integrate, and streamline your existing tech stack.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;