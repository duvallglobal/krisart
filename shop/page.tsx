'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

// This would typically come from a database or API
const products = [
  { id: 1, title: 'Abstract Harmony', price: 500, image: '/artwork-1.jpg', category: 'abstract' },
  { id: 2, title: 'Serene Landscape', price: 750, image: '/artwork-2.jpg', category: 'landscape' },
  { id: 3, title: 'Urban Rhythm', price: 600, image: '/artwork-3.jpg', category: 'urban' },
  { id: 4, title: 'Emotional Portrait', price: 800, image: '/artwork-4.jpg', category: 'portrait' },
  { id: 5, title: 'Cosmic Dreams', price: 950, image: '/artwork-5.jpg', category: 'abstract' },
  { id: 6, title: 'Nature\'s Whisper', price: 700, image: '/artwork-6.jpg', category: 'landscape' },
]

const categories = ['all', 'abstract', 'landscape', 'urban', 'portrait']

export default function Shop() {
  const [filter, setFilter] = useState('all')
  const [priceRange, setPriceRange] = useState(1000)

  const filteredProducts = products
    .filter(product => filter === 'all' || product.category === filter)
    .filter(product => product.price <= priceRange)

  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-5xl font-bold mb-12 text-center font-serif">Shop Artworks</h1>
      
      {/* Filters */}
      <div className="mb-12 space-y-6">
        {/* Category Filter */}
        <div className="flex justify-center space-x-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition duration-300 ${
                filter === category 
                  ? 'bg-white text-black' 
                  : 'bg-gray-800 text-white hover:bg-gray-700'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Price Range Filter */}
        <div className="max-w-md mx-auto">
          <label htmlFor="price-range" className="block text-sm font-medium text-gray-300 mb-2">
            Max Price: ${priceRange}
          </label>
          <input
            type="range"
            id="price-range"
            min="0"
            max="1000"
            step="50"
            value={priceRange}
            onChange={(e) => setPriceRange(Number(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>

      {/* Product Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {filteredProducts.map((product) => (
          <motion.div 
            key={product.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="group relative overflow-hidden rounded-lg shadow-lg"
          >
            <Image
              src={product.image}
              alt={product.title}
              width={600}
              height={400}
              className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                <h2 className="text-2xl font-semibold mb-2 font-serif">{product.title}</h2>
                <p className="text-xl mb-4">${product.price}</p>
                <Link href={`/shop/${product.id}`} className="inline-block bg-white text-black px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition duration-300">
                  View Details
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

