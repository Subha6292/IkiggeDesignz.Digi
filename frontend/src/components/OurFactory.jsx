import React from 'react'
import { motion } from 'framer-motion'
import { HiPlay } from 'react-icons/hi2'

const OurFactory = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-6">
              Our factory
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our state-of-the-art manufacturing facility combines traditional craftsmanship with modern technology. 
              We produce high-quality furniture and fixtures that meet international standards, ensuring every piece 
              reflects our commitment to excellence and attention to detail.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-amber-800 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-amber-900 transition-colors duration-300"
            >
              VIEW OUR WORK
            </motion.button>
          </motion.div>

          {/* Right Video Player */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden bg-gray-300">
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=500&fit=crop"
                alt="Factory interior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-colors duration-300"
                >
                  <HiPlay size={32} className="ml-1" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default OurFactory

