"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

const About = () => {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Sesi Interaktif",
      description: "Tanya jawab langsung dengan para ahli di bidangnya"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Materi Terpercaya",
      description: "Konten berbasis penelitian dan pengalaman praktis"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "Update Terbaru",
      description: "Strategi dan tools terkini di industri"
    }
  ];

  return (
    <section className="py-12 px-4 md:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg aspect-w-16 aspect-h-9">
              <img 
                src="images/webinar4.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Webinar Session" 
                className="w-full h-64 md:h-86 lg:h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-2 md:-right-6 bg-blue-600 text-white p-4 md:p-6 rounded-xl shadow-xl w-3/4">
              <h3 className="font-bold text-base md:text-xl mb-2">100% Praktikal</h3>
              <p className="text-blue-100 text-sm md:text-base">Studi kasus nyata dari pengalaman profesional</p>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-3 py-1 text-sm font-medium text-blue-700 bg-blue-100 rounded-full mb-4">
                Tentang Webinar
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Belajar Langsung dari <span className="text-blue-600">Para Praktisi</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Webinar kami dirancang untuk memberikan Anda wawasan mendalam dan keterampilan praktis yang bisa langsung diaplikasikan.
              </p>
            </motion.div>

            {/* Features List */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 bg-blue-100 p-3 rounded-lg text-blue-600">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="pt-4"
            >
              <Button 
                variant="primary" 
                className="px-8 py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-shadow"
              >
                Pelajari Kurikulum
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-20 bg-gray-50 rounded-2xl p-8 sm:p-10 shadow-inner"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            <div className="text-center md:text-left">
              <h3 className="text-4xl font-bold text-blue-600">5000+</h3>
              <p className="text-gray-600 mt-2">Peserta Terdaftar</p>
            </div>
            <div className="text-center md:text-left md:pl-8 pt-6 md:pt-0">
              <h3 className="text-4xl font-bold text-blue-600">98%</h3>
              <p className="text-gray-600 mt-2">Kepuasan Peserta</p>
            </div>
            <div className="text-center md:text-left md:pl-8 pt-6 md:pt-0">
              <h3 className="text-4xl font-bold text-blue-600">50+</h3>
              <p className="text-gray-600 mt-2">Perusahaan Mitra</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;