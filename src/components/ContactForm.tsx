import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    currentSystems: "",
    painPoints: "",
    revenue: "",
    timeline: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Audit Request Submitted!",
      description: "We'll contact you within 24 hours to schedule your free retail audit.",
    });
    
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      currentSystems: "",
      painPoints: "",
      revenue: "",
      timeline: ""
    });
    
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Sync Your Success?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Book your free 45-minute retail audit. We'll analyze your current systems and 
            show you exactly how to streamline operations and boost profitability.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Your Long-Term Tech Partner
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                "We partner with businesses where tech isn't an expense—it's the growth engine." 
                We stay with you till the systems work seamlessly—and beyond.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-brand-green-bright/20 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-brand-green-bright" />
                </div>
                <div>
                  <p className="text-white font-medium">Call Us</p>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-brand-orange/20 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-brand-orange" />
                </div>
                <div>
                  <p className="text-white font-medium">Email Us</p>
                  <p className="text-gray-300">hello@retailsync.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-brand-purple/20 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-brand-purple" />
                </div>
                <div>
                  <p className="text-white font-medium">Visit Us</p>
                  <p className="text-gray-300">San Francisco, CA</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h4 className="text-white font-semibold mb-2">What to Expect:</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Deep dive into your current operations</li>
                <li>• Identification of cost-saving opportunities</li>
                <li>• Custom roadmap for your growth goals</li>
                <li>• No-pressure consultation</li>
              </ul>
            </div>
          </div>
          
          {/* Contact Form */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Claim Your Free Audit</CardTitle>
              <CardDescription className="text-gray-300">
                Tell us about your retail business and current challenges
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-white">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-white">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="company" className="text-white">Company Name *</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      placeholder="Your Retail Store"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-white">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="currentSystems" className="text-white">Current Systems</Label>
                  <Textarea
                    id="currentSystems"
                    name="currentSystems"
                    value={formData.currentSystems}
                    onChange={handleChange}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    placeholder="What POS, CRM, inventory systems are you currently using?"
                    rows={3}
                  />
                </div>
                
                <div>
                  <Label htmlFor="painPoints" className="text-white">Biggest Challenges *</Label>
                  <Textarea
                    id="painPoints"
                    name="painPoints"
                    value={formData.painPoints}
                    onChange={handleChange}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    placeholder="What operational challenges are costing you time and money?"
                    rows={3}
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="revenue" className="text-white">Annual Revenue Range</Label>
                    <select
                      id="revenue"
                      name="revenue"
                      value={formData.revenue}
                      onChange={handleChange}
                      className="w-full h-10 px-3 rounded-md bg-white/10 border border-white/20 text-white"
                    >
                      <option value="" className="text-black">Select range</option>
                      <option value="under-500k" className="text-black">Under $500K</option>
                      <option value="500k-1m" className="text-black">$500K - $1M</option>
                      <option value="1m-5m" className="text-black">$1M - $5M</option>
                      <option value="5m-plus" className="text-black">$5M+</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="timeline" className="text-white">Implementation Timeline</Label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full h-10 px-3 rounded-md bg-white/10 border border-white/20 text-white"
                    >
                      <option value="" className="text-black">Select timeline</option>
                      <option value="immediate" className="text-black">Immediate (1-2 weeks)</option>
                      <option value="month" className="text-black">Within a month</option>
                      <option value="quarter" className="text-black">Within 3 months</option>
                      <option value="planning" className="text-black">Just planning ahead</option>
                    </select>
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  variant="brand" 
                  size="xl" 
                  className="w-full group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Book My Free Audit"}
                  {!isSubmitting && <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />}
                </Button>
                
                <p className="text-sm text-gray-400 text-center">
                  No spam, no sales pressure. Just actionable insights for your business.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;