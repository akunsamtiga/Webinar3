"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

const Speakers = () => {
  const speakers = [
    {
      id: 1,
      name: "Dr. Sarah Wijaya",
      role: "Head of Digital Marketing at TechCorp",
      bio: "Pakar dengan 10+ tahun pengalaman di bidang digital marketing dan growth hacking",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      topics: ["SEO", "Content Marketing", "Data-Driven Marketing"],
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#"
      }
    },
    {
      id: 2,
      name: "Michael Santoso",
      role: "Lead Product Designer at FinTech Inc",
      bio: "Mendesain produk digital yang digunakan oleh jutaan orang di Asia Tenggara",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      topics: ["UX Research", "UI Design", "Design System"],
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 3,
      name: "Andi Pratama",
      role: "Data Scientist at AI Startup",
      bio: "Spesialis machine learning dan analitik data untuk bisnis",
      image: "https://randomuser.me/api/portraits/men/65.jpg",
      topics: ["Predictive Analytics", "AI Implementation", "Data Visualization"],
      social: {
        linkedin: "#",
        github: "#"
      }
    },
    {
      id: 4,
      name: "Lisa Setiawan",
      role: "VP of Engineering at HealthTech",
      bio: "Memimpin tim engineering untuk solusi kesehatan digital",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      topics: ["Tech Leadership", "Agile Development", "System Architecture"],
      social: {
        linkedin: "#",
        twitter: "#",
        website: "#"
      }
    }
  ];

  const SocialIcon = ({ platform }) => {
    const icons = {
      linkedin: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
      twitter: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ),
      instagram: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
        </svg>
      ),
      github: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    };

    return (
      <a 
        href="#" 
        className="text-gray-500 hover:text-blue-600 transition-colors duration-300"
        aria-label={`${platform} profile`}
      >
        {icons[platform]}
      </a>
    );
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider text-blue-600 bg-blue-100 rounded-full uppercase mb-4">
            Expert Speakers
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Learn from Industry <span className="text-blue-600">Leaders</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our carefully selected speakers bring real-world expertise and actionable insights
          </p>
        </motion.div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {speakers.map((speaker, index) => (
            <motion.div
              key={speaker.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-lg transform group-hover:scale-105 transition-all duration-500 -z-10"></div>
              
              <div className="h-full bg-white rounded-xl shadow-sm overflow-hidden group-hover:shadow-md transition-all duration-500 flex flex-col">
                <div className="pt-10 px-6">
                  <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg mb-6">
                    <img 
                      src={speaker.image} 
                      alt={speaker.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-10"></div>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{speaker.name}</h3>
                    <p className="text-blue-600 font-medium mb-4">{speaker.role}</p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">{speaker.bio}</p>
                  </div>
                </div>
                
                <div className="px-6 pb-6 mt-auto">
                  <div className="mb-6">
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Expertise</h4>
                    <div className="flex flex-wrap justify-center gap-2">
                      {speaker.topics.map((topic, i) => (
                        <span 
                          key={i}
                          className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-center space-x-4">
                    {Object.keys(speaker.social).map((platform) => (
                      <SocialIcon key={platform} platform={platform} />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-10 shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">Ready to Transform Your Skills?</h3>
            <p className="text-blue-100 max-w-2xl mx-auto mb-8 text-lg">
              Join our exclusive webinar and gain insights from top industry professionals
            </p>
            <Button 
              variant="white"
              size="xl"
              className="px-10 py-4 font-bold shadow-lg hover:shadow-xl transition-all"
            >
              Reserve Your Spot Now
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Speakers;