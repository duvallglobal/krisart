'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'

export default function AdminBlog() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'The Art of Mural Making', status: 'Published', date: '2023-05-15' },
    { id: 2, title: 'Exploring Abstract Expressionism', status: 'Draft', date: '2023-06-02' },
    { id: 3, title: 'The Power of Public Art', status: 'Published', date: '2023-06-20' },
  ])

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold">Blog Posts</h1>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md flex items-center">
          <Plus className="w-5 h-5 mr-2" />
          New Post
        </button>
      </div>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {posts.map((post) => (
              <tr key={post.id}>
                <td className="px-6 py-4 whitespace-nowrap">{post.title}</td>
                <td className="px-6 py-4 whitespace-nowrap">{post.status}</td>
                <td className="px-6 py-4 whitespace-nowrap">{post.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="text-blue-600 hover:text-blue-900 mr-2">Edit</button>
                  <button className="text-red-600 hover:text-red-900">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

