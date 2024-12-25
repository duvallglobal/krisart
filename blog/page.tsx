import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const blogPosts = [
  {
    title: 'The Art of Mural Making',
    excerpt: 'Discover the process behind creating large-scale murals and their impact on communities.',
    image: '/blog-mural.jpg',
    date: 'May 15, 2023',
    slug: 'art-of-mural-making'
  },
  {
    title: 'Exploring Abstract Expressionism',
    excerpt: 'A deep dive into the world of abstract expressionism and its influence on modern art.',
    image: '/blog-abstract.jpg',
    date: 'June 2, 2023',
    slug: 'exploring-abstract-expressionism'
  },
  {
    title: 'The Power of Public Art',
    excerpt: 'How public art installations can transform urban spaces and bring communities together.',
    image: '/blog-public-art.jpg',
    date: 'June 20, 2023',
    slug: 'power-of-public-art'
  }
]

export default function Blog() {
  return (
    <div className="container mx-auto px-4 py-24">
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold mb-12 text-center font-serif"
      >
        Blog
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src={post.image}
              alt={post.title}
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2 font-serif">{post.title}</h2>
              <p className="text-gray-400 text-sm mb-4">{post.date}</p>
              <p className="text-gray-300 mb-4">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
                Read More
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

