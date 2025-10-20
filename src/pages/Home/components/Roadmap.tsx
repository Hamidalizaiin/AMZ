 import { motion } from 'framer-motion';
import { FaSearch, FaEdit, FaRocket, FaChartLine } from 'react-icons/fa';

const steps = [
  {
    title: 'Product Analysis',
    icon: <FaSearch className="text-4xl text-orange-400 drop-shadow-glow" />,
    desc: 'Deep market and competitor research to uncover growth opportunities.'
  },
  {
    title: 'Listing Optimization',
    icon: <FaEdit className="text-4xl text-yellow-400 drop-shadow-glow" />,
    desc: 'Crafting high-converting copy, images, and SEO for maximum visibility.'
  },
  {
    title: 'PPC Launch',
    icon: <FaRocket className="text-4xl text-blue-400 drop-shadow-glow" />,
    desc: 'Strategic ad campaigns to drive traffic and boost sales.'
  },
  {
    title: 'Review & Scale',
    icon: <FaChartLine className="text-4xl text-gradient drop-shadow-glow" />,
    desc: 'Continuous improvement and scaling for long-term success.'
  },
];

export const Roadmap = () => {
  return (
    <section className="bg-white py-20 px-4 sm:px-8 lg:px-16 w-full">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 bg-gradient-to-r from-orange-400 via-yellow-400 to-blue-500 bg-clip-text text-transparent drop-shadow-glow">
          Our Process
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 font-medium">
          How We Turn Amazon Stores Into Top Performers
        </p>
      </div>
      <div className="relative flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-0">
        {/* Timeline connector */}
        <div className="hidden sm:block absolute left-1/2 top-12 h-[calc(100%-4rem)] w-1 -translate-x-1/2 bg-gradient-to-b from-orange-400 via-yellow-400 to-blue-500 rounded-full z-0 shadow-lg" />
        <div className="flex flex-col sm:flex-row items-center justify-center w-full z-10">
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.2 }}
              whileHover={{ scale: 1.05, boxShadow: '0 8px 32px 0 rgba(251,146,60,0.15)' }}
              viewport={{ once: true, amount: 0.5 }}
              className={`relative bg-white rounded-2xl shadow-xl px-6 py-8 mx-0 sm:mx-6 mb-10 sm:mb-0 flex flex-col items-center text-center border-2 border-transparent hover:border-orange-300 transition-all duration-200 ${idx === 0 ? 'sm:mt-0' : 'sm:mt-12'} ${idx === steps.length-1 ? 'sm:mb-0' : ''}`}
              style={{ minWidth: 220, maxWidth: 320 }}
            >
              <div className="mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-orange-400 via-yellow-400 to-blue-500 bg-clip-text text-transparent">
                {step.title}
              </h3>
              <p className="text-gray-600 text-base font-medium mb-2">
                {step.desc}
              </p>
              {/* Arrow connector for desktop */}
              {idx < steps.length - 1 && (
                <div className="hidden sm:block absolute right-0 left-0 mx-auto -bottom-8 w-10 h-10 flex items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.7 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: idx * 0.2 + 0.3 }}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 via-yellow-400 to-blue-500 flex items-center justify-center shadow-lg"
                  >
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path d="M12 4v16m0 0l-5-5m5 5l5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Tailwind custom drop-shadow utility (add to tailwind.config.js if needed):
// drop-shadow-glow: '0 0 12px rgba(251,146,60,0.25), 0 2px 8px rgba(59,130,246,0.12)'
