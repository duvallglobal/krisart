'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <div className="container mx-auto px-4 py-24">
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold mb-12 text-center font-serif"
      >
        About the Artist
      </motion.h1>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2"
        >
          <Image
            src="/artist-portrait.jpg"
            alt="Artist Portrait"
            width={600}
            height={800}
            className="rounded-lg shadow-lg"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="md:w-1/2"
        >
          <h2 className="text-3xl font-semibold mb-6 font-serif">Jane Doe</h2>
          <p className="text-lg text-gray-300 mb-6">
            Jane Doe is a contemporary artist known for her vibrant and expressive paintings. With over 15 years of experience, Jane has developed a unique style that combines elements of abstract expressionism with realistic details.
          </p>
          <p className="text-lg text-gray-300 mb-6">
            Born and raised in New York City, Jane drew inspiration from the bustling urban environment and the diverse cultures surrounding her. She studied Fine Arts at the prestigious Art Institute of Chicago, where she honed her skills and developed her artistic voice.
          </p>
          <p className="text-lg text-gray-300 mb-6">
            Jane's work has been exhibited in galleries across the United States and Europe. Her paintings are characterized by bold color choices, dynamic compositions, and a deep emotional resonance that speaks to viewers on a personal level.
          </p>
          <p className="text-lg text-gray-300">
            Through Dauntless Arts, Jane aims to share her passion for creativity and inspire others to embrace the transformative power of art in their lives.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

