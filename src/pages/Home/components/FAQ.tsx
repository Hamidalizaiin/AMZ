import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
 
const faqs = [
  {
    question: "How do you help Amazon sellers grow?",
    answer:
      "We analyze your store, optimize listings, run high-performing ad campaigns, and continuously improve based on real-time data to maximize your sales and brand visibility.",
  },
  {
    question: "What makes your services different?",
    answer:
      "Our team uses a data-driven approach, AI insights, and years of experience to craft personalized strategies that align with your goals — not generic templates.",
  },
  {
    question: "Do you work with new sellers?",
    answer:
      "Absolutely! Whether you’re just launching or scaling an established brand, our process adapts to your stage and helps you achieve long-term growth.",
  },
  {
    question: "Can I get a custom growth plan?",
    answer:
      "Yes. We create tailored plans after analyzing your listings, competitors, and product potential to ensure you get maximum ROI from every campaign.",
  },
  {
    question: "Do you manage PPC campaigns too?",
    answer:
      "Yes, we handle full Amazon PPC management — from keyword research to optimization and scaling — ensuring efficient ad spend and higher returns.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Most clients start noticing measurable growth within the first 4–6 weeks, depending on your product category, competition, and optimization level.",
  },
  {
    question: "Can you help with product launches?",
    answer:
      "Definitely! We plan complete launch strategies including keyword ranking, reviews, and ad campaigns to make sure your product gains traction fast.",
  },
  {
    question: "Do you offer ongoing support?",
    answer:
      "Yes, our team provides continuous monitoring, performance reports, and regular optimization so your store keeps improving over time.",
  },
  {
    question: "What if I already have an existing agency?",
    answer:
      "No problem — we can audit your current performance, identify gaps, and either work alongside your team or fully take over the management for better efficiency.",
  },
  {
    question: "Is there a minimum contract period?",
    answer:
      "No long-term lock-ins. We believe in results. You can continue working with us monthly based on performance and satisfaction.",
  },
];


export const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative bg-white py-20 px-4 sm:px-8 lg:px-16 w-full overflow-hidden">
      {/* Animated glowing background blobs */}
      <motion.div
        initial={{ opacity: 0.5, scale: 1 }}
        animate={{
          opacity: [0.4, 0.8, 0.4, 0],
          scale: [1, 1.15, 1, 1],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-0 left-0 w-56 h-56 rounded-full blur-3xl z-0"
        style={{
          background:
            "linear-gradient(135deg, #fb923c 40%, #fde047 80%, #3b82f6 100%)",
        }}
      />
      <motion.div
        initial={{ opacity: 0.4, scale: 1 }}
        animate={{
          opacity: [0.2, 0.6, 0.2, 0],
          scale: [1, 1.1, 1, 1],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-0 right-0 w-72 h-72 rounded-full blur-3xl z-0"
        style={{
          background:
            "linear-gradient(135deg, #3b82f6 40%, #fde047 80%, #fb923c 100%)",
        }}
      />

      <div className="max-w-3xl mx-auto text-center mb-12 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-extrabold mb-4"
        >
          <span className="bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-600 bg-clip-text text-transparent">
            Frequently Asked Questions
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg sm:text-xl text-slate-600 font-medium"
        >
          Everything you need to know before working with us
        </motion.p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4 relative z-10">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white border border-orange-200 rounded-2xl shadow-md p-5 sm:p-6 cursor-pointer transition-all duration-200"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                {faq.question}
              </h3>
              <motion.div
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <FaChevronDown className="text-orange-500 text-lg" />
              </motion.div>
            </div>

            <AnimatePresence>
              {activeIndex === index && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  className="mt-3 text-gray-600 text-base sm:text-lg leading-relaxed"
                >
                  {faq.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
