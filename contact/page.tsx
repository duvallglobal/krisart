'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold mb-12 text-center text-neon-lime"
      >
        Contact Us
      </motion.h1>
      <div className="flex flex-col md:flex-row gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-neon-lime">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-neon-lime"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-neon-lime">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-neon-lime"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-neon-lime">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-neon-lime"
              />
            </div>
            <button type="submit" className="w-full bg-neon-lime text-black px-4 py-2 rounded-md hover:bg-neon-lime-dark transition duration-300">
              Send Message
            </button>
          </form>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="md:w-1/2"
        >
          <h2 className="text-2xl font-semibold mb-6 text-neon-lime">Contact Information</h2>
          <div className="space-y-4">
            <p className="flex items-center text-lg">
              <Mail className="mr-4 text-neon-lime" /> Request@dauntless-arts.com
            </p>
            <p className="flex items-center text-lg">
              <Phone className="mr-4 text-neon-lime" /> 225-431-5149
            </p>
            <p className="flex items-center text-lg">
              <MapPin className="mr-4 text-neon-lime" /> Baton Rouge, Louisiana
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

