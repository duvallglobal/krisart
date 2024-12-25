'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { SearchIcon } from 'lucide-react'

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    router.push(`/search?q=${encodeURIComponent(searchTerm)}`)
  }

  return (
    <form onSubmit={handleSubmit} className="relative">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
        className="pl-10 pr-4 py-2 bg-gray-800 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
    </form>
  )
}

