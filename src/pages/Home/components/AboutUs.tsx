import React, { useState, useEffect, useRef } from 'react';

import {
  FaRocket,
  FaChartLine,
  FaBriefcase,
  FaArrowRight,
} from 'react-icons/fa';
 
const AboutUs: React.FC = () => {
 const [isVisible, setIsVisible] = useState<boolean>(false);
   const sectionRef = useRef<HTMLElement>(null);
  const boxRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

   
  const stats = [
    {
      icon: <FaRocket className="w-6 h-6" />,
      number: "100+",
      label: "Listings Optimized"
    },
    {
      icon: <FaChartLine className="w-6 h-6" />,
      number: "230%",
      label: "Average Growth"
    },
    {
      icon: <FaBriefcase className="w-6 h-6" />,
      number: "450+",
      label: "Brands Scaled"
    }
  ];

  return (
    <>
      {/* About Us Section */}
      <section
        ref={sectionRef}
        className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Image Section - Left */}
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div
                ref={imageRef}
                className="relative group"
              >
                {/* Main image container (now with team image) */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-800 to-blue-800 p-8">
                  <div className="aspect-[4/3] rounded-xl flex items-center justify-center relative overflow-hidden bg-gray-700">
                    <img src={"/assets/images/team.jpg"} alt="Team" className="w-full h-full object-cover" />
                    {/* Animated floating geometric shapes (overlay) */}
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute top-4 left-4 w-16 h-16 bg-orange-400/30 rounded-lg rotate-12 animate-float-up-down" />
                      <div className="absolute top-8 right-8 w-12 h-12 bg-yellow-400/40 rounded-full animate-float-left-right" />
                      <div className="absolute bottom-6 left-8 w-20 h-8 bg-orange-500/20 rounded-full animate-float-up-down" style={{ animationDelay: '1s' }} />
                      <div className="absolute bottom-4 right-4 w-14 h-14 bg-yellow-500/30 rounded-lg -rotate-12 animate-float-left-right" style={{ animationDelay: '0.5s' }} />
                      <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-orange-300/40 rounded-full animate-float-up-down" style={{ animationDelay: '1.5s' }} />
                      <div className="absolute top-1/3 right-1/3 w-10 h-10 bg-yellow-300/30 rounded-lg rotate-45 animate-float-left-right" style={{ animationDelay: '2s' }} />
                    </div>
                  </div>
                </div>

                {/* Glowing border effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10" />

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-400 rounded-full opacity-60 animate-pulse" />
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-yellow-400 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
            </div>

            {/* Text Section - Right */}
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="text-center lg:text-left">
                {/* Badge */}
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-300 text-sm font-medium mb-6">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-2 animate-pulse" />
                  About Our Agency
                </div>

                {/* Heading */}
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                  Who We Are
                </h2>

                {/* Subheading */}
                <h3 className="text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 bg-clip-text text-transparent mb-6">
                  Your Amazon Growth Partner
                </h3>

                {/* Description */}
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  We're a team of Amazon experts, designers, and strategists who turn ordinary stores into top-performing brands.
                  From listing optimization to PPC mastery, we use smart data and creative strategies to make your products
                  stand out — and sell more.
                </p>



                {/* Stats Row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className={`bg-slate-800/80 backdrop-blur-sm border border-orange-500/30 rounded-xl p-4 text-center hover:shadow-lg hover:border-orange-400 hover:-translate-y-1 transition-all duration-300 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                      style={{ transitionDelay: `${600 + index * 100}ms` }}
                    >
                      <div className="text-orange-500 mb-2 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                        {stat.icon}
                      </div>
                      <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                      <div className="text-sm text-gray-300">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="text-center lg:text-left">
                  <button className="group relative bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-orange-600 hover:to-yellow-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden">
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />

                    <span className="relative flex items-center justify-center lg:justify-start">
                      Learn More About Us
                      <FaArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes ripple {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 0;
          }
        }
        
        @keyframes float-up-down {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes float-left-right {
          0%, 100% {
            transform: translateX(0px);
          }
          50% {
            transform: translateX(15px);
          }
        }
        
        .animate-float-up-down {
          animation: float-up-down 3s ease-in-out infinite;
        }
        
        .animate-float-left-right {
          animation: float-left-right 2.5s ease-in-out infinite;
        }
        
        @media (max-width: 768px) {
          .fixed {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default AboutUs;