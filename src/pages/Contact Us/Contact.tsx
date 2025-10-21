import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="min-h-screen bg-white text-gray-900 py-20 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-400 bg-clip-text text-transparent"
        >
          Get in Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-gray-600 max-w-2xl mx-auto"
        >
          Have questions or need help with your Amazon business? Our expert team
          is ready to assist you with the right solutions.
        </motion.p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="flex items-start space-x-4">
            <div className="bg-gradient-to-br from-orange-400 to-amber-500 text-white p-4 rounded-2xl">
              <FaEnvelope size={22} />
            </div>
            <div>
              <h4 className="font-semibold text-lg text-gray-800">Email</h4>
              <p className="text-gray-600">support@amzservices.com</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-gradient-to-br from-orange-400 to-amber-500 text-white p-4 rounded-2xl">
              <FaPhoneAlt size={22} />
            </div>
            <div>
              <h4 className="font-semibold text-lg text-gray-800">Phone</h4>
              <p className="text-gray-600">+1 (800) 234-5678</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-gradient-to-br from-orange-400 to-amber-500 text-white p-4 rounded-2xl">
              <FaMapMarkerAlt size={22} />
            </div>
            <div>
              <h4 className="font-semibold text-lg text-gray-800">Office</h4>
              <p className="text-gray-600">
                123 Market Street, Suite 500, Business City
              </p>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-50 shadow-xl rounded-2xl p-8 border border-orange-200"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                First Name
              </label>
              <input
                type="text"
                placeholder="John"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-500 transition"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Doe"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-500 transition"
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-500 transition"
            />
          </div>

          <div className="mt-6">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              rows={4}
              placeholder="How can we help you?"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-500 transition"
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-6 w-full bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-400 hover:opacity-90 text-white py-3 rounded-lg font-semibold transition duration-300 shadow-lg"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
