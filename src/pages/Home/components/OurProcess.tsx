 import { motion } from 'framer-motion';
import { FaSearch, FaEdit, FaRocket, FaChartLine } from 'react-icons/fa';

const steps = [
	{
		title: 'Product Analysis',
		icon: <FaSearch className="text-5xl text-yellow-500 drop-shadow-glow" />,
		desc: 'We analyze your products and competitors to uncover growth opportunities.\nData-driven insights for smart decisions.',
	},
	{
		title: 'Listing Optimization',
		icon: <FaEdit className="text-5xl text-yellow-500 drop-shadow-glow" />,
		desc: 'Crafting high-converting copy, images, and SEO for maximum visibility.\nPremium design and content for standout listings.',
	},
	{
		title: 'PPC Launch',
		icon: <FaRocket className="text-5xl text-yellow-500 drop-shadow-glow" />,
		desc: 'Strategic ad campaigns to drive traffic and boost sales.\nContinuous monitoring for optimal results.',
	},
	{
		title: 'Review & Scale',
		icon: <FaChartLine className="text-5xl text-yellow-500 drop-shadow-glow" />,
		desc: 'Ongoing review and scaling for long-term success.\nWe help you grow and dominate your niche.',
	},
];

export const OurProcess = () => {
	return (
		<section className="relative bg-white py-20 px-4 sm:px-8 lg:px-16 w-full overflow-hidden">
			{/* Animated gradient blobs: smooth alternating pulse */}
			<motion.div
				initial={{ opacity: 0.5, scale: 1 }}
				animate={{
					opacity: [0.5, 0.8, 0.5, 0, 0.5],
					scale: [1, 1.15, 1, 1, 1.1],
				}}
				transition={{ duration: 8, times: [0, 0.25, 0.5, 0.75, 1], repeat: Infinity }}
				className="absolute top-0 left-0 w-56 h-56 rounded-full blur-3xl z-0"
				style={{ background: 'linear-gradient(135deg, #fb923c 40%, #fde047 80%, #3b82f6 100%)' }}
			/>
			<motion.div
				initial={{ opacity: 0, scale: 1 }}
				animate={{
					opacity: [0, 0.5, 0.8, 0.5, 0, 0],
					scale: [1, 1.1, 1.15, 1, 1, 1],
				}}
				transition={{ duration: 8, times: [0, 0.2, 0.5, 0.7, 0.9, 1], repeat: Infinity }}
				className="absolute bottom-0 right-0 w-72 h-72 rounded-full blur-3xl z-0"
				style={{ background: 'linear-gradient(135deg, #3b82f6 40%, #fde047 80%, #fb923c 100%)' }}
			/>
			<div className="max-w-4xl mx-auto text-center mb-12 z-10 relative">
				<motion.h2
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7 }}
					viewport={{ once: true }}
					className="text-4xl sm:text-5xl font-extrabold mb-4"
				>
					<span className="block bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-600 bg-clip-text text-transparent">
						Our Process
					</span>
				</motion.h2>
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, delay: 0.2 }}
					viewport={{ once: true }}
					className="text-lg sm:text-xl text-slate-600 font-medium"
				>
					How We Turn Amazon Stores Into Top Performers
				</motion.p>
			</div>
			<div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 z-10 w-full">
				{steps.map((step, idx) => (
					<motion.div
						key={step.title}
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, delay: idx * 0.2 }}
						whileHover={{ scale: 1.05, boxShadow: '0 8px 32px 0 rgba(251,146,60,0.15)' }}
						viewport={{ once: true, amount: 0.5 }}
						className="relative bg-white rounded-2xl shadow-xl px-6 py-8 flex flex-col items-center text-center border-2 border-transparent hover:border-orange-300 transition-all duration-200 min-h-0 sm:min-h-[340px] w-full"
						style={{ minWidth: 0 }}
					>
						<div className="mb-4">
							{step.icon}
						</div>
						<h3 className="text-xl font-bold mb-2">
							<span className="block bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-600 bg-clip-text text-transparent">
								{step.title}
							</span>
						</h3>
						<p className="text-gray-600 text-base font-medium mb-2 whitespace-pre-line">
							{step.desc}
						</p>
					</motion.div>
				))}
			</div>
		</section>
	);
};

// Tailwind custom drop-shadow utility (add to tailwind.config.js if needed):
// drop-shadow-glow: '0 0 12px rgba(251,146,60,0.25), 0 2px 8px rgba(59,130,246,0.12)'
