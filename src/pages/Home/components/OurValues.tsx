 import { motion } from 'framer-motion';
import { FaHandshake, FaLightbulb, FaUsers, FaStar, FaCheckCircle } from 'react-icons/fa';

const values = [
    {
        title: 'Integrity',
        icon: (
            <FaHandshake className="text-3xl text-yellow-500 drop-shadow-glow" />
        ),
        desc: 'Honest strategies, real results.',
        bullets: [
            'Transparent communication',
            'Ethical Amazon practices',
            'Long-term client trust',
        ],
    },
    {
        title: 'Innovation',
        icon: (
            <FaLightbulb className="text-3xl text-yellow-500 drop-shadow-glow" />
        ),
        desc: 'Turning challenges into creative Amazon growth.',
        bullets: [
            'Creative problem solving',
            'Latest Amazon tools',
            'Continuous improvement',
        ],
    },
    {
        title: 'Collaboration',
        icon: (
            <FaUsers className="text-3xl text-yellow-500 drop-shadow-glow" />
        ),
        desc: 'Working hand-in-hand with our clients.',
        bullets: [
            'Personalized strategies',
            'Open feedback loop',
            'Shared success goals',
        ],
    },
    {
        title: 'Excellence',
        icon: (
            <FaStar className="text-3xl text-yellow-500 drop-shadow-glow" />
        ),
        desc: 'Delivering results that set new standards.',
        bullets: [
            'Premium service quality',
            'Data-driven results',
            'Setting new benchmarks',
        ],
    },
];

const bgGradient =
    'min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden';

const OurValues = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className={bgGradient + ' py-20 px-4 sm:px-8 lg:px-16 w-full'}
        >
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 z-10 relative">
                {/* Left side: heading, desc, CTA */}
                <div className="w-full md:w-5/12 flex flex-col items-center md:items-start justify-center text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="mb-4"
                    >
                        <span className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-300 text-sm font-medium mb-8 animate-pulse mx-auto md:mx-0">
                            <FaCheckCircle className="w-4 h-4 mr-2" />
                            Our Values
                        </span>
                        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-white drop-shadow-glow md:text-left">
                            Our Values
                        </h2>
                        <p className="text-base sm:text-lg text-white font-medium mb-6 max-w-xl mx-auto md:mx-0 md:text-left">
                            Built on trust, driven by innovation — our values shape every
                            Amazon success story. We believe in honest communication,
                            creative solutions, and working hand-in-hand with our clients to
                            deliver results that set new standards. Our commitment is to
                            your long-term success on Amazon, powered by integrity,
                            innovation, collaboration, and excellence.
                        </p>
                        <button className="group relative bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 sm:px-8 py-3 rounded-xl font-semibold text-lg hover:from-orange-600 hover:to-yellow-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden mx-auto md:mx-0">
                            <span className="relative flex items-center justify-center">
                                Get Started
                            </span>
                        </button>
                    </motion.div>
                </div>
                {/* Right side: 4 value boxes in a grid */}
                <div className="w-full md:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 text-center md:text-left">
                    {values.map((value, idx) => (
                        <motion.div
                            key={value.title}
                            initial={{ opacity: 0, y: 40, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.7, delay: idx * 0.15 }}
                            viewport={{ once: true, amount: 0.5 }}
                            className="bg-white/90 rounded-2xl shadow-xl px-4 sm:px-6 py-6 sm:py-8 flex flex-col items-center sm:items-center md:items-start text-center md:text-left border-2 border-transparent hover:border-blue-300 transition-all duration-200 min-w-[180px] sm:min-w-[220px] min-h-[220px] sm:min-h-[260px] flex-1"
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.7 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{ scale: 1.2, filter: 'drop-shadow(0 0 16px #facc15)' }}
                                transition={{ duration: 0.5 }}
                                className="mb-3 cursor-pointer"
                            >
                                {value.icon}
                            </motion.div>
                            <h3 className="text-xl font-bold mb-2 text-yellow-500 drop-shadow-glow text-center md:text-left">
                                {value.title}
                            </h3>
                            <p className="text-slate-700 text-base font-medium mb-3 text-center md:text-left">
                                {value.desc}
                            </p>
                            <ul className="text-left text-sm text-slate-600 font-medium space-y-2 md:text-left text-center">
                                {value.bullets.map((b, i) => (
                                    <li key={i} className="flex items-center gap-2">
                                        <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-br from-blue-400 via-indigo-400 to-white shadow" />
                                        {b}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default OurValues;
// Tailwind custom drop-shadow utility (add to tailwind.config.js if needed):
// drop-shadow-glow: '0 0 12px rgba(251,146,60,0.25), 0 2px 8px rgba(59,130,246,0.12)'