import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-neon-lime">Dauntless Arts</h3>
            <p>Transforming spaces with innovative artworks</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-neon-lime">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/gallery" className="hover:text-neon-lime transition-colors">Gallery</Link></li>
              <li><Link href="/shop" className="hover:text-neon-lime transition-colors">Shop</Link></li>
              <li><Link href="/about" className="hover:text-neon-lime transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-neon-lime transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-neon-lime">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="hover:text-neon-lime transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-neon-lime transition-colors">Terms of Service</Link></li>
              <li><Link href="/faq" className="hover:text-neon-lime transition-colors">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-neon-lime">Contact Us</h4>
            <p>Email: Request@dauntless-arts.com</p>
            <p>Phone: 225-431-5149</p>
            <p>Location: Baton Rouge, Louisiana</p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p>&copy; {new Date().getFullYear()} Dauntless Arts. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

