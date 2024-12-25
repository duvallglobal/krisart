import Link from 'next/link'

export default function ThankYou() {
  return (
    <div className="container mx-auto px-4 py-24 text-center">
      <h1 className="text-4xl font-bold mb-4">Thank You for Your Order!</h1>
      <p className="mb-8">We've received your order and will process it shortly.</p>
      <Link href="/" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300">
        Return to Home
      </Link>
    </div>
  )
}

