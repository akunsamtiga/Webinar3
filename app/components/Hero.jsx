"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button'; // Asumsikan Anda memiliki komponen Button terpisah

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-4 sm:px-6 lg:px-8">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-full w-1/3 bg-blue-100 opacity-20"></div>
        <div className="absolute right-0 bottom-0 h-full w-1/3 bg-indigo-100 opacity-20"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-3 py-1 text-sm font-medium text-blue-700 bg-blue-100 rounded-full">
                Webinar Eksklusif
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
            >
              Tingkatkan <span className="text-blue-600">Skill</span> Anda dengan Ahli Industri
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-600"
            >
              Pelajari strategi terbaru dan praktik terbaik langsung dari para profesional berpengalaman di bidangnya.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button 
                variant="primary"
                className="px-8 py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-shadow"
              >
                Daftar Sekarang
              </Button>
              <Button 
                variant="outline"
                className="px-8 py-3 text-lg font-medium border-2 hover:bg-gray-50 transition-colors"
              >
                Pelajari Lebih Lanjut
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center pt-8 space-x-4"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((item) => (
                  <img
                    key={item}
                    src={`https://randomuser.me/api/portraits/women/${item + 20}.jpg`}
                    alt="Participant"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <div className="text-gray-600">
                <p className="font-medium">1000+ Peserta</p>
                <p className="text-sm">Telah bergabung dalam webinar kami</p>
              </div>
            </motion.div>
          </div>
          
          {/* Right illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
              <div className="bg-blue-600 rounded-lg overflow-hidden">
                <img
                  src="images/webinar4.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                  alt="Webinar Illustration"
                  className="w-full h-auto object-cover opacity-90"
                />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-gray-900">Webinar Digital Marketing</h3>
                  <p className="text-sm text-gray-500">Hari ini, 14:00 WIB</p>
                </div>
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  Live
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-yellow-100 rounded-2xl shadow-lg flex items-center justify-center">
              <svg className="w-10 h-10 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
            </div>
            
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-green-100 rounded-full shadow-lg flex items-center justify-center">
              <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;