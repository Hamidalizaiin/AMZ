import { motion } from "framer-motion";
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20 px-6 overflow-hidden">
      {/* Animated gradient orbs */}
      <motion.div
        initial={{ opacity: 0.4, scale: 1 }}
        animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-600 rounded-full blur-3xl opacity-40"
      />
      <motion.div
        initial={{ opacity: 0.3, scale: 1 }}
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.15, 1] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute bottom-10 right-10 w-72 h-72 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 rounded-full blur-3xl opacity-40"
      />

      {/* Footer content */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand Info */}
        <div>
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r text-white bg-clip-text ">
            AMZ
          </h3>
          <p className="text-slate-300 mb-6 text-sm leading-relaxed">
            We help brands succeed on Amazon through strategy, optimization, and marketing. 
            Your growth is our mission.
          </p>
          <div className="flex space-x-4">
            {[FaFacebook, FaInstagram, FaTwitter, FaLinkedin].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="text-slate-300 hover:text-orange-400 transition"
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-orange-400">Quick Links</h4>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li><a href="#" className="hover:text-yellow-400 transition">Home</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition">Services</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition">Case Studies</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition">About Us</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-orange-400">Services</h4>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li><a href="#" className="hover:text-yellow-400 transition">Product Research</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition">Listing Optimization</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition">Amazon PPC</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition">Store Setup</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition">Brand Management</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-orange-400">Join Our Newsletter</h4>
          <p className="text-slate-300 text-sm mb-4">
            Stay updated with the latest Amazon strategies and success stories.
          </p>
          <form className="flex flex-col sm:flex-row items-center gap-3">
            <div className="relative w-full">
              <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 text-lg" />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full pl-10 pr-4 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-orange-400  to-yellow-600 hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300 w-full sm:w-auto"
            >
              Subscribe
            </motion.button>
          </form>
        </div>
      </div>

      {/* Divider */}
      <div className="relative z-10 border-t border-white/10 mt-16 pt-6 text-center">
        <p className="text-slate-400 text-sm">
          © {new Date().getFullYear()} Amazon Growth Pro. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
export default Footer;