import React from 'react'
import { motion } from 'framer-motion'
import { HiPencil, HiClipboardDocumentList, HiHome } from 'react-icons/hi2'
import { FaRuler } from 'react-icons/fa6'   // ✅ replaced HiRuler

const HowWeWork = () => {
  const steps = [
    {
      icon: HiPencil,
      title: 'Initial Consultation & Design Brief',
      description: 'We start by understanding your vision, lifestyle, and requirements to create a comprehensive design brief.'
    },
    {
      icon: FaRuler,   // ✅ fixed
      title: 'Concept Development & Space Planning',
      description: 'Our designers create detailed concepts and space plans that maximize functionality and aesthetics.'
    },
    {
      icon: HiClipboardDocumentList,
      title: 'Material Selection & Procurement',
      description: 'We carefully select premium materials and manage procurement to ensure quality and timely delivery.'
    },
    {
      icon: HiHome,
      title: 'Execution & Handover',
      description: 'Our skilled team brings your vision to life with meticulous attention to detail and quality.'
    }
  ]

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-serif text-gray-800 mb-6">
            How we work
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-96 lg:h-[600px] rounded-2xl overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=600&fit=crop"
              alt="Design process meeting"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Right Content */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                  <step.icon size={24} className="text-amber-800" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-3">
                    {step.description}
                  </p>
                  <a href="#" className="text-amber-800 hover:text-amber-900 font-medium">
                    READ MORE
                  </a>
                </div>
              </motion.div>
            ))}

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="pt-8"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-amber-800 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-amber-900 transition-colors duration-300"
              >
                Let's bring your vision to life
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowWeWork

