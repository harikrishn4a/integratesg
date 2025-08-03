import React, { useState, useEffect } from 'react';


declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}
import emailjs from '@emailjs/browser';
import { 
  Phone, 
  MessageCircle, 
  Clock, 
  TrendingDown, 
  FileText, 
  Zap,
  Bot,
  BarChart3,
  Settings,
  Star,
  Check,
  User,
  Mail,
  Send,
  MapPin,
  Sparkles,

} from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const whatsappUrl = `https://wa.me/6591493160?text=Hi! I'm interested in learning more about AI automation for my business.`;

  // WhatsApp conversion handler
  const handleWhatsAppClick = () => {
    const callback = function () {
      window.location.href = 'https://wa.me/6591493160';
    };
    window.gtag('event', 'conversion', {
      send_to: 'AW-17388563894/tOFmCNLDsv4aELbbweNA',
      value: 1.0,
      currency: 'SGD',
      event_callback: callback,
    });
    return false;
  };

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("YOUR_PUBLIC_KEY"); // You'll need to replace this with your actual EmailJS public key
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const callback = () => {
      e.currentTarget.submit(); // Submits to Formspree after tracking
    };

    if (typeof gtag !== 'undefined') {
      gtag('event', 'conversion', {
        send_to: 'AW-17388563894/gtsLCNXDsv4aELbbweNA',
        value: 1.0,
        currency: 'SGD',
        event_callback: callback,
      });
    } else {
      callback(); // Fallback if gtag isn't loaded
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
        {/* Abstract Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-emerald-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>
        
        {/* Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-green-400 rotate-45 opacity-60"></div>
          <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-green-300 rotate-12 opacity-40"></div>
          <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-blue-300 rotate-45 opacity-50"></div>
          <div className="absolute top-2/3 right-1/4 w-4 h-4 bg-emerald-400 rotate-12 opacity-30"></div>
        </div>

        <div className="relative container mx-auto px-6 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="bg-green-600/20 p-4 rounded-full border border-green-400/30">
                <Sparkles className="h-12 w-12 text-green-400" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Stop Wasting Time on Repetitive Tasks –{' '}
              <span className="text-green-400">Automate Your Singapore Business</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              94% of local SMEs are using or testing AI, and 87% of those see revenue growth. 
              Transform your business with intelligent automation solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2"
              >
                <Phone className="h-5 w-5" />
                Get Free Consultation
              </button>

              <a
                href="#"
                onClick={e => {
                  e.preventDefault();
                  handleWhatsAppClick();
                }}
                className="bg-transparent border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-blue-900 font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp us
              </a>
            </div>
          </div>
        </div>
      </section>



      {/* Problems Solved Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                Problems We Solve for Singapore Businesses
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Stop losing time, money, and opportunities to manual processes
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Clock className="h-8 w-8" />,
                  title: "Slow Customer Response",
                  description: "Long response times leading to frustrated customers and lost sales"
                },
                {
                  icon: <TrendingDown className="h-8 w-8" />,
                  title: "Lost Leads",
                  description: "Potential customers slip through the cracks due to poor follow-up"
                },
                {
                  icon: <FileText className="h-8 w-8" />,
                  title: "Admin Overload",
                  description: "Hours wasted on repetitive tasks that could be automated"
                },
                {
                  icon: <Zap className="h-8 w-8" />,
                  title: "Tech Complexity",
                  description: "Struggling with complex systems when simple solutions exist"
                }
              ].map((problem, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="text-red-500 mb-4">{problem.icon}</div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">{problem.title}</h3>
                  <p className="text-gray-600">{problem.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                Our Automation Services
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive AI solutions tailored for Singapore businesses
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Bot className="h-10 w-10" />,
                  title: "Customer Service Automation",
                  color: "bg-blue-600",
                  services: [
                    "WhatsApp & Facebook chatbots",
                    "FAQ automation",
                    "Appointment booking systems",
                    "24/7 customer support"
                  ]
                },
                {
                  icon: <BarChart3 className="h-10 w-10" />,
                  title: "Marketing & Sales Automation",
                  color: "bg-green-600",
                  services: [
                    "Lead capture systems",
                    "Automated follow-ups",
                    "Social media scheduling",
                    "CRM integration"
                  ]
                },
                {
                  icon: <Settings className="h-10 w-10" />,
                  title: "Business Operations Automation",
                  color: "bg-emerald-600",
                  services: [
                    "Invoice processing",
                    "Inventory alerts",
                    "Staff scheduling",
                    "Report generation"
                  ]
                }
              ].map((service, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className={`${service.color} p-6 text-white`}>
                    <div className="flex items-center gap-4 mb-4">
                      {service.icon}
                      <h3 className="text-xl font-semibold">{service.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      {service.services.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                What Our Clients Say
              </h2>
            </div>
            
            <div className="bg-white rounded-xl shadow-xl p-8 md:p-12 relative">
              <div className="flex items-center justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-xl md:text-2xl text-gray-700 text-center mb-8 italic">
                "The automation solutions provided have dramatically improved our response time and 
                significantly increased our qualified leads. Our business operations are now much 
                more efficient, and we can focus on growth instead of repetitive tasks."
              </blockquote>
              
              <div className="text-center">
                <div className="text-lg font-semibold text-blue-900">Reliable Privacy</div>
                <div className="text-gray-600">Singapore Technology Solutions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Choose the package that fits your business needs
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Starter",
                  price: "S$399",
                  period: "one-time setup",
                  color: "border-gray-200",
                  bgColor: "bg-white",
                  popular: false,
                  features: [
                    "Basic chatbot setup",
                    "FAQ automation",
                    "WhatsApp integration",
                    "1 month support",
                    "Training included"
                  ]
                },
                {
                  name: "Growth",
                  price: "S$899",
                  period: "one-time setup",
                  color: "border-green-500",
                  bgColor: "bg-green-50",
                  popular: true,
                  features: [
                    "Advanced automation workflows",
                    "CRM integration",
                    "Lead capture system",
                    "Social media automation",
                    "3 months support",
                    "Priority training"
                  ]
                },
                {
                  name: "Custom",
                  price: "From S$1,500",
                  period: "tailored solution",
                  color: "border-gray-200",
                  bgColor: "bg-white",
                  popular: false,
                  features: [
                    "Fully customized solution",
                    "Multiple integrations",
                    "Advanced analytics",
                    "Hands-on consultant support",
                    "6 months support",
                    "On-site training"
                  ]
                }
              ].map((plan, index) => (
                <div key={index} className={`${plan.bgColor} border-2 ${plan.color} rounded-xl p-8 relative ${plan.popular ? 'shadow-xl' : 'shadow-lg'} hover:shadow-xl transition-all duration-300`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-blue-900 mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-blue-900 mb-1">{plan.price}</div>
                    <div className="text-gray-600">{plan.period}</div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-green-600 hover:bg-green-700 text-white' 
                      : 'bg-blue-900 hover:bg-blue-800 text-white'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                About Your AI Automation Specialist
              </h2>
            </div>
            
            <div className="bg-white rounded-xl shadow-xl p-8 md:p-12">
              <div className="flex items-start gap-8 mb-8">
                <div className="flex-shrink-0">
                  <img 
                    src="/images/profile.jpg" 
                    alt="AI Automation Specialist" 
                    className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-blue-100 shadow-lg"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.parentElement?.querySelector('.fallback') as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div className="fallback w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center border-4 border-white shadow-lg" style={{display: 'none'}}>
                    <User className="h-12 w-16 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-blue-900 mb-4">
                    Singapore-Based Freelance Consultant
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    I'm a Singapore-based software developer and freelancer specializing in AI automation solutions for local businesses. 
                    With expertise in machine learning and automation tools and platforms, I help SMEs streamline their operations without 
                    the complexity of traditional software development.
                  </p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-blue-900 mb-4">Tools I Use:</h4>
                  <ul className="space-y-2">
                    {['Zapier for workflow automation', 'ChatGPT for intelligent responses', 'WhatsApp Business API', 'No-code integration platforms'].map((tool, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-green-600" />
                        <span className="text-gray-700">{tool}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-blue-900 mb-4">Why Choose Me:</h4>
                  <ul className="space-y-2">
                    {['Local Singapore market knowledge', 'Fast implementation timelines', 'Ongoing support and training', 'Cost-effective solutions'].map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-green-600" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-form" className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Automate Your Business?
              </h2>
              <p className="text-xl text-blue-100">
                Get in touch for a free consultation
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
                <form
                  onSubmit={handleSubmit}
                  action="https://formspree.io/f/mdkdlnva"
                  method="POST"
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-green-400"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-green-400"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-green-400"
                        placeholder="+65 1234 5678"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Service Interest</label>
                      <select
                        name="service"
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                      >
                        <option value="" className="text-gray-900">Select a service</option>
                        <option value="customer-service" className="text-gray-900">Customer Service Automation</option>
                        <option value="marketing-sales" className="text-gray-900">Marketing & Sales Automation</option>
                        <option value="business-operations" className="text-gray-900">Business Operations Automation</option>
                        <option value="custom" className="text-gray-900">Custom Solution</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-green-400 resize-none"
                      placeholder="Tell us about your business and automation needs..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Send Message
                  </button>
                </form>
              </div>
              
              <div className="lg:pl-8">
                <h3 className="text-2xl font-semibold mb-6">Get In Touch Directly</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <MapPin className="h-6 w-6 text-green-400" />
                    <div>
                      <div className="font-medium">Location</div>
                      <div className="text-blue-100">Singapore</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <MessageCircle className="h-6 w-6 text-green-400" />
                    <div>
                      <div className="font-medium">WhatsApp</div>
                      <a
                        href="https://api.whatsapp.com/send?phone=6591493160&text=Hi%21+I%27m+interested+in+learning+more+about+AI+automation+for+my+business."
                        onClick={e => {
                          e.preventDefault();
                          handleWhatsAppClick();
                        }}
                        className="text-green-400 hover:text-green-300 transition-colors"
                      >
                        +65 9149 3160
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-white/10 rounded-lg border border-white/20">
                  <h4 className="font-semibold mb-3">Quick Response Guarantee</h4>
                  <p className="text-blue-100 text-sm">
                    I respond to all inquiries within 24 hours during business days. 
                    For urgent matters, WhatsApp is the fastest way to reach me.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-sm mb-4">
              © 2025 IntegrateSG Automation. All rights reserved.
            </p>
            <div className="text-xs space-y-1">
              <p>
                <strong>Sources:</strong> Sources: Salesforce SMB Trends (itbrief.asia), AIMultiple Research (research.aimultiple.com)
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;