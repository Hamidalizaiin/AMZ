 import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";

const testimonials = [
  {
    name: "Sarah Lee",
    role: "Ecommerce Brand Owner",
    text: "They transformed our Amazon store with incredible visuals and SEO-focused strategies. Our listings finally stand out.",
    image: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "David Carter",
    role: "Private Label Seller",
    text: "The PPC optimization results blew us away. Within a month, our sales jumped by 45%.",
    image: "https://i.pravatar.cc/150?img=2",
  },
  {
    name: "Emily Stone",
    role: "Startup Founder",
    text: "Super professional and full of insights. They handle every detail so we can focus on growing our business.",
    image: "https://i.pravatar.cc/150?img=3",
  },
  {
    name: "Jason Patel",
    role: "Online Retailer",
    text: "Their creativity and data-driven approach completely changed the way we run ads. Highly recommend.",
    image: "https://i.pravatar.cc/150?img=4",
  },
  {
    name: "Laura Kim",
    role: "Brand Strategist",
    text: "From product research to design, they bring clarity and results. Our conversions have doubled.",
    image: "https://i.pravatar.cc/150?img=5",
  },
  {
    name: "Marcus Green",
    role: "Shopify Seller",
    text: "They’re more than a service — they’re a true partner. The team is always proactive and responsive.",
    image: "https://i.pravatar.cc/150?img=6",
  },
  {
    name: "Alicia Brown",
    role: "Retail Founder",
    text: "Our Amazon presence is now polished, competitive, and performing better than ever. Worth every penny.",
    image: "https://i.pravatar.cc/150?img=7",
  },
  {
    name: "Tom Harris",
    role: "Amazon Reseller",
    text: "Their listing optimization alone tripled our product ranking in just two weeks.",
    image: "https://i.pravatar.cc/150?img=8",
  },
  {
    name: "Sophia White",
    role: "Entrepreneur",
    text: "They helped us understand Amazon algorithms like no one else. Genuine experts with creative ideas.",
    image: "https://i.pravatar.cc/150?img=9",
  },
  {
    name: "Ryan Cooper",
    role: "Product Manager",
    text: "The process was smooth and results-focused. Their attention to detail and design sense is unmatched.",
    image: "https://i.pravatar.cc/150?img=10",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative min-h-screen py-20 bg-white text-black flex items-center"
    >
      {/* Glowing background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-orange-500/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-yellow-400/20 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 bg-clip-text text-transparent"
        >
          What Our Clients Say
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-black mt-4 mb-12 text-lg"
        >
          Real people. Real results. Hear how we helped Amazon sellers scale with confidence.
        </motion.p>

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1440: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 backdrop-blur-sm border border-orange-500/30 p-6 rounded-2xl shadow-md text-center hover:shadow-orange-500/20 transition-all duration-300"
              >
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-16 h-16 rounded-full border-2 border-yellow-400 mx-auto mb-4"
                />
                <p className="text-gray-200 text-sm italic mb-4">“{t.text}”</p>
                <h3 className="text-lg font-semibold text-orange-300">
                  {t.name}
                </h3>
                <span className="text-sm text-yellow-400">{t.role}</span>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
