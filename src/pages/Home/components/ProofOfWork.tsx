import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChartLine, FaDollarSign, FaDownload } from "react-icons/fa";

const items = [
  {
    id: 1,
    title: "Sales Dashboard — 30 Days",
    image: "/assets/images/sales30.jpg",
    kpi: "+45% Revenue",
    kpiSub: "vs previous month",
    caption:
      "PPC + Listing optimizations drove steady revenue growth and improved ACoS.",
  },
  {
    id: 2,
    title: "Weekly Revenue Trend",
    image: "/assets/images/7day.png",
    kpi: "$104.72k",
    kpiSub: "Weekly revenue",
    caption:
      "High-converting campaign adjustments resulted in revenue spikes during promotions.",
  },
  {
    id: 3,
    title: "Organic Ranking Improvements",
    image: "/assets/images/ads.png",
    kpi: "Top 3 Keywords",
    kpiSub: "Improved rank",
    caption:
      "Keyword-led content and backend optimizations improved organic visibility.",
  },
  {
    id: 4,
    title: "Ad Spend Efficiency",
    image: "/assets/images/trends.png",
    kpi: "-18% ACoS",
    kpiSub: "Lower cost / conversion",
    caption:
      "Optimized bids & negative keywords increased ROI and lower ACoS.",
  },
];

export default function ProofOfWork() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="relative bg-white py-24 px-6 sm:px-10 lg:px-20 w-full overflow-hidden">
      {/* Gradient accents */}
      <motion.div
        initial={{ opacity: 0.5 }}
        animate={{ opacity: [0.45, 0.8, 0.45], scale: [1, 1.12, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-0 left-12 w-56 h-56 rounded-full blur-3xl z-0"
        style={{
          background:
            "linear-gradient(135deg,#fb923c 30%, #fde047 70%, #3b82f6 100%)",
          opacity: 0.18,
        }}
      />
      <motion.div
        initial={{ opacity: 0.4 }}
        animate={{ opacity: [0.3, 0.65, 0.3], scale: [1, 1.08, 1] }}
        transition={{ duration: 11, repeat: Infinity, delay: 1 }}
        className="absolute bottom-10 right-12 w-72 h-72 rounded-full blur-3xl z-0"
        style={{
          background:
            "linear-gradient(135deg,#3b82f6 30%, #fde047 70%, #fb923c 100%)",
          opacity: 0.14,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-600 bg-clip-text text-transparent">
              Proof of Work
            </span>
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Real analytics and revenue improvements from campaigns and listing
            optimizations we've implemented.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((it, idx) => (
            <motion.div
              key={it.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Thumbnail */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={it.image}
                  alt={it.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-white/90 border border-slate-200 rounded-full px-3 py-1 flex items-center gap-2 text-xs shadow-sm">
                  <FaChartLine className="text-orange-400 w-4 h-4" />
                  <span className="font-semibold text-slate-800">
                    {it.kpi}
                  </span>
                  <span className="text-slate-500">{it.kpiSub}</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                  <span className="text-white text-sm font-medium">
                    {it.title}
                  </span>
                  <button className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/90 text-white text-xs font-medium">
                    <FaDownload className="w-3 h-3" /> View
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-base font-semibold text-slate-800 mb-2">
                  {it.title}
                </h3>
                <p className="text-sm text-slate-600 flex-grow leading-relaxed">
                  {it.caption}
                </p>
                <div className="mt-5 flex items-center justify-between text-xs text-slate-500">
                  <span>Analytics • Revenue • PPC</span>
                  <button
                    onClick={() => setActive(it.id)}
                    className="text-orange-500 font-semibold hover:underline"
                  >
                    View full
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <a
            href="#"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-600 text-white font-semibold shadow-md hover:shadow-lg hover:scale-[1.03] transition"
          >
            <FaDollarSign />
            Request Full Report
          </a>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="max-w-4xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={items.find((i) => i.id === active)!.image}
                  alt={items.find((i) => i.id === active)!.title}
                  className="w-full object-contain max-h-[80vh]"
                />
                <button
                  onClick={() => setActive(null)}
                  className="absolute top-4 right-4 bg-white/90 p-2 rounded-full shadow text-slate-700 hover:bg-white"
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900">
                  {items.find((i) => i.id === active)!.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {items.find((i) => i.id === active)!.caption}
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-sm font-semibold">
                    {items.find((i) => i.id === active)!.kpi}
                  </span>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-600 text-white text-sm font-semibold shadow"
                  >
                    <FaDownload /> Download Report
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
