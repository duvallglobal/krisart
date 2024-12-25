'use client'

import { useCart } from '../contexts/CartContext'
import Link from 'next/link'
import { Minus, Plus, Trash2 } from 'lucide-react'

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, total } = useCart()

  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-8">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty. <Link href="/shop" className="text-blue-500 hover:underline">Continue shopping</Link></p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between border-b pb-4">
                <div>
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-gray-500">${item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1">
                    <Minus size={16} />
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1">
                    <Plus size={16} />
                  </button>
                  <button onClick={() => removeFromCart(item.id)} className="text-red-500 p-1">
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <p className="text-2xl font-bold">Total: ${total.toFixed(2)}</p>
            <Link href="/checkout" className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300">
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  )
}

