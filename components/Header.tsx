import Link from 'next/link'
import { ShoppingCart, Menu } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-black shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-3xl font-bold text-neon-lime">
            Dauntless Arts
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/gallery" className="text-white hover:text-neon-lime transition-colors">Gallery</Link>
            <Link href="/shop" className="text-white hover:text-neon-lime transition-colors">Shop</Link>
            <Link href="/about" className="text-white hover:text-neon-lime transition-colors">About</Link>
            <Link href="/contact" className="text-white hover:text-neon-lime transition-colors">Contact</Link>
            <Link href="/cart" className="text-white hover:text-neon-lime transition-colors">
              <ShoppingCart className="w-6 h-6" />
            </Link>
          </div>
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="w-6 h-6" />
          </button>
        </nav>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-black py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <Link href="/gallery" className="text-white hover:text-neon-lime transition-colors">Gallery</Link>
            <Link href="/shop" className="text-white hover:text-neon-lime transition-colors">Shop</Link>
            <Link href="/about" className="text-white hover:text-neon-lime transition-colors">About</Link>
            <Link href="/contact" className="text-white hover:text-neon-lime transition-colors">Contact</Link>
            <Link href="/cart" className="text-white hover:text-neon-lime transition-colors">Cart</Link>
          </div>
        </div>
      )}
    </header>
  )
}

