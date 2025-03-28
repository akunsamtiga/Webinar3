"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

const Pricing = () => {
  const plans = [
    {
      id: 1,
      name: "Starter",
      price: "299",
      currency: "Rp",
      duration: "per participant",
      features: [
        "Full webinar access",
        "Presentation slides",
        "Digital certificate",
        "30-day recording access",
        "Basic worksheets"
      ],
      popular: false,
      highlight: false,
      colorScheme: {
        bg: "bg-blue-50",
        text: "text-blue-600",
        border: "border-blue-200",
        button: "bg-blue-600 hover:bg-blue-700"
      }
    },
    {
      id: 2,
      name: "Professional",
      price: "499",
      currency: "Rp",
      duration: "per participant",
      features: [
        "All Starter features",
        "1-year recording access",
        "Premium templates",
        "Exclusive community",
        "2 Q&A sessions",
        "Bonus case studies"
      ],
      popular: true,
      highlight: true,
      colorScheme: {
        bg: "bg-purple-50",
        text: "text-purple-600",
        border: "border-purple-200",
        button: "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
      }
    },
    {
      id: 3,
      name: "Enterprise",
      price: "2,499",
      currency: "Rp",
      duration: "team (max 5)",
      features: [
        "All Professional features",
        "Up to 5 participants",
        "Private consultation",
        "Company certificate",
        "Custom needs analysis",
        "Priority support"
      ],
      popular: false,
      highlight: false,
      colorScheme: {
        bg: "bg-green-50",
        text: "text-green-600",
        border: "border-green-200",
        button: "bg-green-600 hover:bg-green-700"
      }
    }
  ];

  const features = [
    {
      title: "100% Satisfaction Guarantee",
      description: "Full refund if you're not satisfied",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Secure Payment",
      description: "Multiple payment methods available",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      )
    },
    {
      title: "Flexible Access",
      description: "Available on all devices",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Official Invoice",
      description: "For corporate reimbursement",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4 w-full max-w-2xl h-64 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full opacity-20 blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider text-blue-600 bg-blue-100 rounded-full uppercase mb-6">
            Flexible Pricing
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Learning Plan</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Invest in knowledge that grows with your career. All plans include our satisfaction guarantee.
          </p>
        </motion.div>

        {/* Pricing Plans */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1]
              }}
              viewport={{ once: true, margin: "-50px" }}
              className={`relative rounded-xl border ${plan.colorScheme.border} ${plan.colorScheme.bg} transition-all duration-300 hover:shadow-lg ${plan.highlight ? 'lg:-mt-4 lg:mb-4' : ''}`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-bold px-4 py-2 rounded-bl-xl rounded-tr-xl">
                  MOST POPULAR
                </div>
              )}
              
              <div className="p-8">
                <div className="mb-8">
                  <h3 className={`text-2xl font-bold mb-3 ${plan.colorScheme.text}`}>
                    {plan.name}
                  </h3>
                  <div className="flex items-end">
                    <span className="text-5xl font-bold text-gray-900">{plan.currency}{plan.price}</span>
                    <span className="text-lg text-gray-500 ml-2">/ {plan.duration}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className={`flex-shrink-0 w-5 h-5 mr-3 mt-1 ${plan.colorScheme.text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button
                  variant={plan.highlight ? "primary" : "outline"}
                  size="lg"
                  className={`w-full ${plan.highlight ? plan.colorScheme.button : 'border-2 hover:bg-gray-50'}`}
                >
                  Get {plan.name} Plan
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Value Proposition */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-2xl p-0.5 shadow-2xl">
            <div className="bg-black rounded-xl p-10">
              <div className="flex flex-col lg:flex-row items-center justify-between">
                <div className="mb-8 lg:mb-0 lg:mr-8">
                  <h3 className="text-2xl font-bold text-gray-100 mb-3">Need a custom solution for your team?</h3>
                  <p className="text-gray-200 max-w-2xl">
                    We offer tailored corporate packages with volume discounts, dedicated support, and customized content to meet your organization's specific learning objectives.
                  </p>
                </div>
                <Button 
                  variant="primary"
                  size="xl"
                  className="whitespace-nowrap px-10 py-4 font-bold shadow-lg hover:shadow-xl transition-all bg-gradient-to-l from-gray-500 to-gray-800"
                >
                  Request Enterprise Quote
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">What's Included in All Plans</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-200 transition-all duration-300"
              >
                <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mb-5">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;