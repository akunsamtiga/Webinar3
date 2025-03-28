"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

const Schedule = () => {
  const days = [
    {
      id: 1,
      date: "Senin, 15 November 2023",
      events: [
        {
          time: "09:00 - 10:30 WIB",
          title: "Registrasi & Pembukaan",
          speaker: "Tim Panitia",
          description: "Registrasi peserta dan pembukaan acara oleh MC",
          type: "general"
        },
        {
          time: "10:30 - 12:00 WIB",
          title: "Digital Marketing Trends 2024",
          speaker: "Dr. Sarah Wijaya",
          description: "Update terbaru strategi digital marketing untuk tahun depan",
          type: "keynote"
        },
        {
          time: "13:00 - 14:30 WIB",
          title: "Workshop: Growth Hacking",
          speaker: "Michael Santoso",
          description: "Praktik langsung teknik growth hacking untuk startup",
          type: "workshop"
        }
      ]
    },
    {
      id: 2,
      date: "Selasa, 16 November 2023",
      events: [
        {
          time: "09:00 - 10:30 WIB",
          title: "Data-Driven Decision Making",
          speaker: "Andi Pratama",
          description: "Bagaimana membuat keputusan bisnis berbasis data",
          type: "masterclass"
        },
        {
          time: "10:30 - 12:00 WIB",
          title: "Panel Discussion: Future of Tech",
          speaker: "Semua Pembicara",
          description: "Diskusi interaktif tentang masa depan teknologi",
          type: "panel"
        },
        {
          time: "13:00 - 15:00 WIB",
          title: "Sesi Networking",
          speaker: "Semua Peserta",
          description: "Kesempatan berjejaring dengan peserta lain",
          type: "networking"
        }
      ]
    }
  ];

  const getEventColor = (type) => {
    const colors = {
      general: "bg-gray-100 text-gray-800",
      keynote: "bg-blue-100 text-blue-800",
      workshop: "bg-purple-100 text-purple-800",
      masterclass: "bg-green-100 text-green-800",
      panel: "bg-yellow-100 text-yellow-800",
      networking: "bg-pink-100 text-pink-800"
    };
    return colors[type] || "bg-gray-100";
  };

  const getEventIcon = (type) => {
    const icons = {
      general: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      keynote: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      workshop: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    };
    return icons[type] || icons.general;
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider text-blue-600 bg-blue-100 rounded-full uppercase mb-4">
            Agenda Kegiatan
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Jadwal <span className="text-blue-600">Webinar</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Rangkaian acara yang dirancang untuk memberikan pengalaman belajar terbaik
          </p>
        </motion.div>

        {/* Schedule Timeline */}
        <div className="max-w-4xl mx-auto">
          {days.map((day, dayIndex) => (
            <motion.div
              key={day.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: dayIndex * 0.1 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="flex items-center mb-8">
                <div className="flex-shrink-0 bg-blue-600 rounded-lg p-3 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="ml-4 text-2xl font-bold text-gray-900">{day.date}</h3>
              </div>

              <div className="space-y-6">
                {day.events.map((event, eventIndex) => (
                  <motion.div
                    key={eventIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 + (eventIndex * 0.1) }}
                    viewport={{ once: true }}
                    className="relative pl-14"
                  >
                    <div className="absolute left-0 top-0 h-full w-0.5 bg-gray-200">
                      <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full ${getEventColor(event.type).replace('bg-', 'bg-').replace('text-', 'bg-')}`}></div>
                    </div>

                    <div className={`p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 ${getEventColor(event.type)}`}>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 p-2 rounded-lg bg-white shadow-xs mr-4">
                          {getEventIcon(event.type)}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between flex-wrap">
                            <span className="text-sm font-medium text-gray-500">{event.time}</span>
                            <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getEventColor(event.type)}`}>
                              {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                            </span>
                          </div>
                          <h4 className="text-xl font-bold text-gray-900 mt-1 mb-2">{event.title}</h4>
                          <p className="text-gray-600 mb-3">{event.description}</p>
                          <p className="text-sm font-medium text-gray-700">
                            Pembicara: <span className="text-blue-600">{event.speaker}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-10 shadow-inner">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Tertarik Mengikuti Acara Kami?</h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg">
              Daftar sekarang untuk mengamankan tempat Anda dan dapatkan akses eksklusif ke semua sesi
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                variant="primary"
                size="xl"
                className="px-10 py-4 font-bold shadow-lg hover:shadow-xl transition-all"
              >
                Daftar Sekarang
              </Button>
              <Button 
                variant="outline"
                size="xl"
                className="px-10 py-4 font-bold border-2 hover:bg-gray-50 transition-colors"
              >
                Download Agenda
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Schedule;