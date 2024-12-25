'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const artworks = [
  { id: 1, title: 'Urban Landscape', description: 'A vibrant mural depicting city life.', image: '/mural-1.jpg', type: 'mural', style: 'realistic' },
  { id: 2, title: 'Abstract Harmony', description: 'A bold canvas piece exploring color and form.', image: '/canvas-1.jpg', type: 'canvas', style: 'abstract' },
  { id: 3, title: 'Nature\'s Embrace', description: 'An epoxy woodwork showcasing natural beauty.', image: '/woodwork-1.jpg', type: 'epoxy woodwork', style: 'realistic' },
  { id: 4, title: 'Geometric Dreams', description: 'A mural with intricate geometric patterns.', image: '/mural-2.jpg', type: 'mural', style: 'geometric' },
  { id: 5, title: 'Fantastical Creatures', description: 'A canvas painting of mythical beings.', image: '/canvas-2.jpg', type: 'canvas', style: 'fantasy' },
  { id: 6, title: 'Organic Flow', description: 'An abstract epoxy woodwork piece.', image: '/woodwork-2.jpg', type: 'epoxy woodwork', style: 'abstract' },
]

const types = ['all', 'mural', 'canvas', 'epoxy woodwork']
const styles = ['all', 'abstract', 'geometric', 'realistic', 'fantasy']

export default function Gallery() {
  const [filter, setFilter] = useState('all')
  const [typeFilter, setTypeFilter] = useState('all')
  const [styleFilter, setStyleFilter] = useState('all')

  const filteredArtworks = artworks
    .filter(artwork => typeFilter === 'all' || artwork.type === typeFilter)
    .filter(artwork => styleFilter === 'all' || artwork.style === styleFilter)

  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-5xl font-bold mb-12 text-center font-serif">Art Gallery</h1>

      {/* Type Filter */}
      <div className="flex justify-center mb-6 space-x-4">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => setTypeFilter(type)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition duration-300 ${
              typeFilter === type
                ? 'bg-white text-black'
                : 'bg-gray-800 text-white hover:bg-gray-700'
            }`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      {/* Style Filter */}
      <div className="flex justify-center mb-12 space-x-4">
        {styles.map((style) => (
          <button
            key={style}
            onClick={() => setStyleFilter(style)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition duration-300 ${
              styleFilter === style
                ? 'bg-white text-black'
                : 'bg-gray-800 text-white hover:bg-gray-700'
            }`}
          >
            {style.charAt(0).toUpperCase() + style.slice(1)}
          </button>
        ))}
      </div>

      {/* Artwork Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {filteredArtworks.map((artwork, index) => {
          const { ref, inView } = useInView({
            triggerOnce: true,
            rootMargin: '200px 0px',
          })
          return (
            <motion.div
              ref={ref}
              key={artwork.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              {inView && (
                <Image
                  src={artwork.image}
                  alt={artwork.title}
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                  priority={index < 4}
                />
              )}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                  <h2 className="text-2xl font-semibold mb-2 font-serif">{artwork.title}</h2>
                  <p className="text-sm">{artwork.description}</p>
                </div>
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}

