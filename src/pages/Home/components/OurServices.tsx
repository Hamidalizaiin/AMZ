import React, { useState, useEffect } from 'react';
import { 
  FaUserCog, 
  FaSearch, 
  FaEdit, 
  FaBullhorn, 
   FaStore,
  FaArrowRight,
  FaCheckCircle,
   FaTrophy,
  FaUsers,
   FaShieldAlt,
 } from 'react-icons/fa';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const OurServices: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const services: Service[] = [
    {
      icon: <FaUserCog className="w-8 h-8" />,
      title: "Amazon Account Setup & Management",
      description: "Complete Amazon seller account setup and ongoing management to ensure compliance and optimal performance.",
      features: ["Account Registration", "Seller Central Setup", "Compliance Management", "Performance Monitoring"]
    },
    {
      icon: <FaEdit className="w-8 h-8" />,
      title: "Product Listing Optimization (SEO + Copywriting)",
      description: "Optimize your product listings with SEO strategies and compelling copywriting to increase visibility and conversions.",
      features: ["Keyword Research", "Title Optimization", "Bullet Points", "Product Descriptions"]
    },
    {
      icon: <FaBullhorn className="w-8 h-8" />,
      title: "Amazon PPC (Advertising) Management",
      description: "Expert PPC campaign management to maximize your advertising ROI and drive targeted traffic to your products.",
      features: ["Campaign Setup", "Keyword Optimization", "Bid Management", "Performance Analysis"]
    },
    {
      icon: <FaSearch className="w-8 h-8" />,
      title: "Product Research & Sourcing",
      description: "Data-driven product research and sourcing solutions to identify profitable opportunities in the Amazon marketplace.",
      features: ["Market Analysis", "Competitor Research", "Supplier Vetting", "Profitability Analysis"]
    },
    {
      icon: <FaStore className="w-8 h-8" />,
      title: "A+ Content & Brand Storefront Design",
      description: "Create compelling A+ content and brand storefronts that showcase your products and build brand authority.",
      features: ["A+ Content Creation", "Storefront Design", "Brand Storytelling", "Visual Enhancement"]
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: "Account Health & Reinstatement Services",
      description: "Protect and restore your Amazon account health with our expert reinstatement and compliance services.",
      features: ["Account Health Monitoring", "Policy Compliance", "Reinstatement Appeals", "Risk Prevention"]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('our-services');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="our-services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content - Left Side */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="mb-8">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-600 text-sm font-medium mb-6">
                <FaCheckCircle className="w-4 h-4 mr-2" />
                Our Expertise
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Comprehensive
                <span className="block bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-600 bg-clip-text text-transparent">
                  Amazon Services
                </span>
                for Your Success
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We provide end-to-end Amazon services that drive sales, increase rankings, 
                and maximize your profits. Our expert team handles every aspect of your Amazon business.
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl border border-orange-100">
                <FaTrophy className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">98%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl border border-orange-100">
                <FaUsers className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
            </div>

            {/* CTA Button */}
            <button className="group bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-orange-600 hover:to-yellow-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              <span className="flex items-center">
                Get Started Today
                <FaArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </div>

          {/* Services Grid - Right Side */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className={`bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-orange-200 transition-all duration-300 group transform hover:-translate-y-2 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="text-orange-500 mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 group-hover:text-gray-700 transition-colors duration-300">
                    {service.description}
                  </p>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs text-gray-500">
                        <FaCheckCircle className="w-3 h-3 text-orange-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
