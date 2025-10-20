import React, { useState, useEffect } from 'react';
import {

  FaRocket,
   FaArrowRight,
  FaPlay,
  FaCheckCircle,
  FaDollarSign,
  FaTrophy
} from 'react-icons/fa';
import CountUp from '../../../components/CountUp';

 
const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);


  useEffect(() => {
    setIsVisible(true);
  }, []);



  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 relative z-10">
        {/* Hero Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-300 text-sm font-medium mb-8 animate-pulse">
            <FaCheckCircle className="w-4 h-4 mr-2" />
            Trusted by <CountUp end={10000} duration={3000} suffix="+" className="mx-1" /> Amazon Sellers
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-8 leading-tight">
            Scale Your
            <span className="block bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 bg-clip-text text-transparent animate-gradient">
              Amazon Business
            </span>
            to New Heights
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            From product research to PPC optimization, we provide end-to-end Amazon services
            that drive sales, increase rankings, and maximize your profits.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="group bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:from-orange-600 hover:to-yellow-600 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-orange-500/25">
              <span className="flex items-center">
                Start Your Journey
                <FaArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
            <button className="group border-2 border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm">
              <span className="flex items-center">
                <FaPlay className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Watch Demo
              </span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto mb-16">
            <div className="text-center group">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">
                <FaDollarSign className="inline w-8 h-8 sm:w-10 sm:h-10 mr-2" />
                <CountUp
                  end={50000}
                  duration={2500}
                  prefix=""
                  suffix="+"
                  className="inline"
                />
              </div>
              <div className="text-gray-400">Revenue Generated</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">
                <FaRocket className="inline w-8 h-8 sm:w-10 sm:h-10 mr-2" />
                <CountUp
                  end={500}
                  duration={2000}
                  suffix="+"
                  className="inline"
                />
              </div>
              <div className="text-gray-400">Products Launched</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">
                <FaTrophy className="inline w-8 h-8 sm:w-10 sm:h-10 mr-2" />
                <CountUp
                  end={98}
                  duration={1800}
                  suffix="%"
                  className="inline"
                />
              </div>
              <div className="text-gray-400">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Features Grid */}

      </div>
    </div>
  );
};

export default HeroSection;
