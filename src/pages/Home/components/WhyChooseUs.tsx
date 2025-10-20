"use client";
import { motion } from "framer-motion";
import { FaStar, FaRocket, FaHeadset, FaChartLine } from "react-icons/fa";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <FaChartLine className="w-10 h-10 text-yellow-400" />,
      title: "Proven Growth Strategies",
      desc: "We craft custom data-driven plans that increase your visibility, boost conversion rates, and maximize long-term ROI.",
    },
    {
      icon: <FaRocket className="w-10 h-10 text-yellow-400" />,
      title: "Fast Product Launches",
      desc: "Accelerate your product launch timeline with optimized listings, strong PPC strategy, and smart ranking techniques.",
    },
    {
      icon: <FaHeadset className="w-10 h-10 text-yellow-400" />,
      title: "24/7 Dedicated Support",
      desc: "We’re your partners in success — available around the clock to solve problems and guide your Amazon journey.",
    },
    {
      icon: <FaStar className="w-10 h-10 text-yellow-400" />,
      title: "Trusted by 10,000+ Sellers",
      desc: "Thousands of sellers rely on our expertise to scale sustainably and achieve measurable growth on Amazon.",
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-24 overflow-hidden">
      {/* Animated glow effects */}
      <motion.div
        initial={{ opacity: 0.4, scale: 1 }}
        animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-0 left-0 w-96 h-96 rounded-full bg-gradient-to-br from-orange-500/30 via-yellow-400/30 to-transparent blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0.4, scale: 1 }}
        animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full bg-gradient-to-tr from-blue-500/30 via-indigo-400/20 to-transparent blur-3xl"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="inline-flex items-center px-6 py-2 rounded-full bg-orange-500/20 border border-orange-400/30 text-orange-300 text-sm font-medium mb-6 animate-pulse"
        >
          🚀 Trusted by <span className="mx-1 font-semibold">10,000+</span> Amazon Sellers
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-white mb-6"
        >
          <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Why Choose Us
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-slate-300 max-w-3xl mx-auto text-lg leading-relaxed"
        >
          We don’t just manage your Amazon store — we elevate it. Our expert team uses data, design, and strategy to help you build a brand that wins.
        </motion.p>

        {/* Features in alternating motion layout */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-center sm:items-start bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-orange-400/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(251,146,60,0.15)]"
            >
              <motion.div
                whileHover={{ rotate: 10, scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6"
              >
                {item.icon}
              </motion.div>
              <div className="text-center sm:text-left">
                <h3 className="text-xl font-bold text-yellow-400 mb-2">{item.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
