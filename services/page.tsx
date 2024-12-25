import Link from 'next/link'
import { motion } from 'framer-motion'

const services = [
  {
    title: 'Custom Murals',
    description: 'Tailored designs for homes, offices, or public spaces based on your vision.',
    price: 'Starting at $2,000',
    link: '/contact'
  },
  {
    title: 'Canvas Artwork',
    description: 'Commissioned pieces for personal or corporate use.',
    price: 'Starting at $500',
    link: '/contact'
  },
  {
    title: 'Art Consultation',
    description: 'Professional advice on selecting and displaying artwork.',
    price: '$150 per hour',
    link: '/contact'
  },
  {
    title: 'Art Prints and Posters',
    description: 'High-quality reproductions of original artwork.',
    price: 'Starting at $50',
    link: '/shop'
  },
  {
    title: 'Merchandise',
    description: 'Branded items featuring unique designs.',
    price: 'Varies',
    link: '/shop'
  }
]

export default function Services() {
  return (
    <div className="container mx-auto px-4 py-24">
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold mb-12 text-center font-serif"
      >
        Our Services
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-800 rounded-lg p-6 shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-4 font-serif">{service.title}</h2>
            <p className="text-gray-300 mb-4">{service.description}</p>
            <p className="text-xl font-semibold mb-4">{service.price}</p>
            <Link href={service.link} className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
              Learn More
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

